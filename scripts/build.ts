import { writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { mkdirp } from 'mkdirp'
import slugify from 'slugify'
import quotes, { type Quote, type Author, type AuthorDescription, type RawQuote, type AuthorWithQuotes } from '../src/quotes.js'

const GH_PAGES_URL = 'https://fullStackbulletin.github.io/tech-quotes'
const baseUrl = process.env.BASE_URL ?? GH_PAGES_URL

const currentDir = dirname(fileURLToPath(import.meta.url))
const destPath: string = join(currentDir, '..', 'dist')
const quotesPath: string = join(currentDir, '..', 'dist', 'quotes')
const authorsPath: string = join(currentDir, '..', 'dist', 'authors')

// Creates the `dest` and `dest/quotes` folders if they don't exist
await Promise.all([
  mkdirp(destPath),
  mkdirp(quotesPath),
  mkdirp(authorsPath)
])

// Creates an index.html file that redirects to the GitHub repo
const index = `<html>
  <head>
    <meta http-equiv="refresh" content="0; url=${GH_PAGES_URL}">
  </head>
  <body></body>
</html>`

await writeFile(`${destPath}/index.html`, index)
console.log(`Written ${destPath}/index.html`)

const stats = {
  total: quotes.length,
  all: `${baseUrl}/quotes/all.json`,
  first: `${baseUrl}/quotes/0.json`,
  last: `${baseUrl}/quotes/${quotes.length - 1}.json`,
  urlPrefix: baseUrl
}

await writeFile(`${destPath}/stats.json`, JSON.stringify(stats, null, 2))
console.log(`Written ${destPath}/stats.json`)

// Creates a JSON file for each quote and an all.json file with all the quotes
function mapQuote (id: string, quote: RawQuote): Quote {
  const idAsNumber = Number(id)
  return {
    id: idAsNumber,
    text: quote.text,
    author: makeAuthor(quote.authorName, quote.authorDescription, quote.authorWiki),
    url: `${baseUrl}/quotes/${idAsNumber}.json`
  }
}

function makeAuthor (name: string, description: AuthorDescription, wiki?: `https://en.wikipedia.org/wiki/${string}`): Author {
  const slug = slugify.default(name, { lower: true, strict: true })

  return {
    id: slug,
    name,
    description,
    wiki,
    url: `${baseUrl}/authors/${slug}.json`
  }
}

const all = {
  metadata: {
    total: quotes.length,
    first: 0,
    last: quotes.length - 1
  },
  quotes: Object.entries(quotes).map(([id, quote]) => mapQuote(id, quote))
}

await writeFile(`${quotesPath}/all.json`, JSON.stringify(all, null, 2))
console.log(`Written ${quotesPath}/all.json`)

// As it goes through the various quotes starts to accumulate authors and quotes
const authorsWithQuotes = new Map<string, AuthorWithQuotes>()

for (const quote of all.quotes) {
  const dest = join(quotesPath, `${String(quote.id)}.json`)
  await writeFile(dest, JSON.stringify(quote, null, 2))

  const authorEntry = authorsWithQuotes.get(quote.author.id)
  if (typeof authorEntry !== 'undefined') {
    authorEntry.quotes.push(quote)
  } else {
    authorsWithQuotes.set(quote.author.id, {
      ...quote.author,
      quotes: [quote]
    })
  }

  console.log(`Written ${String(dest)}`)
}

// persists authors
let totalAuthors = 0
for (const author of authorsWithQuotes.values()) {
  const dest = join(authorsPath, `${author.id}.json`)
  await writeFile(dest, JSON.stringify(author, null, 2))
  console.log(`Written ${String(dest)}`)
  totalAuthors++
}

// Create all.json for authors
const allAuthors = {
  metadata: {
    total: totalAuthors
  },
  authors: [...authorsWithQuotes.keys()]
}

await writeFile(`${authorsPath}/all.json`, JSON.stringify(allAuthors, null, 2))
console.log(`Written ${authorsPath}/all.json`)
