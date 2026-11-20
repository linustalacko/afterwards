# Adding to the library

There are four ways to help, and three of them need no code.

| | What you do | How |
|---|---|---|
| **Answer a question** | Every life ends with "Not yet known". Look one up somewhere the library cannot reach: a subscription site, a record office, a newspaper collection. | [Report a finding](../../issues/new?template=finding.md) |
| **Check a life** | Open the original documents a life's notes point to and confirm or correct each note. | [Report a check](../../issues/new?template=check.md) |
| **Name someone** | Put a person on the waiting list, with the record you met them in. An ancestor or a stranger. | [Name a person](../../issues/new?template=person.md) |
| **Write a life** | Follow the rules below and open a pull request with one file in `lives/`. | This page |

## The rules a life is held to

1. **One person at a time.** One file, one person.
2. **Every sentence rests on a record.** Each claim has a note, and the note names a record someone else can open.
   Where you are guessing, the sentence says so ("probably", "I think", "the record does not say").
3. **Doubt is shown.** Two records with one name are often two people. Say why you believed a record. List the
   records you turned away under "Records that are not him" (or her, or them), with the reason.
4. **Nothing is improved.** Keep what the person did and what was done to them, in plain words. No invented
   thoughts, feelings, weather or dialogue. Quote the record where it speaks.
5. **No life is finished.** End with "Not yet known": questions someone else could answer.
6. **Only the dead.** Nobody who died less than 100 years ago, or was born less than 130 years ago where the death
   is unknown. Nothing about living descendants.
7. **Say who wrote it and who checked it.** `written_by` is you, or you and the AI you used. `checked_by` stays
   empty until a second person has compared the life with the original documents.

## The file

`lives/<first-name>-<surname>.md`. Copy [`lives/william-hayes.md`](lives/william-hayes.md) and change it.

```
---
name: William Hayes
born: about 1832
died: after 8 March 1876
first_recorded: 24 October 1842
first_place: the Old Bailey, London
last_recorded: 8 March 1876
last_place: Launceston gaol, Tasmania
standfirst: One or two sentences. What a stranger should know first.
written_by: Your name
written_on: 20 November 2026
checked_by:
frontispiece: games
frontispiece_caption: Painter, title, year. Say that it is not a portrait of the person.
---

The life, in paragraphs. A claim gets a note like this.[^trial]

[^trial]: Where it comes from, with [a link](https://example.org) to the record.

## Records that are not him

- Each record you turned away, and why.

## Not yet known

- Each open question.
```

The text is Markdown, but only a little of it: paragraphs, `##` headings, `-` lists, `*italic*`, `**bold**`,
`[links](https://…)` and `[^notes]`. Each note sits on one line. Run `node build.mjs` and open `docs/` to see it.

A frontispiece is optional. It must be a painting in the public domain, added to `site/img/` as `<name>-2000.jpg`
and `<name>-1000.jpg`, and it is never passed off as a likeness.

## If you are an AI, or are using one

Most first drafts here are written by an AI, and that is welcome. The same rules hold, and three more:

- **Read only what you are allowed to read.** If an archive refuses automated readers (a 403, a bot check, a
  CAPTCHA), stop. Do not go round it. Write the gap down under "Not yet known" so a person can fill it.
- **Go slowly.** One request, then a pause of a second or more. These archives are run by universities and
  volunteers.
- **Never fill a gap from memory.** If you did not read it in a record during this piece of work, it does not go
  in the life. General history ("boys were usually sent to Point Puer") is allowed only when the sentence says it
  is general and not about this person.

`NOTEBOOK.md` holds what the custodian has learned about each archive, and `tools/archives.py` reads two of them.
