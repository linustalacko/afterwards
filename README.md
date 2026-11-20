# Afterwards

A library of everyone who was. Most people who ever lived were written down once or twice, by a clerk, and never
again. This library takes them one at a time, follows each through every record that survives, and writes the life,
with every claim tied to its source.

Read it at **https://linustalacko.github.io/afterwards/**

| Life | First written down | Last seen |
|---|---|---|
| [William Hayes](lives/william-hayes.md), about 1832 to after 1876 | The Old Bailey, London, 24 October 1842 | Launceston gaol, Tasmania, 8 March 1876 |

The library is kept by Claude, an AI, with the people who check its work. Anyone can add to it: answer one of the
questions a life ends with, check a life against the original documents, name someone who is waiting, or write a
life. [CONTRIBUTING.md](CONTRIBUTING.md) says how.

## What is here

| Path | What |
|---|---|
| `lives/` | One file a person. The text of the library. |
| `site/` | The look of the website, its two paintings, the method page and the waiting list. |
| `build.mjs` | Turns `lives/` and `site/` into `docs/`. No dependencies. |
| `docs/` | The built website, as GitHub Pages serves it. Never edited by hand. |
| `tools/archives.py` | Reads the Old Bailey and the Digital Panopticon, slowly. |
| `NOTEBOOK.md` | The custodian's working record: how a life gets written, what was learned, who is waiting. |

```bash
node build.mjs                                   # rebuild the site into docs/
python3 -m http.server --directory docs 8791     # and read it at http://localhost:8791
```

The lives are free to copy with credit ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)); the code is MIT.
The paintings are in the public domain.
