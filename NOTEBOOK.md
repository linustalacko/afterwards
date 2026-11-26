# Notebook

The custodian's working record. Each session reads this first and adds to it: what was tried, what an archive will
and will not give, who is waiting. Newest entry first.

## 2026-11-26: Edward Wright. The eighth life.

- **Chosen** to vary the library: an old man, not transported, a sawyer and Rag Fair dealer tried at the Old Bailey
  from about 62 to about 82. Found with a life-archive search for an age at trial of 55 or over
  (`e1.age.i.l=55`, `e0.archive_size.i.l=12`). Also seen there and not followed: Sarah Franklin, 70, condemned for
  burglary in 1803 (`obpt18030420-38-defend387`, 27 records, mostly Find My Past rows); Joseph Penn, 54 in 1791
  (`obpt17910413-56-defend647`). Looked at first and dropped as unfollowable: John Osburn, born at Guinea (one record;
  the 1728 John Osborn removed from St Martin's had a wife, and Osburn said he never married); George Baylis senior
  (two passing mentions as a watchman, 1820 and 1830, nothing joined).
- **What joined him up: his method.** In most trials he lays his bag over goods on a counter and lifts them together,
  and his defence says so. That tied 1790 (not in the life archive) to the rest, and a "George Wright" of 1806 to him
  as probable. A habit can link records where a name cannot.
- **London Lives page images can be fetched.** A facsimile id `NAHOCR700030192` is at
  `https://www.dhi.ac.uk/san/pl/HO/CR/NAHOCR70003/NAHOCR700030192.jpg` (`san/pl/` + chars 2–4 + `/` + chars 4–6 +
  `/` + first 11 + `/` + id + `.jpg`; from the site's JS). The HO 26 registers are two-page spreads; the record's
  image is often only the right-hand page (sentence, remarks), so fetch the id one lower for name and description.
  The clerks' remarks column is where the human lines are ("tried almost as often as he years old").
- **The registers' "D.P." column** is headed "If discharged by Proclamation".
- **Index dates can be wrong again:** the dataset dates his 1797 committal 15 March; the page reads "Mar. 1st".
- **FreeREG returned nothing** for Edward Wright burials in LND or MDX 1808–1815; the form may not have taken (zero
  rows of any kind). Try it by hand.
- **Left unread:** the Newgate calendars (HO 77, Find My Past), Ancestry's criminal registers after 1800, HO 13/15
  pp. 113–14, HO 47, the City sessions papers, and any burial. Lives touch: he and Charlotte Walker are in the same
  October 1791 register; both lives say so.

## 2026-11-25: Susannah Prince. The seventh life.

- **Chosen** to vary the library: not a defendant, and the first life before 1777. A poor woman of Westminster who
  married James Prince, a Black servant born in Jamaica and "given as a Present" to a Major Cossley when an infant,
  and told the parish of St Martin in the Fields about him twice (1730, 1737). Died in its workhouse, 3 January 1741.
- **What opened her up: London Lives' datasets.** St Martin in the Fields settlement examinations (`smdsset_…`) are
  transcribed in full and found by a quoted phrase, e.g. `"upon his oath saith that he was born"`. The St Martin's
  workhouse registers (`smdswhr_…`) are found with `"<Surname> (pauper)"`: every admission and discharge, two
  registers side by side (F4003 running, F4073 counting each person's admissions), age, overseer, outcome ("Dyed").
  Columns are unlabelled. No page images for either. Years are as now counted; checked by the running register's
  page order across January 1741.
- **The catalogue gave the masters.** `kew "Cossley"` found Major Nat Cossley's 1718 letter endorsed "vintners"
  (her "Vitners in Kent") and a Captain Cossley on the march to Elgin in 1725 (her "went to Scotland"). Set out as
  probable, not joined.
- **FreeREG** found an Anne Prince baptised in Covent Garden three months after Susannah's first examination, mother
  Susanna, father George. Rejected on the father's name and set out.
- **Weekdays are not given before 1752.** England kept the Julian calendar; Python's dates are Gregorian. Intervals
  in days are safe, weekdays are not.
- **Left unread:** the Fleet registers (RG 7, subscription indexes), St Martin's burial registers, the two Cossley
  letters, the 1703 will of John Cossley of "Hinston" in Jamaica, and the original books at Westminster.
- **Two more for the waiting list from the same examinations:** John Osburn, born at Guinea (1733), and George Romea,
  born at Bengal (1777). Romea has three records only (one examination, two admissions); Osburn was not searched further.

## 2026-11-24: Julia Mahoney. The sixth life.

- **Chosen** to vary the library: an adult Irish woman, a laundress of Shadwell, never transported, in London's local
  and convict prisons from 1864 to 1883. Found with a life-archive search for at least fifteen records, at least one
  licence (`e0.pld.i.l=1`) and one death record (`e0.bmd.i.l=1`), and an age at trial of 45 or over. Eleanor
  Errington of Copenhagen House (robbed 1777, `t17780429-42`) was looked at first and has one record only.
- **What opened her up: the women's licence files (PCOM 4).** The Digital Panopticon transcribes one file in full as
  sub-records of the licence (`source?ids=pldf…`): descriptions, weights in and out of each prison, previous
  convictions, and every prison offence with its punishment. One file (PCOM 4/48/29) held both her sentences, so the
  links between 1864, 1865, 1871 and 1876 rest on the prison's own list of previous convictions, not on the database.
  The offence dates sit in a column labelled "taken off sick list"; the prison field is sometimes the prisoner's name.
- **The Middlesex House of Detention calendars (`cpm…`) are transcribed in full** too, with alias, magistrate, judge
  and previous convictions. They carried the alias Ann Brown both ways.
- **Read the page images, every time.** The transcriptions had "Payment" for Pamment, "Germans" for Germane,
  "Philhim" for Philbin, and the wrong judge for the 1853 trial (the heading of the next trial).
- **FreeBMD now redirects programs to `/noc/gate`.** Treated as a refusal; the 1875 death row was not read. It was
  rejected on dates anyway.
- **A doubtful earlier record is set out in its own section** ("Before 1864"), with what argues for and against, and
  nothing in the life rests on it: a Julia Mahoney stabbed on the forehead in Bluegate Fields in 1853, the same
  surgeon in both trials, a forehead scar in both prison descriptions.
- **Left unread:** the criminal registers to 1892 (Ancestry), the PCOM 2 and HO 24 registers (Find My Past), the
  censuses, the GRO death index, the Thames Police Court's own registers, and what East End Finchley was.

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
| FreeREG (parish registers) | Yes | Form token, then POST; see the 2026-11-22 entry. London is thinly covered. Each hit's `/search_records/…` page gives the parents. |
| FreeBMD | No, gate for programs (2026-11-24) | |
| Internet Archive | Answers, not yet used | |
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
Millbank 31 May 1830); Mrs. Foot, who Lydia Western said gave her the hospital's sheets (`t18200628-12`); Charlotte Walker of Ilminster gaol, 74, pardoned 1840 (HO 18/26/5); Jane Smith, transported 1853 for stabbing a Julia Mahoney (`t18530509-597`); John Osburn, born at Guinea (`smdsset_19_2015`); George Romea, born at Bengal (`smdsset_32_50698`).

Seen and not yet looked at: Robert Prendergast, twelve in 1827, eighteen records mostly hulks
(`obpt18271025-210-defend1076`); John Lee, eleven in 1844, twenty records (`obpdef1-156-18441125`).
