module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential',
  ],
  'plugins': [
    'vue',
  ],
  'rules': {
    'semi': [2, 'always'],
    'quotes': [2, 'single'],
    'indent': [2, 2],
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': [2, {
      before: false,
    }],
    'no-trailing-spaces': [2],
    'eol-last': [2, 'always'],
    'no-multiple-empty-lines': [2, {
      max: 1,
    }],
    'no-use-before-define': [2, {
      functions: false,
      classes: true,
      variables: true,
    }],
  },
};