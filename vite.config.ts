import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
      },
      manifest: {
        name: "PWA Notepad",
        short_name: "PWANotepad",
        start_url: "/",
        theme_color: "#000000",
        background_color: "#ffffff",
        icons: [
          {
            src: "./icon512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        file_handlers: [
          {
            action: "/",
            accept: {
              "text/*": [
                ".txt",
                ".json",
                ".bowerrc",
                ".jshintrc",
                ".jscsrc",
                ".eslintrc",
                ".babelrc",
                ".har",
                ".abap",
                ".cls",
                ".azcli",
                ".bat",
                ".cmd",
                ".bicep",
                ".mligo",
                ".clj",
                ".cljs",
                ".cljc",
                ".edn",
                ".coffee",
                ".c",
                ".h",
                ".cpp",
                ".cc",
                ".cxx",
                ".hpp",
                ".hh",
                ".hxx",
                ".cs",
                ".csx",
                ".cake",
                ".css",
                ".dart",
                ".dockerfile",
                ".ecl",
                ".ex",
                ".exs",
                ".fs",
                ".fsi",
                ".ml",
                ".mli",
                ".fsx",
                ".fsscript",
                ".go",
                ".graphql",
                ".gql",
                ".handlebars",
                ".hbs",
                ".tf",
                ".tfvars",
                ".hcl",
                ".html",
                ".htm",
                ".shtml",
                ".xhtml",
                ".mdoc",
                ".jsp",
                ".asp",
                ".aspx",
                ".jshtm",
                ".ini",
                ".properties",
                ".gitconfig",
                ".java",
                ".jav",
                ".js",
                ".es6",
                ".jsx",
                ".mjs",
                ".jl",
                ".kt",
                ".less",
                ".lex",
                ".lua",
                ".liquid",
                ".html.liquid",
                ".m3",
                ".i3",
                ".mg",
                ".ig",
                ".md",
                ".markdown",
                ".mdown",
                ".mkdn",
                ".mkd",
                ".mdwn",
                ".mdtxt",
                ".mdtext",
                ".s",
                ".dax",
                ".msdax",
                ".m",
                ".pas",
                ".p",
                ".pp",
                ".ligo",
                ".pl",
                ".php",
                ".php4",
                ".php5",
                ".phtml",
                ".ctp",
                ".dats",
                ".sats",
                ".hats",
                ".pq",
                ".pqm",
                ".ps1",
                ".psm1",
                ".psd1",
                ".jade",
                ".pug",
                ".py",
                ".rpy",
                ".pyw",
                ".cpy",
                ".gyp",
                ".gypi",
                ".r",
                ".rhistory",
                ".rmd",
                ".rprofile",
                ".rt",
                ".cshtml",
                ".redis",
                ".rst",
                ".rb",
                ".rbx",
                ".rjs",
                ".gemspec",
                ".pp",
                ".rs",
                ".rlib",
                ".sb",
                ".scala",
                ".sc",
                ".sbt",
                ".scm",
                ".ss",
                ".sch",
                ".rkt",
                ".scss",
                ".sh",
                ".bash",
                ".sol",
                ".aes",
                ".sql",
                ".st",
                ".iecst",
                ".iecplc",
                ".lc3lib",
                ".swift",
                ".sv",
                ".svh",
                ".v",
                ".vh",
                ".tcl",
                ".twig",
                ".ts",
                ".tsx",
                ".vb",
                ".xml",
                ".dtd",
                ".ascx",
                ".csproj",
                ".config",
                ".wxi",
                ".wxl",
                ".wxs",
                ".xaml",
                ".svg",
                ".svgz",
                ".opf",
                ".xsl",
                ".yaml",
                ".yml",
              ],
            },
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ["@hey-web-components/monaco-editor"],
  },
});
