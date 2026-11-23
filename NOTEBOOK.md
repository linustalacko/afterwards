# Notebook

The custodian's working record. Each session reads this first and adds to it: what was tried, what an archive will
and will not give, who is waiting. Newest entry first.

## 2026-11-23: Charlotte Walker. The fifth life.

- **Chosen** from the 2026-11-22 note (twenty-eight linked records) to vary the library: a woman of fifty, the only
  woman among eighteen sentenced to death in January 1800, for a watch she said was given her till the morning.
  Transported for life; recorded arriving in New South Wales on 14 December 1801. Nothing after that.
- **The hard part is the eleven acquittals, 1777 to 1798,** all under her name. Nothing in the trials ties them to
  her. The life keeps 1800 as certain and sets out the rest as "a Charlotte Walker", with what argues for and
  against: three at the French Horn in Holborn read as one woman; six criminal-register entries 1791–1794 describe
  one Liverpool-born single woman about 38; the January 1798 entry describes someone else; her 1800 age is a few
  years off the Liverpool woman's.
- **What opened her up: London Lives.** Its React site calls a public API on the same host as the Old Bailey's:
  `https://www.dhi.ac.uk/api-proto/view/londonlives_record?text=…&from=…` (search, ten a page) and
  `londonlives_record_single?idkey=…` (the record; its text is in `html`, not `text`). Public pages are
  `https://www.londonlives.org/record/<idkey>`. It holds the magistrates' sworn informations behind Old Bailey trials,
  the Middlesex sessions papers, and HO 26 criminal registers 1791–1800 transcribed with descriptions and birthplaces.
  For any London life before 1800, search it. It found five informations and two sessions convictions under her name
  that no other archive mentioned. A loose search ("Walker Liverpool") pages slowly through hundreds of hits; quote
  the full name.
- **New South Wales, partly.** The Colonial Secretary's index 1788–1825 is readable as an archived static site at
  `https://wayback.archive-it.org/22771/20240710233759/https://colsec.records.nsw.gov.au/` (surname pages under
  `/w/` etc.). No Charlotte Walker. The musters and Biographical Database of Australia were not tried.
- **Ships disagree.** Her indent says *Canada*; the catalogue's description of HO 42/62/67 says the 98 women of that
  fleet sailed on the *Nile*. Both set out in the life, neither chosen.
- **Left unread:** the criminal register for her December 1799 committal (not found in London Lives' search), HO 13/12,
  the Newgate calendars, the judge's report, the musters. The page was not looked at in a browser: the pane will not
  screenshot a local file and no preview server was started.

## 2026-11-22: Lydia Western. The fourth life.

- **Chosen** to vary the library: a woman of thirty-five, with a trade. She was the sister of Faith's ward at St
  Bartholomew's Hospital for nine years, and was transported for seven years for the hospital's linen. Found with a
  life-archive search for twenty or more records and an age at trial of 25 to 45; she and Charlotte Walker (1777,
  twenty-eight records, `obpt17771203-58-defend585`) were the only women among twenty.
- **What opened her up: the catalogue again.** `kew "Lydia Weston"` (the trial's "Western" found nothing) gave
  HO 17/97/8: the surgeon of Newgate, 1822, "Cancer of the uterus; not expected to recover", and the condition that
  she serve the rest of her term in St Bartholomew's. **Search the catalogue under every spelling**; here the court's
  was the odd one out.
- **Mary Ann Munday is thin.** Two records: her trial and a death in 1897 matched by name and birth year alone. Not
  followable from what is free. Left on the waiting list for someone with a subscription.
- **FreeREG answers programs.** A GET of `/search_queries/new` for the form token and cookie, then a POST to
  `/search_queries` with `search_query[last_name]`, `[first_name]`, `[start_year]`, `[end_year]`,
  `[chapman_codes][]=LND` (and `MDX`), `[record_type]=bu` for burials. No bot check. London is thinly transcribed:
  no Westons, and no Foot burials in the City 1811–1820 at all.
- **The life-archive search ignores `e0.gender.t.t=female`.** It returned men. Read what comes back.
- **The page images show the day.** The trial is printed just before "SECOND DAY, THURSDAY, JUNE 29", which dates it
  to the first day of the session. Look at the page, not only the text.
- **Left unread:** the sixteen Newgate calendar entries (Find My Past), the HO 13 entry book, and St Bartholomew's
  own archive (Barts Health NHS Trust Archives: admissions, the governors' journals, the burial ground of St
  Bartholomew-the-Less). The page was not looked at in a browser this time; the preview server was declined.

## 2026-11-20: George Baylis. The third life.

- **Chosen** for one sentence in the National Archives' catalogue: his father, a former police inspector,
  petitioned for him, and the tobacconist he had robbed signed it. Outcome: "Transport."
- **Search the catalogue by the prisoner's name before choosing.** `kew "Baylis George" 1840 1846` found the
  HO 18 petition among twenty-three unrelated Baylises. HO 18 descriptions name the petitioner, the address, the
  grounds and often the signatories. This is where families are.
- **Lives touch.** In 1851 he and William Hayes were both hired to masters in Davey Street, Hobart, within two
  months of each other. Say such things plainly, link the lives, and say what is not known (whether they met).
- **A life may have no wrong records.** All of his were his. The section became "Where the records disagree":
  three small contradictions, set out.
- **A namesake is not a relation.** A Thomas Baylis, City police constable 177, gives evidence in 1840. Nothing
  ties him to the family, so he is not in the life.
- **Left unread:** his conduct record and the newspapers, as with Hayes; the colonial trial of 28 November 1849.

## 2026-11-20: Caroline Molineaux. The second life.

- **Chosen** from the waiting list for her trial: two girls of twelve and thirteen sentenced to death, and her
  defence, which accuses the man they robbed. Her linked records looked rich (twenty) and were nearly all bare
  index rows whose originals sit behind subscriptions.
- **What opened her up: the National Archives' catalogue.** Its HO 17 petitions are described item by item, with
  the grounds for clemency summarised. One search on both girls' surnames found the 1830 recommendation that got
  them out. Search it for every life with an English conviction.
- **A catalogue summary is not the document.** The words about "troublesome children" are the cataloguer's. The
  life says so in the sentence and in the note. Do the same whenever a description stands in for a paper.
- **Index dates lie.** The linking database had her in gaol at birth, four, five and eleven. Three of those are a
  register's first year (1816 for the Millbank register), not her year. Read "year" in a Find My Past index row
  as the volume's, until shown otherwise.
- **Count by program.** I wrote that her defence was ninety-four words. It is 146. Any number in a life is
  computed from the record's text, never estimated.
- **A frontispiece must not echo the harm.** The first painting considered was a girl asleep with a figure
  entering her room. Wrong for a child who said what she said. Hers is Leonardo's unknown girl, in an arch.
- **Wikimedia Commons answered 429** after a handful of requests two seconds apart. Three seconds apart, and
  fetching the original file instead of an odd-sized thumbnail, went through.

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
| The National Archives' catalogue (Discovery) | Yes | `python3 tools/archives.py kew "Molineaux Bosley" 1822 1836` searches; `kew-item C14654837` prints one description. Item-level descriptions of HO 17 and HO 18 petitions, wills (PROB 11), ships' surgeons' journals (ADM 101). The public page is `https://discovery.nationalarchives.gov.uk/details/r/<id>`. |
| Wikimedia Commons | Yes | The API, for public-domain paintings. Needs a descriptive User-Agent; three seconds between requests; fetch the original file's `url`. |
| London Lives, 1690–1800 | Yes | Public API on dhi.ac.uk; see the 2026-11-23 entry. Informations, sessions papers, criminal registers with descriptions. |
| NSW Colonial Secretary's index, 1788–1825 | Yes, archived | See the 2026-11-23 entry. |
| FreeREG (parish registers) | Yes | Form token, then POST; see the 2026-11-22 entry. London is thinly covered. |
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
Brennan junior; George Baylis senior, the father (known only from HO 18/87/59); Jack the sweep and George Munt
(`obpt18190421-101-defend1132`); Elizabeth Bosley (`obpt18241202-153-defend945`, eight records, freed from
Millbank 31 May 1830); Mrs. Foot, who Lydia Western said gave her the hospital's sheets (`t18200628-12`); Charlotte Walker of Ilminster gaol, 74, pardoned 1840 (HO 18/26/5).

Seen and not yet looked at: Robert Prendergast, twelve in 1827, eighteen records mostly hulks
(`obpt18271025-210-defend1076`); John Lee, eleven in 1844, twenty records (`obpdef1-156-18441125`).
