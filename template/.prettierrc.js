module.exports = {
  // Plugins
  plugins: ['prettier-plugin-jsdoc'],

  // Prettier options
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  jsxSingleQuote: false,
  printWidth: 160,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  quoteProps: 'consistent',
  endOfLine: 'lf',

  // JSDoc options
  jsdocDescriptionWithDot: true,
  jsdocSeparateReturnsFromParam: true,
  jsdocSeparateTagGroups: false,
  jsdocPreferCodeFences: true,
  tsdoc: true,
};
