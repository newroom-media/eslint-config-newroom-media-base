// eslint-disable-next-line no-undef
module.exports = {
  globals: {
    MyGlobal: true
  },
  extends: [
    'eslint:recommended'
  ],
  plugins: [
    "prefer-arrow"
  ],
  rules: {
    "array-bracket-spacing": ["error", "never"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "block-spacing": ["error", "always"],
    "brace-style": "error",
    "camelcase": [
      "error",
      {
        "properties": "always"
      }
    ],
    "capitalized-comments": [
      "error",
      "always"
    ],
    "comma-dangle": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "curly": "error",
    "default-case": "error",
    "default-case-last": "error",
    "default-param-last": "error",
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "indent": ["error", 2],
    "key-spacing": "error",
    "max-depth": ["error", 5],
    "no-array-constructor": "error",
    "no-console": "error",
    "no-else-return": "error",
    "no-multiple-empty-lines": "error",
    "no-tabs": "error",
    "no-trailing-spaces": "error",
    "no-var": "error",
    "no-with": "error",
    "no-whitespace-before-property": "error",
    "object-curly-spacing": ["error", "always"],
    "padded-blocks": ["error", "never"],
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
      { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] }
    ],
    "prefer-const": "error",
    "prefer-object-spread": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": "error",
    "semi-spacing": ["error", { "before": false, "after": true }],
    "space-in-parens": ["error", "never"],
    "space-unary-ops": ["error", { "words": true, "nonwords": false }],
    "spaced-comment": ["error", "always"],
    "template-curly-spacing": "error",
    "yoda": "error",
    "prefer-arrow/prefer-arrow-functions": [
      "warn",
      {
        "disallowPrototype": true,
        "singleReturnOnly": false,
        "classPropertiesAllowed": false
      }
    ]
  }
};
