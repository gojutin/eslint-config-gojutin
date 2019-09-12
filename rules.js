//***********************************************************
// * 0 = off | 1 = warn | 2 = error
//***********************************************************
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  plugins: [
    "@typescript-eslint",
    "@typescript-eslint/tslint",
    "react",
    "immutable",
    "jsx-a11y"
  ],
  rules: {
    strict: 2,
    "react/prop-types": 0, // Disable prop-types as we use TypeScript for type checking
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/no-this-alias": 2,
    "@typescript-eslint/no-misused-new": 2,
    "@typescript-eslint/no-inferrable-types": 1,
    "@typescript-eslint/no-extraneous-class": 2,
    "@typescript-eslint/no-explicit-any": 1,
    "@typescript-eslint/no-empty-interface": 1,
    "@typescript-eslint/prefer-interface": 0,
    "@typescript-eslint/explicit-member-accessibility": 2,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/interface-name-prefix": 2,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/member-ordering": 2,
    "@typescript-eslint/no-empty-interface": 2,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-misused-new": 2,
    "@typescript-eslint/no-namespace": 2,
    "@typescript-eslint/no-parameter-properties": 0,
    "@typescript-eslint/no-this-alias": 2,
    "@typescript-eslint/no-use-before-declare": 0,
    "@typescript-eslint/no-var-requires": 2,
    "@typescript-eslint/prefer-for-of": 2,
    "@typescript-eslint/prefer-function-type": 2,
    "@typescript-eslint/prefer-interface": 0,
    "@typescript-eslint/prefer-namespace-keyword": 2,
    "@typescript-eslint/type-annotation-spacing": 0,
    "@typescript-eslint/unified-signatures": 2,
    "no-var": 2,
    "prefer-const": 2,
    "no-undef": 2,
    "no-param-reassign": 2,
    "immutable/no-let": 2,
    "immutable/no-this": 2,
    "immutable/no-mutation": 2,
    "sort-keys": 0,
    "@typescript-eslint/tslint/config": [
      2,
      {
        rulesDirectory: ["node_modules/tslint-immutable/rules"],

        rules: {
          "comment-format": [true, "check-space"],
          "jsdoc-format": [true, "check-multiline-start"],
          "no-array-mutation": [true, "ignore-new-array"],
          "no-class": true,
          "no-delete": true,
          "no-duplicate-imports": true,
          "no-duplicate-variable": [true, "check-parameters"],
          "no-implicit-dependencies": false, // Had to turn this off due to requirements of 3rd party libraries.
          "no-let": true,
          "no-method-signature": true,
          "no-mixed-interface": true,
          "no-object-mutation": true,
          "no-reference-import": true,
          "no-shadowed-variable": true,
          "no-submodule-imports": false, // Had to turn this off due to requirements of 3rd party libraries.
          "no-this": true,
          "no-unused-expression": true,
          "only-arrow-functions": [
            true,
            "allow-declarations",
            "allow-named-functions"
          ],
          "prefer-conditional-expression": true,
          "trailing-comma": [
            true,
            {
              multiline: {
                objects: "always",
                arrays: "always",
                functions: "never",
                typeLiterals: "ignore"
              }
            }
          ],
          "triple-equals": [true, "allow-null-check"],
          typedef: [true, "call-signature"],
          "variable-name": [
            true,
            "ban-keywords",
            "check-format",
            "allow-pascal-case"
          ]
        }
      }
    ]
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": 0
      }
    }
  ]
};
