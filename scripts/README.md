# Scripts

## Algolia Export & Upload

When the Algolia no-code crawler isn't working, use these scripts to export content and upload to Algolia.

### Environment Variables (.env)

| Variable | Required | Description |
|----------|----------|-------------|
| `APPLICATION_ID` | Yes | Algolia Application ID |
| `SEARCH_API_KEY` | Yes | Public search key (for Docusaurus frontend) |
| `ADMIN_API_KEY` | Yes (for upload) | Admin API key with write permission |

**Note:** `SEARCH_API_KEY` is read-only. For `yarn algolia:upload` you need `ADMIN_API_KEY` from Algolia Dashboard → Settings → API Keys.

### Usage

```bash
# Generate algolia-records.json
yarn algolia:export

# Upload to Algolia (requires ADMIN_API_KEY in .env)
yarn algolia:upload

# Export and upload in one step
yarn algolia:sync
```

### Manual Upload (without ADMIN_API_KEY)

1. Run `yarn algolia:export` to generate `algolia-records.json`
2. Go to [Algolia Dashboard](https://dashboard.algolia.com)
3. Select your app and index (`creative`)
4. Navigate to **Search** → **Index** → **Import**
5. Upload `algolia-records.json`

### Index Configuration (A/B Testing, Analytics, Related Items, Trending Items)

After uploading, configure the index for Recommend features:

```bash
yarn algolia:config
```

Then in the [Algolia Dashboard](https://dashboard.algolia.com):
1. **Events** → Settings → Enable automatic events collection (for Analytics, A/B Testing)
2. **Data sources** → Recommend → Enable Related Items & Trending Items models
3. **A/B Testing** → Create experiments (requires events)

**Note:** Trending Facet Values is deprecated and not available in InstantSearch.js.

### What Gets Indexed

- **Community docs** (`/community/*`)
- **Creative TV docs** (`/creativetv/*`)
- **Creative Finance docs** (`/finance/*`)
- **Blog posts** (`/blog/*`)
- **Static pages** (/, /creators, /fans, /brands, /how-it-works)

Records use the Docusaurus DocSearch format (`lvl0`–`lvl5`, `content`, `url`, `objectID`) for compatibility with the existing search UI.
