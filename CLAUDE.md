# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tech-quotes is a static API for tech-related quotes, powered by GitHub Pages. The project uses TypeScript and generates static JSON files for quotes and authors that are served via GitHub Pages.

## Development Commands

### Test
```bash
npm test
```
Runs ESLint on TypeScript files and performs type checking with `tsc`. No separate unit tests exist.

### Build
```bash
npm run build
```
Removes the `dist` folder and executes the build script using Node.js with `tsx` loader. This generates all static JSON files, HTML files, and OpenAPI specifications.

## Architecture

### Data Source (`src/quotes.ts`)
- **Single source of truth**: All quotes are defined in a TypeScript array of `RawQuote` objects
- Each quote contains: `text`, `authorName`, `authorDescription`, and optional `authorWiki` URL
- The file exports TypeScript interfaces: `RawQuote`, `Quote`, `Author`, `AuthorWithQuotes`, `AuthorDescription`

### Build Process (`scripts/build.ts`)
The build script transforms the raw quote data into a static API structure:

1. **Directory Creation**: Creates `dist/`, `dist/quotes/`, and `dist/authors/` directories
2. **Quote Processing**:
   - Generates individual JSON files for each quote (`quotes/{id}.json`)
   - Creates `quotes/all.json` with all quotes
   - Creates `quotes/stats.json` with metadata
3. **Author Processing**:
   - Aggregates quotes by author
   - Generates individual JSON files for each author (`authors/{author-id}.json`)
   - Creates `authors/all.json` with all author IDs
   - Creates `authors/stats.json` with metadata
4. **Additional Files**:
   - Copies and converts OpenAPI spec from YAML to JSON
   - Creates `index.html` (redirects to GitHub repo)
   - Creates `404.html`

### Key Design Patterns
- **Slug Generation**: Author IDs are created using `slugify` with lowercase and strict mode
- **URL Construction**: Base URL is configurable via `BASE_URL` environment variable (defaults to GitHub Pages URL)
- **Type Safety**: Full TypeScript typing throughout with strict mode enabled

## Adding New Quotes

To add a new quote:

1. Edit `src/quotes.ts`
2. Append a new object to the `quotes` array following the `RawQuote` interface
3. Ensure `authorDescription` matches one of the allowed `AuthorDescription` types
4. Run `npm run test && npm run build` to validate and regenerate the API
5. Commit changes

## Configuration

- **TypeScript**: Uses NodeNext module resolution, ESNext target, strict mode enabled
- **ESLint**: Extends `standard-with-typescript` configuration
- **Node Version**: The project uses ES modules (`"type": "module"` in package.json)
- **Module Loader**: Uses `--import tsx` for running TypeScript files directly

## Output Structure

The build generates a GitHub Pages-compatible static site in `dist/`:
```
dist/
├── index.html (redirects to GitHub)
├── 404.html
├── openapi.yml
├── openapi.json
├── quotes/
│   ├── stats.json
│   ├── all.json
│   ├── 0.json
│   ├── 1.json
│   └── ...
└── authors/
    ├── stats.json
    ├── all.json
    ├── {author-slug}.json
    └── ...
```
