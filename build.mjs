// Builds the library into docs/ (what GitHub Pages serves). No dependencies: `node build.mjs`.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, cpSync, rmSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const root = import.meta.dirname
const out = join(root, 'docs')
const REPO = 'https://github.com/linustalacko/afterwards'
const SITE = 'https://linustalacko.github.io/afterwards/'

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const slugOf = (s) => s.toLowerCase().replace(/[^a-z]+/g, '-').replace(/^-|-$/g, '')

// A file is `key: value` lines between two `---` lines, then the text.
function readPage(path) {
  const raw = readFileSync(path, 'utf8')
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) throw new Error(`${path}: no front matter`)
  const meta = {}
  for (const line of match[1].split('\n')) {
    const at = line.indexOf(':')
    if (at > 0) meta[line.slice(0, at).trim()] = line.slice(at + 1).trim()
  }
  return { meta, body: match[2] }
}

// The items of one `## Section` of a page (or of a page that is only a list), as Markdown strings.
function listOf(body, heading) {
  const section = heading ? body.split(/^## /m).find((part) => part.startsWith(heading)) : body
  if (!section) return []
  return section.split('\n').filter((line) => line.startsWith('- ')).map((line) => line.slice(2))
}

// Emphasis, links and note marks inside one block of text.
function inline(text, notes = new Map(), used = []) {
  let html = esc(text)
  html = html.replace(/\[([^\]^][^\]]*)\]\(([^)\s]+)\)/g, (_, label, url) => `<a href="${url}">${label}</a>`)
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>')
  html = html.replace(/\[\^([\w-]+)\]/g, (_, id) => {
    if (!notes.has(id)) throw new Error(`note [^${id}] has no text`)
    if (!used.includes(id)) used.push(id)
    const n = notes.get(id).number
    return `<sup class="mark"><a href="#note-${n}" id="mark-${n}">${n}</a></sup>`
  })
  return html
}

// The small Markdown this library is written in: paragraphs, ## headings, - lists, ![pictures], [^notes].
// Each paragraph is a row: its text, and beside it the notes it cites. `img` is the path to the pictures.
function render(body, img = '') {
  const notes = new Map()
  const lines = []
  for (const line of body.split('\n')) {
    const def = line.match(/^\[\^([\w-]+)\]:\s*(.*)$/)
    if (def) notes.set(def[1], { text: def[2], number: 0 })
    else lines.push(line)
  }
  let count = 0
  for (const [, id] of body.matchAll(/\[\^([\w-]+)\](?!:)/g)) if (notes.has(id) && !notes.get(id).number) notes.get(id).number = ++count

  const blocks = lines.join('\n').split(/\n{2,}/).map((b) => b.trim()).filter(Boolean)
  let html = ''
  let first = true
  for (const block of blocks) {
    const used = []
    if (block.startsWith('## ')) {
      const title = block.slice(3)
      if (!first) html += '</section>'
      html += `<section class="part part-${slugOf(title)}" id="${slugOf(title)}"><h2>${inline(title)}</h2>`
      first = false
      continue
    }
    if (first) html += `<section class="part part-life">`
    const picture = block.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/)
    if (picture) {
      const kind = picture[2].startsWith('record-') ? 'plate plate-record' : 'plate'
      html += `<figure class="${kind}"><img src="${img}${picture[2]}" alt="" loading="lazy"><figcaption>${inline(picture[1])}</figcaption></figure>`
      first = false
      continue
    }
    let inner
    if (block.startsWith('- ')) {
      const items = block.split(/\n(?=- )/).map((item) => `<li>${inline(item.slice(2).replace(/\n/g, ' '), notes, used)}</li>`)
      inner = `<ul>${items.join('')}</ul>`
    } else {
      inner = `<p${first ? ' class="opening"' : ''}>${inline(block.replace(/\n/g, ' '), notes, used)}</p>`
    }
    const glosses = used
      .map((id) => {
        const note = notes.get(id)
        return `<p class="gloss" id="note-${note.number}"><a class="gloss-n" href="#mark-${note.number}">${note.number}</a> ${inline(note.text)}</p>`
      })
      .join('')
    html += `<div class="row">${inner}${glosses ? `<aside class="glosses">${glosses}</aside>` : ''}</div>`
    first = false
  }
  return html + '</section>'
}

const icon = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M6 64V30a26 26 0 0 1 52 0v34z" fill="#2b1611"/><path d="M11 64V30a21 21 0 0 1 42 0v34" fill="none" stroke="#d2a94e" stroke-width="2"/><text x="32" y="50" font-family="Georgia,serif" font-size="30" text-anchor="middle" fill="#ebd08a">A</text></svg>`,
)}`

function page({ title, description, path, body, cls, extraHead = '' }) {
  const depth = path ? path.split('/').length : 0
  const up = '../'.repeat(depth)
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${SITE}${path ? path + '/' : ''}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:type" content="website">
<meta property="og:image" content="${SITE}img/census-1100.jpg">
<link rel="icon" href="${icon}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..700;1,400..700&family=IM+Fell+French+Canon:ital@0;1&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${up}style.css">${extraHead}
</head>
<body class="${cls}">
<header class="door">
  <a class="door-name" href="${up || './'}">Afterwards</a>
  <nav aria-label="Library">
    <a href="${up || './'}#lives">The lives</a>
    <a href="${up}names/">Names</a>
    <a href="${up}method/">How it is made</a>
  </nav>
</header>
${body}
<footer class="colophon">
  <p>Kept by Claude, an AI, with the people who check its work. The lives are free to copy with credit. The paintings are in the public domain; pictures of records belong to their archives. <a href="${REPO}">The whole library is open.</a></p>
</footer>
</body>
</html>
`
}

function write(path, html) {
  mkdirSync(join(out, path), { recursive: true })
  writeFileSync(join(out, path, 'index.html'), html)
}

// Where in its painting a life's frontispiece should be centred when it is cropped.
const focus = (meta) => (meta.frontispiece_focus ? ` style="object-position: ${meta.frontispiece_focus}"` : '')

const count = (n) => ['No', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'][n] ?? String(n)

// --- read

const lives = readdirSync(join(root, 'lives'))
  .filter((f) => f.endsWith('.md'))
  .map((f) => ({ slug: f.replace(/\.md$/, ''), ...readPage(join(root, 'lives', f)) }))
  .sort((a, b) => a.meta.name.localeCompare(b.meta.name))

// "**Mary Ann Munday**, twenty-one, who…" → a name and what is said of them.
const named = (item) => {
  const match = item.match(/^\*\*([^*]+)\*\*[,.]?\s*(.*)$/)
  return match ? { name: match[1], said: match[2] } : null
}
const waiting = listOf(readPage(join(root, 'site', 'waiting.md')).body).map(named).filter(Boolean)

// --- build

if (existsSync(out)) rmSync(out, { recursive: true })
mkdirSync(out, { recursive: true })
cpSync(join(root, 'site', 'img'), join(out, 'img'), { recursive: true })
cpSync(join(root, 'site', 'style.css'), join(out, 'style.css'))
writeFileSync(join(out, '.nojekyll'), '')

for (const life of lives) {
  const m = life.meta
  const path = `lives/${life.slug}`
  const checked = m.checked_by
    ? `Checked against the original documents by ${esc(m.checked_by)}.`
    : `No person has yet checked it against the original documents.`
  const jsonld = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: m.name,
    description: m.standfirst,
    url: `${SITE}${path}/`,
    about: { '@type': 'Person', name: m.name, description: `${m.born} to ${m.died}. First recorded at ${m.first_place}.` },
  })
  const body = `
<main>
  ${
    m.frontispiece
      ? `<figure class="frontispiece${m.frontispiece_shape === 'arch' ? ' frontispiece-arch' : ''}">
    <span class="frontispiece-frame"><img src="../../img/${m.frontispiece}-2000.jpg" srcset="../../img/${m.frontispiece}-1000.jpg 1000w, ../../img/${m.frontispiece}-2000.jpg 2000w" sizes="${m.frontispiece_shape === 'arch' ? '(min-width: 30rem) 24rem, 80vw' : '100vw'}" alt=""${focus(m)}></span>
    <figcaption>${esc(m.frontispiece_caption || '')}</figcaption>
  </figure>`
      : ''
  }
  <article class="leaf">
    <header class="leaf-head">
      <p class="rubric">First written down on ${esc(m.first_recorded)}, at ${esc(m.first_place)}</p>
      <h1>${esc(m.name)}</h1>
      <p class="dates">${esc(m.born)} to ${esc(m.died)}</p>
      <p class="standfirst">${esc(m.standfirst)}</p>
    </header>
    ${render(life.body, '../../img/')}
    <section class="kin">
      <h2>If this is your family</h2>
      <p>If ${esc(m.name)}, or anyone named on this page, belongs to your family, the library would like to know what the family remembers: a story, a photograph, a name written in a Bible. It will be kept here beside what the records say, and marked as memory.</p>
      <p><a href="${REPO}/issues/new?template=family.md&amp;title=${encodeURIComponent(m.name + ': ')}">Tell the library what you know</a></p>
    </section>
    <p class="hand">Written by ${esc(m.written_by)}, on ${esc(m.written_on)}, from transcriptions of the records. ${checked} <a href="${REPO}/issues/new?template=correction.md&amp;title=${encodeURIComponent(m.name + ': ')}">Correct this life</a>, or <a href="../../method/#add-to-the-library">check it against the originals</a>.</p>
  </article>
</main>`
  write(path, page({ title: `${m.name} | Afterwards`, description: m.standfirst, path, body, cls: 'page-life', extraHead: `\n<script type="application/ld+json">${jsonld}</script>` }))
}

// The wall of alcoves: one for each life written, and an empty one for each person waiting.
const alcoves = [
  ...lives.map(
    (l) => `<li class="alcove alcove-filled">
      <a href="lives/${l.slug}/">
        <span class="niche">${l.meta.frontispiece ? `<img src="img/${l.meta.frontispiece}-1000.jpg" alt="" loading="lazy"${focus(l.meta)}>` : ''}</span>
        <span class="alcove-name">${esc(l.meta.name)}</span>
        <span class="alcove-dates">${esc(l.meta.born)} to ${esc(l.meta.died)}</span>
        <span class="alcove-line">${esc(l.meta.standfirst)}</span>
      </a>
    </li>`,
  ),
  ...waiting.map(
    (w) => `<li class="alcove alcove-empty">
      <span class="niche"><span>not yet written</span></span>
      <span class="alcove-name">${inline(w.name)}</span>
      <span class="alcove-line">${inline(w.said.charAt(0).toUpperCase() + w.said.slice(1))}</span>
    </li>`,
  ),
]

const questions = lives.flatMap((l) => listOf(l.body, 'Not yet known').slice(0, 4).map((q) => ({ q, life: l })))

const home = `
<main>
  <section class="hero">
    <figure class="panel">
      <img src="img/census-2200.jpg" srcset="img/census-1100.jpg 1100w, img/census-2200.jpg 2200w" sizes="(min-width: 1200px) 1100px, 94vw" alt="A snowbound village. At the lower left a crowd presses toward a window where a clerk is writing names in a book.">
    </figure>
    <div class="hero-words">
      <h1>A library of everyone who was</h1>
      <p class="hero-lede">Most people who ever lived were written down once or twice, by a clerk, and never again. This library takes them one at a time, follows each through every record that survives, and writes the life.</p>
      <p class="hero-caption">Pieter Bruegel the Elder, <em>The Census at Bethlehem</em>, 1566. At the lower left, a village queues to be written into a book.</p>
    </div>
  </section>

  <section class="wall" id="lives">
    <h2>The lives</h2>
    <p class="wall-count">${lives.length === 1 ? 'One alcove is filled.' : `${count(lives.length)} alcoves are filled.`} The empty ones are people met along the way, whose lives nobody has followed yet. <a href="method/#add-to-the-library">Any of them can be yours to write.</a></p>
    <ul class="alcoves">
      ${alcoves.join('\n      ')}
    </ul>
  </section>

  <section class="unknown">
    <h2>Not yet known</h2>
    <p class="unknown-lede">Every life ends in questions. If you can open an archive the library cannot, one of these may take you an afternoon.</p>
    <ul>
      ${questions.map(({ q, life }) => `<li><a href="lives/${life.slug}/#not-yet-known"><span class="unknown-who">${esc(life.meta.name)}</span> ${inline(q)}</a></li>`).join('\n      ')}
    </ul>
  </section>
</main>`
writeFileSync(
  join(out, 'index.html'),
  page({
    title: 'Afterwards | A library of everyone who was',
    description: 'One forgotten person at a time, followed through every record that survives, with every claim tied to its source.',
    path: '',
    body: home,
    cls: 'page-home',
  }),
)

// Every person named in any life, by surname, so that a family can find its own.
const everyone = lives.flatMap((l) => [
  { name: l.meta.name, said: `${l.meta.born} to ${l.meta.died}. This is their life.`, life: l, own: true },
  ...listOf(l.body, 'Everyone named here').map(named).filter(Boolean).map((p) => ({ ...p, life: l })),
])
const surname = (name) => name.replace(/ (junior|senior)$/, '').split(' ').pop()
everyone.sort((a, b) => surname(a.name).localeCompare(surname(b.name)) || a.name.localeCompare(b.name))
write(
  'names',
  page({
    title: 'Names | Afterwards',
    description: 'Every person named anywhere in the library, by surname.',
    path: 'names',
    cls: 'page-names',
    body: `
<main>
  <article class="leaf">
    <header class="leaf-head">
      <h1>Names</h1>
      <p class="standfirst">Everyone named anywhere in the library, by surname: the people whose lives are written, and the witnesses, masters, constables and children who stood near them for a day.</p>
    </header>
    <ul class="names">
      ${everyone
        .map((p) => {
          const rest = p.name.replace(/ (junior|senior)$/, '').split(' ').slice(0, -1).join(' ')
          const suffix = (p.name.match(/ (junior|senior)$/) || [''])[0]
          return `<li${p.own ? ' class="names-own"' : ''}><a href="../lives/${p.life.slug}/"><span class="names-name"><strong>${esc(surname(p.name))}</strong>, ${esc(rest + suffix)}</span> <span class="names-said">${inline(p.said.charAt(0).toUpperCase() + p.said.slice(1))}${p.own ? '' : ` In the life of ${esc(p.life.meta.name)}.`}</span></a></li>`
        })
        .join('\n      ')}
    </ul>
  </article>
</main>`,
  }),
)

const method = readPage(join(root, 'site', 'method.md'))
write(
  'method',
  page({
    title: 'How it is made | Afterwards',
    description: method.meta.description,
    path: 'method',
    cls: 'page-method',
    body: `
<main>
  <article class="leaf">
    <header class="leaf-head">
      <h1>${esc(method.meta.title)}</h1>
      <p class="standfirst">${esc(method.meta.standfirst)}</p>
    </header>
    ${render(method.body)}
  </article>
</main>`,
  }),
)

const paths = ['', 'names/', 'method/', ...lives.map((l) => `lives/${l.slug}/`)]
writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join('\n')}\n</urlset>\n`)
writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}sitemap.xml\n`)

console.log(`built ${lives.length} ${lives.length === 1 ? 'life' : 'lives'}, ${everyone.length} names, into docs/`)
