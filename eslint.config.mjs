import globals from "globals";
import pluginJs from "@eslint/js";

export default [
      { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
      {
            ignores: ["**/test.js", "node_modules"],
            linterOptions: {
                  noInlineConfig: false,
                  reportUnusedDisableDirectives: "warn",
            },
            rules: {
                  complexity: ["error", { max: 10 }],
                  eqeqeq: ["error", "smart"],
                  "func-style": ["warn", "declaration"],
                  "id-length": ["error", { min: 3 }],
                  "max-depth": ["warn", 3],
                  "max-lines-per-function": ["error", { max: 20 }],
                  "max-nested-callbacks": ["error", 3],
                  "max-params": ["error", 3],
                  "no-await-in-loop": "error",
                  "no-console": "warn",
                  "no-invalid-regexp": "error",
                  "no-magic-numbers": "warn",
                  "no-var": "error",
                  "prefer-const": "error",
                  "prefer-destructuring": [
                        "error",
                        {
                              array: true,
                              object: true,
                        },
                  ],
                  "sort-imports": "warn",
                  "sort-keys": "warn",
                  "sort-vars": "warn",
            },
      },
      pluginJs.configs.recommended,
];
