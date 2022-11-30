import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    "./src/index.ts",
    "./src/interceptors/ClientRequest/index.ts",
    "./src/interceptors/fetch/index.ts",
    "./src/interceptors/XMLHttpRequest/index.ts"
  ],
  outDir: "./lib"
})

// export default defineConfig([
//   {
//     name: 'index',
//     entry: ['./src/index.ts'],
//     outDir: './lib',
//     format: ['esm'],
//     legacyOutput: true,
//     sourcemap: true,
//     clean: true,
//     bundle: true,
//     splitting: true,
//     dts: true,
//   },
//   {
//     name: 'ClientRequest',
//     entry: ['./src/interceptors/ClientRequest/index.ts'],
//     outDir: './lib/interceptors/ClientRequest',
//     format: ['esm'],
//     legacyOutput: true,
//     sourcemap: true,
//     clean: true,
//     bundle: true,
//     splitting: true,
//     dts: true,
//   },
//   {
//     name: 'fetch',
//     entry: ['./src/interceptors/fetch/index.ts'],
//     outDir: './lib/interceptors/fetch',
//     legacyOutput: true,
//     format: ['esm'],
//     bundle: true,
//     sourcemap: true,
//     splitting: true,
//     dts: true,
//   },
//   {
//     name: 'XMLHttpRequest',
//     entry: ['./src/interceptors/XMLHttpRequest/index.ts'],
//     format: ['esm'],
//     outDir: './lib/interceptors/XMLHttpRequest',
//     clean: true,
//     sourcemap: true,
//     splitting: true,
//     dts: true,
//   },
// ])
