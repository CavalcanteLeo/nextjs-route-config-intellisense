import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Next.js Route Config IntelliSense extension is now active!');

  // Single comprehensive provider for all Next.js exports
  const nextjsProvider = vscode.languages.registerCompletionItemProvider(
    ['typescript', 'typescriptreact', 'javascript', 'javascriptreact'],
    {
      provideCompletionItems(document, position) {
        const linePrefix = document
          .lineAt(position)
          .text.substr(0, position.character);

        // Dynamic export completions
        if (linePrefix.match(/export\s+const\s+dynamic\s*=\s*/)) {
          const items = [
            {
              label: 'auto',
              detail:
                '(default) Cache as much as possible without preventing components from opting into dynamic behavior. Provides optimal performance while maintaining flexibility.',
              insertText: '"auto"',
            },
            {
              label: 'force-dynamic',
              detail:
                'Forces dynamic rendering on every request. Equivalent to setting all fetch requests to no-store and revalidate: 0. Use for real-time or user-specific content.',
              insertText: '"force-dynamic"',
            },
            {
              label: 'force-static',
              detail:
                'Forces static rendering by making cookies(), headers(), and useSearchParams() return empty values. Can be combined with revalidate for ISR. Use when you want guaranteed static generation.',
              insertText: '"force-static"',
            },
            {
              label: 'error',
              detail:
                'Forces static rendering but throws an error if dynamic APIs or uncached data are used. Equivalent to getStaticProps() behavior. Useful for ensuring routes remain truly static.',
              insertText: '"error"',
            },
          ];

          return items.map(item => {
            const completionItem = new vscode.CompletionItem(
              item.label,
              vscode.CompletionItemKind.Value
            );
            completionItem.detail = item.detail;
            completionItem.insertText = item.insertText;
            return completionItem;
          });
        }

        // FetchCache export completions
        if (linePrefix.match(/export\s+const\s+fetchCache\s*=\s*/)) {
          const items = [
            {
              label: 'auto',
              detail:
                '(default) Cache fetch requests before Dynamic APIs are used, then switch to no-store after. Provides balanced performance and freshness.',
              insertText: '"auto"',
            },
            {
              label: 'default-cache',
              detail:
                'Sets default cache option to force-cache for all fetch requests. Individual requests can still override. Use when you want aggressive caching by default.',
              insertText: '"default-cache"',
            },
            {
              label: 'only-cache',
              detail:
                'Ensures all fetch requests use caching by setting default to force-cache and throwing errors if any request uses no-store. Use for guaranteed cacheable routes.',
              insertText: '"only-cache"',
            },
            {
              label: 'force-cache',
              detail:
                'Forces all fetch requests to use force-cache, overriding individual cache settings. Use for maximum caching regardless of individual fetch options.',
              insertText: '"force-cache"',
            },
            {
              label: 'force-no-store',
              detail:
                'Forces all fetch requests to use no-store, overriding individual cache settings. Ensures fresh data on every request for real-time applications.',
              insertText: '"force-no-store"',
            },
            {
              label: 'default-no-store',
              detail:
                'Sets default cache option to no-store for all fetch requests. Individual requests can still opt into caching with force-cache.',
              insertText: '"default-no-store"',
            },
            {
              label: 'only-no-store',
              detail:
                'Ensures all fetch requests opt out of caching by setting default to no-store and throwing errors if any request uses force-cache.',
              insertText: '"only-no-store"',
            },
          ];

          return items.map(item => {
            const completionItem = new vscode.CompletionItem(
              item.label,
              vscode.CompletionItemKind.Value
            );
            completionItem.detail = item.detail;
            completionItem.insertText = item.insertText;
            return completionItem;
          });
        }

        // Runtime export completions
        if (linePrefix.match(/export\s+const\s+runtime\s*=\s*/)) {
          const items = [
            {
              label: 'nodejs',
              detail:
                '(default) Uses the full Node.js runtime with access to all Node.js APIs. Recommended for rendering applications. Best for complex server-side logic and file operations.',
              insertText: '"nodejs"',
            },
            {
              label: 'edge',
              detail:
                'Uses the lightweight Edge Runtime with faster cold starts and lower memory usage. Limited to Web APIs only. Recommended for Middleware and simple API routes.',
              insertText: '"edge"',
            },
            {
              label: 'experimental-edge',
              detail:
                '⚠️ DEPRECATED: Use "edge" instead. This option was deprecated in Next.js 15.0.0-RC and will be removed in future versions.',
              insertText: '"experimental-edge"',
              deprecated: true,
            },
          ];

          return items.map(item => {
            const completionItem = new vscode.CompletionItem(
              item.label,
              vscode.CompletionItemKind.Value
            );
            completionItem.detail = item.detail;
            completionItem.insertText = item.insertText;
            if (item.deprecated) {
              completionItem.tags = [vscode.CompletionItemTag.Deprecated];
            }
            return completionItem;
          });
        }

        // PreferredRegion export completions
        if (linePrefix.match(/export\s+const\s+preferredRegion\s*=\s*/)) {
          const items = [
            {
              label: 'auto',
              detail:
                '(default) Automatically selects optimal regions based on deployment platform. Inherits from nearest parent layout if not specified.',
              insertText: '"auto"',
            },
            {
              label: 'global',
              detail:
                'Deploys to all available regions globally. Use when you need the lowest latency worldwide. Support depends on deployment platform.',
              insertText: '"global"',
            },
            {
              label: 'home',
              detail:
                'Deploys only to your home region. Use for region-specific compliance requirements or when global deployment is not needed.',
              insertText: '"home"',
            },
          ];

          return items.map(item => {
            const completionItem = new vscode.CompletionItem(
              item.label,
              vscode.CompletionItemKind.Value
            );
            completionItem.detail = item.detail;
            completionItem.insertText = item.insertText;
            return completionItem;
          });
        }

        // Boolean export completions for dynamicParams and experimental_ppr
        if (
          linePrefix.match(
            /export\s+const\s+(dynamicParams|experimental_ppr)\s*=\s*/
          )
        ) {
          const isDynamicParams = linePrefix.includes('dynamicParams');
          const isPPR = linePrefix.includes('experimental_ppr');

          const items = [
            {
              label: 'true',
              detail: isDynamicParams
                ? '(default) Dynamic segments not in generateStaticParams are generated on-demand. Uses Streaming Server Rendering. Replaces fallback: true from getStaticPaths.'
                : isPPR
                  ? 'Enables Partial Prerendering (PPR) for this route. Combines static and dynamic rendering in the same page. Requires experimental.ppr config.'
                  : 'Enable this option',
              insertText: 'true',
            },
            {
              label: 'false',
              detail: isDynamicParams
                ? 'Dynamic segments not in generateStaticParams return 404. Replaces fallback: false from getStaticPaths. Use for strict control over accessible routes.'
                : isPPR
                  ? 'Disables Partial Prerendering (PPR) for this route. Uses standard rendering behavior instead of experimental PPR features.'
                  : 'Disable this option',
              insertText: 'false',
            },
          ];

          return items.map(item => {
            const completionItem = new vscode.CompletionItem(
              item.label,
              vscode.CompletionItemKind.Value
            );
            completionItem.detail = item.detail;
            completionItem.insertText = item.insertText;
            return completionItem;
          });
        }

        // Revalidate export completions
        if (linePrefix.match(/export\s+const\s+revalidate\s*=\s*/)) {
          const items = [
            {
              label: 'false',
              detail:
                '(default) Cache indefinitely until manually revalidated. Equivalent to revalidate: Infinity. Individual fetch requests can still override with their own revalidate values.',
              insertText: 'false',
            },
            {
              label: '0',
              detail:
                'Always dynamically render even without Dynamic APIs. Changes default fetch cache to no-store but allows individual requests to opt into force-cache.',
              insertText: '0',
            },
            {
              label: '60',
              detail:
                'Revalidate every 60 seconds. Sets default revalidation frequency for the route. Individual fetch requests can use lower values to increase frequency.',
              insertText: '60',
            },
            {
              label: '3600',
              detail:
                'Revalidate every hour (3600 seconds). Good for content that updates daily but benefits from caching. Must be statically analyzable.',
              insertText: '3600',
            },
          ];

          return items.map(item => {
            const completionItem = new vscode.CompletionItem(
              item.label,
              vscode.CompletionItemKind.Value
            );
            completionItem.detail = item.detail;
            completionItem.insertText = item.insertText;
            return completionItem;
          });
        }

        // MaxDuration export completions
        if (linePrefix.match(/export\s+const\s+maxDuration\s*=\s*/)) {
          const items = [
            {
              label: '5',
              detail:
                '5 seconds maximum execution time. Good for simple API routes and quick operations. Compatible with most deployment platforms including Hobby plans.',
              insertText: '5',
            },
            {
              label: '10',
              detail:
                '10 seconds maximum execution time. Suitable for moderate data processing and external API calls. Check deployment platform limits.',
              insertText: '10',
            },
            {
              label: '30',
              detail:
                '30 seconds maximum execution time. Use for complex data processing and file operations. May require higher-tier deployment plans.',
              insertText: '30',
            },
            {
              label: '60',
              detail:
                '60 seconds maximum execution time. For heavy operations like report generation. Requires Next.js 13.4.10+ and Pro plan or higher on most platforms.',
              insertText: '60',
            },
          ];

          return items.map(item => {
            const completionItem = new vscode.CompletionItem(
              item.label,
              vscode.CompletionItemKind.Value
            );
            completionItem.detail = item.detail;
            completionItem.insertText = item.insertText;
            return completionItem;
          });
        }

        return undefined;
      },
    }
  );

  context.subscriptions.push(nextjsProvider);
}

export function deactivate() {
  console.log('Next.js Route Config IntelliSense extension deactivated');
}
