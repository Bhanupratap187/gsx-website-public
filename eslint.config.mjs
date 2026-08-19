import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsxA11y from "eslint-plugin-jsx-a11y";
import house from "./eslint-rules/no-block-comments.mjs";

// eslint-config-next already registers the jsx-a11y plugin but enables only a
// subset. Spread the recommended rules instead of re-registering the plugin.
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { house },
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
      "house/no-block-comments": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
  {
    files: ["content/**/*.ts"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            "@/components/*",
            "@/lib/*",
            "react",
            "react-dom",
            "next",
            "next/*",
          ],
        },
      ],
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Read-only design spec — not our code
    "reference/**",
  ]),
]);

export default eslintConfig;
