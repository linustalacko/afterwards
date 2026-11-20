# Notebook

The custodian's working record. Each session reads this first and adds to it: what was tried, what an archive will
and will not give, who is waiting. Newest entry first.

## 2026-11-20: William Hayes. The first life.

- **Chosen** from ten children in the Digital Panopticon who were twelve or under at trial and have eighteen or
  more linked records. The trial is four sentences long and one of them is "Hayes came and told me something—he
  took off my boots and ran away with them."
- **What made him followable:** six tattoos recorded at Hobart in 1843. The Tasmanian Police Gazette printed the
  same marks each time he was discharged from gaol, 1872 to 1876. Without them he is one William Hayes among many.
- **The linking database is often wrong, and saying so is the work.** Of about thirty records joined to him, four
  belong to other men or are doubtful (a William Haynes of the *Asia*, 1822; a Westbury man of the *Asia*, 1836; a
  Launceston man three inches too tall). Check the ship, the arrival year and the description on every record
  before using it. The first candidate looked at, George Munt, turned out to be joined to a different boy's trial.
- **Search the Old Bailey for the name around the trial date.** Hayes had two more indictments the same day
  (3071, 3072) that the life archive does not mention, and they are what make the story: three boys in five days.
- **The front matter of each session explains its own marks.** `f18421024` says what the star by his name means.
- **Left unread:** his conduct record (Tasmanian Names Index, refuses automated readers) and every Tasmanian
  newspaper (Trove, bot check). Both are listed under "Not yet known" on his page.

## How a life gets written

1. Pick a person. Someone who appears in one record with something human in it, and whom nobody has followed.
2. Read that record whole. Search the same archive for the name around that date.
3. Follow every link, and read each linked record field by field. Decide for each: him, not him, or doubtful.
4. Write the life (`lives/<slug>.md`) by the rules in `CONTRIBUTING.md`. Check every number and date in the
   finished text against the records once more; compute weekdays and intervals, never recall them.
5. People met along the way go on the waiting list (`site/waiting.md`).
6. `node build.mjs`, read it in a browser, commit, push. An entry here.

## The archives

| Archive | Will it be read? | How |
|---|---|---|
| Old Bailey Proceedings, 1674–1913 | Yes | `https://www.dhi.ac.uk/api/data/oldbailey_record?text=…&year_gte=…&year_lte=…` and `oldbailey_record_single?idkey=t18421024-3070`. Only `text`, `year_gte`, `year_lte` and `from` are known to filter. Front matter is `f` + the session date. The public page is `https://www.oldbaileyonline.org/record/<id>` (refuses programs, fine for links). |
| Digital Panopticon, 1780–1925 | Yes | `life?id=…`, `source?ids=…` (one record, every field), and `search?…`. No page for a single record: link to the life archive and name the record id. |
| Wikimedia Commons | Yes | The API, for public-domain paintings. Needs a descriptive User-Agent. |
| FreeBMD, Internet Archive | Answer, not yet used | |
| Tasmanian Names Index (`stors.tas.gov.au`) | No, 403 | A person can open `https://stors.tas.gov.au/NI/<Taho url id>`; the id is on each Founders and Survivors record. |
| Trove (Australian newspapers) | No, bot check | Has an official API that needs a key. Ask Linus before applying for one. |
| Papers Past (New Zealand) | No, bot check | |
| Library of Congress newspapers | Timed out twice | Try again another day. |

**Searching life archives.** The search form builds a query of four-part field names. `e0` is the person, `e1`
onward are events:

```
e0.type.t.t=root   e0.archive_size.i.l=18        at least 18 linked records
                   e0.<set>.i.l=1                at least one record from a set (bmd, a85, pld, fsb, …)
e1.type.t.t=tried  e1.age.i.h=12                 aged 12 or under at a trial
```

The three-letter record sets are listed in the site's `js/globals.js`. Combining a census filter with an age filter
returned people who were not children, so read what comes back.

## Waiting

On the site's waiting list (`site/waiting.md`): Mary Ann Munday; John Tatnell, William Hampshire and Laurence
Brennan junior; George Baylis (`obpdef1-1297-18410510`); Jack the sweep and George Munt
(`obpt18190421-101-defend1132`); Caroline Molineaux (`obpt18241202-153-defend946`).

Seen and not yet looked at: Robert Prendergast, twelve in 1827, eighteen records mostly hulks
(`obpt18271025-210-defend1076`); John Lee, eleven in 1844, twenty records (`obpdef1-156-18441125`).
