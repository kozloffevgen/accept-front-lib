module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  rules: {
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 2
      },      
      "multiline": {
        "max": 1
      }
    }],
    "vue/block-tag-newline": ["error", {
      "singleline": "always",
      "multiline": "always",
      "maxEmptyLines": 1
    }],
    "vue/component-name-in-template-casing": ["error", "PascalCase", {
      "registeredComponentsOnly": true,
    }],
    "vue/html-button-has-type": ["error", {
      "button": true,
      "submit": true,
      "reset": true
    }],
    "vue/no-potential-component-option-typo": ["error", {
      "presets": ["all"],
      "custom": ["test"]
    }],
    "vue/no-undef-components": ["error", {
      "ignorePatterns": []
    }],
    "vue/padding-line-between-blocks": ["error", "always"],
    "vue/require-default-prop": 0,
    "vue/require-prop-types": 0,
    "vue/attribute-hyphenation": 0,
    'vue/no-v-html': 0,
  }
}
