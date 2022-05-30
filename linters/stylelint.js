module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
  ],
  plugins: ['stylelint-order', 'stylelint-less'],
  rules: {
    'string-quotes': 'single',
    'comment-empty-line-before': ['always', {
      except: ["first-nested"]
    }], 
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]",
  }
}
