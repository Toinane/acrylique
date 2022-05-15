import { build } from "esbuild";

// CJS
build({
  entryPoints: ["./src/index.ts"],
  logLevel: "info",
  bundle: true,
  // minify: true,
  format: "cjs",
  outfile: "dist/acrylique.min.cjs",
});

// ESM
build({
  entryPoints: ["./src/index.ts"],
  logLevel: "info",
  bundle: true,
  // minify: true,
  format: "esm",
  outfile: "dist/acrylique.min.mjs",
});

// Classic
build({
  entryPoints: ["./src/index.ts"],
  logLevel: "info",
  bundle: true,
  // minify: true,
  format: "iife",
  globalName: "acrylique",
  outfile: "dist/acrylique.min.js",
});
