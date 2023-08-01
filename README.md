# tech-quotes

[![main](https://github.com/FullStackBulletin/tech-quotes/actions/workflows/test.yaml/badge.svg)](https://github.com/FullStackBulletin/tech-quotes/actions/workflows/test.yaml)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)


An API to get interesting tech-related quotes (powered by GitHub pages)

## Usage

The base URL of the API is `https://fullStackbulletin.github.io/tech-quotes`.

API Documentation is available as OpenAPI specification:

  - [OpenAPI definition (YAML)](https://fullStackbulletin.github.io/tech-quotes/openapi.yml)
  - [OpenAPI definition (JSON)](https://fullStackbulletin.github.io/tech-quotes/openapi.json)

[![Open API V3](https://img.shields.io/badge/open--API-in--editor-brightgreen.svg?style=flat&label=open-api-v3)](https://editor-next.swagger.io/?url=https%3A%2F%2FfullStackbulletin.github.io%2Ftech-quotes%2Fopenapi.yml)

There are some endpoints available:

### `/quotes/stats.json`

Returns statistics about all the available quotes.

#### Example

```bash
curl https://fullStackbulletin.github.io/tech-quotes/quotes/stats.json | jq .
```

Returns

```json
{
  "total": 53,
  "all": "https://fullStackbulletin.github.io/tech-quotes/quotes/all.json",
  "first": "https://fullStackbulletin.github.io/tech-quotes/quotes/0.json",
  "last": "https://fullStackbulletin.github.io/tech-quotes/quotes/52.json",
  "urlPrefix": "https://fullStackbulletin.github.io/tech-quotes/quotes"
}
```

### `/quotes/all.json`

Returns all the quotes

#### Example

```bash
curl https://fullStackbulletin.github.io/tech-quotes/quotes/all.json | jq .
```

Returns

```json
{
  "metadata": {
    "total": 53,
    "first": 0,
    "last": 52
  },
  "quotes": [
    {
      "id": 0,
      "text": "Technology is anything that wasn't around when you were born",
      "author": {
        "id": "alan-kay",
        "name": "Alan Kay",
        "description": "Computer Scientist",
        "wiki": "https://en.wikipedia.org/wiki/Alan_Kay",
        "url": "https://fullStackbulletin.github.io/tech-quotes/authors/alan-kay.json"
      },
      "url": "https://fullStackbulletin.github.io/tech-quotes/quotes/0.json"
    },
    {
      "id": 1,
      "text": "Any sufficiently advanced technology is equivalent to magic",
      "author": {
        "id": "arthur-c-clarke",
        "name": "Arthur C. Clarke",
        "description": "Author",
        "wiki": "https://en.wikipedia.org/wiki/Arthur_C._Clarke",
        "url": "https://fullStackbulletin.github.io/tech-quotes/authors/arthur-c-clarke.json"
      },
      "url": "https://fullStackbulletin.github.io/tech-quotes/quotes/1.json"
    },
    {
      "//": "...",
    }
  ]
}
```

### `/quotes/{quoteId}.json`

Gets a single quote by ID:

#### Example

```bash
curl https://fullStackbulletin.github.io/tech-quotes/quotes/17.json | jq .
```

Returns

```json
{
  "id": 17,
  "text": "The art challenges the technology, and the technology inspires the art",
  "author": {
    "id": "john-lasseter",
    "name": "John Lasseter",
    "description": "Director",
    "wiki": "https://en.wikipedia.org/wiki/John_Lasseter",
    "url": "https://fullStackbulletin.github.io/tech-quotes/authors/john-lasseter.json"
  },
  "url": "https://fullStackbulletin.github.io/tech-quotes/quotes/17.json"
}
```


### `/authors/stats.json`

Gets statistics abouts the authors

#### Example

```bash
curl https://fullStackbulletin.github.io/tech-quotes/authors/stats.json | jq .
```

Returns

```json
{
  "total": 51,
  "all": "https://fullStackbulletin.github.io/tech-quotes/authors/all.json",
  "urlPrefix": "https://fullStackbulletin.github.io/tech-quotes/authors"
}
```

### `/authors/all.json`

Gets the list of all available authors

#### Example

```bash
curl https://fullStackbulletin.github.io/tech-quotes/authors/all.json | jq .
```

Returns

```json
{
  "metadata": {
    "total": 51
  },
  "authors": [
    "alan-kay",
    "arthur-c-clarke",
    "mark-kennedy",
    "thomas-edison",
    "albert-einstein",
    "elbert-hubbard",
    "douglas-adams",
    "...",
    "john-brunner"
  ]
}
```

### `/authors/{authorId}.json`

Gets the details and the quote of a given author

#### Example

```bash
curl https://fullStackbulletin.github.io/tech-quotes/authors/andrew-s-tanenbaum.json | jq .
```

Returns

```json
{
  "id": "andrew-s-tanenbaum",
  "name": "Andrew S. Tanenbaum",
  "description": "Computer Scientist",
  "wiki": "https://en.wikipedia.org/wiki/Andrew_S._Tanenbaum",
  "url": "https://fullStackbulletin.github.io/tech-quotes/authors/andrew-s-tanenbaum.json",
  "quotes": [
    {
      "id": 31,
      "text": "Never underestimate the bandwidth of a station wagon full of tapes hurtling down the highway",
      "url": "https://fullStackbulletin.github.io/tech-quotes/quotes/31.json"
    }
  ]
}
```

## Suggest a quote

If you want to suggest a new tech quote here's how you can do that.

- [Fork this repository](https://github.com/FullStackBulletin/tech-quotes/fork)
- Edit the file [`src/quotes.ts`](/src/quotes.ts) and append the new fact at the bottom (make sure to follow the spec provided by the specific TypeScript types).
- Run `npm run test && npm run build`
- If all looks good, commit your changes
- Open a PR against the original repository


## Contributing

Everyone is very welcome to contribute to this project.
You can contribute just by submitting bugs or suggesting improvements by
[opening an issue on GitHub](https://github.com/FullStackBulletin/tech-quotes/issues).


## License

Licensed under [MIT License](LICENSE). © Luciano Mammino.
