"""Read the two archives the library starts from. Slow on purpose: one request, then a pause.

  python3 tools/archives.py trial t18421024-3070          an Old Bailey trial, in full
  python3 tools/archives.py trials '"ten years old"' 1830 1850   search trial text between two years
  python3 tools/archives.py life obpdef1-3070-18421024    a Digital Panopticon life archive
  python3 tools/archives.py source btr59962 cin64911      single linked records, every field
  python3 tools/archives.py lives e0.type.t.t=root e0.archive_size.i.l=18 e1.type.t.t=tried e1.age.i.h=12
                                                          search life archives (field names: NOTEBOOK.md)
"""
import html, json, re, sys, time, urllib.parse, urllib.request

UA = "afterwards-library/0.1 (reads slowly; github.com/linustalacko/afterwards)"
OLD_BAILEY = "https://www.dhi.ac.uk/api/data/"
PANOPTICON = "https://www.digitalpanopticon.org/"


def get(url):
    time.sleep(1.3)
    request = urllib.request.Request(url, headers={"User-Agent": UA})
    return urllib.request.urlopen(request, timeout=60).read().decode("utf8", "ignore")


def text_of(page):
    page = re.sub(r"<script.*?</script>|<style.*?</style>", "", page, flags=re.S)
    return html.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", page)))


def trial(key):
    hit = json.loads(get(OLD_BAILEY + "oldbailey_record_single?idkey=" + key))["hits"]["hits"][0]["_source"]
    return hit["title"] + "\n" + hit["text"]


def trials(text, year_from=None, year_to=None):
    params = {"text": text}
    if year_from: params["year_gte"] = year_from
    if year_to: params["year_lte"] = year_to
    hits = json.loads(get(OLD_BAILEY + "oldbailey_record?" + urllib.parse.urlencode(params)))["hits"]
    lines = [f"{hits['total']} trials"]
    for hit in hits["hits"]:
        source = hit["_source"]
        lines.append(f"{source['idkey']}  {source['title']}")
    return "\n".join(lines)


def life(archive_id):
    body = text_of(get(PANOPTICON + "life?id=" + urllib.parse.quote(archive_id)))
    start = body.find("Life archive ID")
    end = body.find("About the project Research and teaching Contact us", start)
    return re.sub(r"Report an error Thank you.*?consulted [^.]*\.", "", body[start:end])


def source(record_id):
    page = get(PANOPTICON + "source?ids=" + urllib.parse.quote(record_id))
    return re.sub(r"(\| )+", "| ", html.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " | ", page))))


def lives(params):
    page = get(PANOPTICON + "search?" + urllib.parse.urlencode(params))
    seen, lines = set(), []
    for part in re.split(r'(?=<a[^>]+href="life\?id=)', page)[1:]:
        archive_id = re.match(r'<a[^>]+href="life\?id=([^"&]+)', part).group(1)
        if archive_id in seen: continue
        seen.add(archive_id)
        lines.append(archive_id + "  " + text_of(part).split(" Life archive ")[0].strip()[:400])
    return "\n\n".join(lines) or "nothing found"


if __name__ == "__main__":
    command, args = sys.argv[1], sys.argv[2:]
    if command == "trial": print("\n\n".join(trial(a) for a in args))
    elif command == "trials": print(trials(*args))
    elif command == "life": print("\n\n".join(life(a) for a in args))
    elif command == "source": print("\n\n".join(source(a) for a in args))
    elif command == "lives": print(lives(dict(a.split("=", 1) for a in args)))
    else: print(__doc__)
