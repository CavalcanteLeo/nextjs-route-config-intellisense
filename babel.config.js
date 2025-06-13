module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '20',
        },
        modules: 'commonjs',
      },
    ],
    [
      '@babel/preset-typescript',
      {
        allowNamespaces: true,
      },
    ],
  ],
  plugins: [
    // Only add istanbul plugin when COVERAGE_MODE is enabled
    ...(process.env.COVERAGE_MODE === 'true'
      ? [
          [
            'babel-plugin-istanbul',
            {
              exclude: [
                '**/*.test.ts',
                '**/*.test.js',
                '**/test/**',
                '**/node_modules/**',
              ],
            },
          ],
        ]
      : []),
  ],
  sourceMaps: true,
  retainLines: true,
};
