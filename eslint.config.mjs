import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Theme / vendor scripts (minified, not authored in-repo)
    "public/**",
    // One-off Node scripts at repo root / tmp
    "tmp/**",
    "refactor-imports.js",
    "refactor-services.js",
    "update_json.js",
  ]),
]);

export default eslintConfig;
