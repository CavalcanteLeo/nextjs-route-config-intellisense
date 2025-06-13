# Next.js Route Config IntelliSense

A VS Code extension that provides intelligent autocompletion for Next.js Route Segment Config exports, helping developers quickly configure their Next.js app router pages and layouts.

**Author:** [Leonardo Cavalcante](https://github.com/cavalcanteLeo)

## Features

This extension provides autocompletion for all Next.js Route Segment Config exports:

- **`dynamic`** - Control static/dynamic rendering behavior (`'auto'`, `'force-dynamic'`, `'force-static'`, `'error'`)
- **`fetchCache`** - Override fetch caching behavior (`'auto'`, `'default-cache'`, `'only-cache'`, `'force-cache'`, `'force-no-store'`, `'default-no-store'`, `'only-no-store'`)
- **`runtime`** - Choose runtime environment (`'nodejs'`, `'edge'`)
- **`preferredRegion`** - Set deployment region preference (`'auto'`, `'global'`, `'home'`)
- **`dynamicParams`** - Control dynamic segment behavior (`true`, `false`)
- **`experimental_ppr`** - Enable Partial Prerendering (`true`, `false`)
- **`revalidate`** - Set revalidation time (`false`, `0`, `60`, `3600`, or custom numbers)
- **`maxDuration`** - Set maximum execution duration (`5`, `10`, `30`, `60`, or custom numbers)

## Usage

Simply start typing any of the supported export statements in your Next.js TypeScript/JavaScript files:

```typescript
export const dynamic = // Triggers autocompletion
export const fetchCache = // Triggers autocompletion
export const runtime = // Triggers autocompletion
// ... and so on
```

The extension works in:

- TypeScript files (`.ts`, `.tsx`)
- JavaScript files (`.js`, `.jsx`)
- Next.js app router pages and layouts

## Requirements

- VS Code 1.101.0 or higher
- Next.js project using the app router

## Installation

1. Install from VS Code Marketplace
2. Or install manually using `vsce package` and then install the generated `.vsix` file

## Release Notes

### 0.0.1

Initial release with support for all Next.js Route Segment Config exports:

- Dynamic rendering controls
- Fetch caching options
- Runtime selection
- Region preferences
- Parameter handling
- Experimental features
- Revalidation settings
- Duration limits

---

**Enjoy faster Next.js development with intelligent autocompletion!**
