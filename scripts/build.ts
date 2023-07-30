import { writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { mkdirp } from 'mkdirp'
import quotes, { type Quote, type QuoteWithIdAndLink } from '../src/quotes.js'

const currentDir = dirname(fileURLToPath(import.meta.url))
const destPath: string = join(currentDir, '..', 'dist')

// Creates the `api` folder if it does not exist
await mkdirp(destPath)

// Creates an index.html file that redirects to the GitHub repo
const index = `<html>
  <head>
    <meta http-equiv="refresh" content="0; url=https://github.com/FullStackBulletin/tech-quotes">
  </head>
  <body></body>
</html>`

await writeFile(`${destPath}/index.html`, index)
console.log(`Written ${destPath}/index.html`)

const stats = {
  total: quotes.length,
  all: 'https://fullStackbulletin.github.io/tech-quotes/all.json',
  first: 'https://fullStackbulletin.github.io/tech-quotes/0.json',
  last: `https://fullStackbulletin.github.io/tech-quotes/${quotes.length - 1}.json`,
  urlPrefix: 'https://fullStackbulletin.github.io/tech-quotes/'
}

await writeFile(`${destPath}/stats.json`, JSON.stringify(stats, null, 2))
console.log(`Written ${destPath}/stats.json`)

// Creates a JSON file for each quote and an all.json file with all the quotes
function mapQuote (id: string, quote: Quote): QuoteWithIdAndLink {
  const idAsNumber = Number(id)
  return {
    id: idAsNumber,
    quote,
    url: `https://fullStackbulletin.github.io/tech-quotes/${idAsNumber}.json`
  }
}

const all = {
  metadata: {
    total: quotes.length,
    first: 0,
    last: quotes.length - 1
  },
  quotes: Object.entries(quotes).map(([id, fact]) => mapQuote(id, fact))
}

await writeFile(`${destPath}/all.json`, JSON.stringify(all, null, 2))
console.log(`Written ${destPath}/all.json`)

for (const quote of all.quotes) {
  const dest = join(destPath, `${String(quote.id)}.json`)
  await writeFile(dest, JSON.stringify(quote, null, 2))
  console.log(`Written ${String(dest)}`)
}
