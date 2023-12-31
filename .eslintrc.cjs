/* eslint-env node */
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:unicorn/recommended",
    "plugin:@eslint-react/all-legacy",
    "plugin:react-hooks/recommended",
    "plugin:@next/next/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
  ignorePatterns: ["**/*.js", "**/*.cjs", "**/*.mjs"],
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],

    "@typescript-eslint/no-non-null-assertion": "off",

    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/no-import-type-side-effects": "error",

    "no-console": ["warn", { allow: ["warn", "error"] }],

    "unicorn/prevent-abbreviations": "off",
    // https://github.com/sindresorhus/meta/discussions/7
    "unicorn/no-null": "off",
    // https://github.com/orgs/web-infra-dev/discussions/10
    "unicorn/prefer-top-level-await": "off",
    "unicorn/catch-error-name": "off",

    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: {
          arguments: false,
          attributes: false,
        },
      },
    ],
    "@eslint-react/naming-convention/filename": "off",

    "no-restricted-syntax": [
      "error",
      {
        selector: "TSEnumDeclaration",
        message: "We should not use Enum",
      },
    ],

    "tailwindcss/classnames-order": "off",
  },

  settings: {
    tailwindcss: {
      callees: ["cn", "cva", "ctx..*"],
    },
  },

  overrides: [
    {
      files: ["*.tsx", "*.ts"],
      excludedFiles: [
        "src/app/**/{layout,page,loding,not-found,error,global-error,route,template,default}.tsx",
        "*.config.ts",
      ],
      rules: {
        // disable export * and enum
        "no-restricted-syntax": [
          "error",
          {
            selector: ":matches(ExportAllDeclaration)",
            message: "Export only modules you need.",
          },
          {
            selector: "TSEnumDeclaration",
            message: "We should not use Enum",
          },
        ],
        "no-restricted-exports": [
          "error",
          {
            restrictDefaultExports: { direct: true },
          },
        ],
      },
    },
  ],
}
