# tech-quotes

[![main](https://github.com/FullStackBulletin/tech-quotes/actions/workflows/test.yaml/badge.svg)](https://github.com/FullStackBulletin/tech-quotes/actions/workflows/test.yaml)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![ts](https://badgen.net/badge/Built%20With/TypeScript/blue)


An API to get interesting tech-related quotes (powered by GitHub pages)

## Usage

The base URL of the API is `https://fullStackbulletin.github.io/tech-quotes`.

There are some endpoints available:

### `/quotes/stats.json`

Returns statistics about all the available quotes.

#### Example

```bash
curl https://fullStackbulletin.github.io/tech-quotes/quotes/stats.json | jq .
```



WIP
