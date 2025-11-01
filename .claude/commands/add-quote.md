# Add Quote

You are helping the user add one or more tech quotes to this repository. Follow these steps carefully:

## Step 1: Get Quote Information

Ask the user to provide quote information. They can provide:
- **Single quote**: Just the quote text and author's name
- **Multiple quotes**: A list of quotes, each with quote text and author's name

Format examples:
- Single: "Quote text" - Author Name
- Multiple: Numbered list or multiple quote/author pairs

## Step 2: Verify Quote Authenticity (For Each Quote)

CRITICAL: For EACH quote, verify it is legitimate and correctly attributed:
1. Use WebSearch to search for the quote text along with the author's name
2. Look for reliable sources that confirm:
   - The quote is real (not fabricated or misattributed)
   - The author attribution is correct
   - The exact wording matches reputable sources
3. If you find discrepancies:
   - Inform the user about the issue (e.g., quote is commonly misattributed, slightly different wording exists, etc.)
   - Show them what you found and ask if they want to proceed with corrections
   - If the quote appears to be fabricated or cannot be verified, recommend NOT adding it
4. If the quote is verified as authentic and correctly attributed, proceed to Step 3
5. **For multiple quotes**: Verify all quotes before proceeding to add any of them

## Step 3: Check if Quotes Already Exist

CRITICAL: Before adding any quotes, verify none of them already exist:
1. Read the `src/quotes.ts` file ONCE
2. For EACH quote, search for the quote text (check for exact matches or very similar wording)
3. If any quote already exists:
   - Inform the user that this quote is already in the database
   - Show them the existing quote details (ID, author, etc.)
   - Ask if they want to skip it or add a different quote instead
   - Do NOT add duplicates
4. Only proceed with quotes that are new

## Step 4: Check for Existing Authors

IMPORTANT: For EACH quote, check if the author already exists in `src/quotes.ts`:
1. Search for the author name (check for slight variations in naming, e.g., "E.W. Dijkstra" vs "Edsger Dijkstra")
2. If the author exists:
   - Use the EXACT same `authorName` spelling
   - Use the EXACT same `authorDescription` classification
   - Use the EXACT same `authorWiki` URL (if present)
   - This ensures consistency across all quotes by the same author
3. Build a list of authors that need to be researched (those not in the database)
4. If all authors exist, proceed to Step 6
5. If any authors are new, proceed to Step 5

## Step 5: Research New Authors (For Each New Author)

For EACH author that doesn't exist in the database, use WebSearch to find information:
- Search for "{author name} Wikipedia" or "{author name} profession"
- Determine the most appropriate classification from the allowed `AuthorDescription` types in `src/quotes.ts`:
  - 'Artist', 'Author', 'Composer', 'Computer Scientist', 'Designer', 'Director', 'Engineer', 'Entrepreneur', 'Hacker', 'Historian', 'Inventor', 'Linguist', 'Journalist', 'Martial Artist', 'Mathematician', 'Military Officer', 'Philosopher', 'Physicist', 'Scientist', 'Software Developer', 'Ethnographer'
- Find the Wikipedia URL (format: `https://en.wikipedia.org/wiki/{Article_Name}`)
- If the author doesn't have a Wikipedia page, the `authorWiki` field should be omitted
- **For multiple quotes with the same new author**: Only research the author once and reuse the information

## Step 6: Add the Quotes

1. Prepare all quote objects to be added, following this format:
   ```typescript
   {
     text: 'Quote text here',
     authorName: 'Author Name',
     authorDescription: 'Appropriate Classification',
     authorWiki: 'https://en.wikipedia.org/wiki/Article_Name' // omit if no Wikipedia page
   }
   ```
2. **For single quote**: Use the Edit tool to add the quote at the end of the quotes array (before the closing `]`)
3. **For multiple quotes**: Use the Edit tool to add ALL quotes at once, appending them all at the end of the quotes array (before the closing `]`), with proper comma separation
4. Ensure proper TypeScript formatting and escaping (especially for single quotes in text: use `\'`)

## Step 7: Validate and Build

1. Run `npm test` to ensure linting and type checking pass
2. If tests fail, fix any issues and re-run
3. Run `npm run build` to generate the static API files
4. Verify the build completed successfully

## Step 8: Confirm Success

**For single quote:**
1. Read the newly generated quote file from `dist/quotes/{id}.json` to verify it was created correctly
2. Read the author file from `dist/authors/{author-slug}.json` to verify it was created/updated correctly
3. Show the user:
   - The quote ID assigned
   - The quote JSON
   - A confirmation that the quote was successfully added

**For multiple quotes:**
1. Read ALL newly generated quote files from `dist/quotes/{id}.json` to verify they were created correctly
2. Read relevant author files from `dist/authors/{author-slug}.json` to verify they were created/updated correctly
3. Show the user a summary table with:
   - Number of quotes added
   - Quote IDs assigned
   - Authors (new and existing)
   - Brief preview of each quote
4. Provide a confirmation that all quotes were successfully added

## Important Notes

- **ALWAYS verify quote authenticity** using web search before adding it (for EACH quote when adding multiple)
- **ALWAYS check if the quote already exists** to prevent duplicates (for EACH quote when adding multiple)
- **ALWAYS check for existing authors** to maintain consistency across all quotes
- If a quote cannot be verified or appears misattributed, DO NOT add it without user confirmation
- The quote text should be added exactly as verified from reliable sources
- Pay attention to proper escaping of single quotes in the text (use `\'`)
- The `authorDescription` must exactly match one of the allowed types in the TypeScript enum
- Author information (name, classification, wiki URL) must be identical across all quotes by the same author
- **When adding multiple quotes**: Process verification in parallel when possible (multiple WebSearch calls), but add all quotes in a single Edit operation
- **Batch operations**: Only run `npm test` and `npm run build` ONCE after all quotes are added
