// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "TODO",
  tagline: "The Universal Credit Protocol",
  url: "https://omnisciate.github.io",
  baseUrl: "/docs/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.png",
  organizationName: "TODO",
  projectName: "docs",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    autoCollapseSidebarCategories: true,
    algolia: {
      apiKey: "ba302929473f01e65a7a9db29568ad9c",
      appId: "DXWXYS5HT9",
      indexName: "prod_index",
    },
    navbar: {
      logo: {
        alt: "TODO",
        srcDark: "logo_long.png",
        src: "logo_long_black.png",
      },
      items: [
        {
          label: "Twitter",
          href: "https://twitter.com/TODO",
          position: "right",
        },
        {
          label: "GitHub",
          href: "https://github.com/TODO",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Developers",
          items: [
            {
              label: "Whitepaper",
              href: "https://docs.TODO/assets/files/whitepaper-6d79d366383af419382831913a0470a1.pdf",
            },
            {
              label: "GitHub",
              href: "https://github.com/TODO",
            },
            {
              label: "Feedback",
              to: "/",
            },
          ],
        },
        {
          title: "Ecosystem",
          items: [
            {
              label: "Website",
              href: "https://www.TODO",
            },
            {
              label: "App",
              href: "https://TODO",
            },
            {
              label: "DeFiLlama",
              href: "https://TODO",
            },
            {
              label: "Dune Analytics",
              href: "https://TODO",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/TODO",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/TODO",
            },
            {
              label: "Blog",
              href: "https://blog.TODO",
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} TODO.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
//   plugins: [[require.resolve("@cmfcmf/docusaurus-search-local"),
//     {
//       // whether to index docs pages
//       indexDocs: true,

//       indexDocSidebarParentCategories: 0,

//       indexBlog: false,

//       indexPages: false,
//       language: "en",
//       style: undefined,
//       maxSearchResults: 8,
//       lunr: {
//         tokenizerSeparator: /[\s\-]+/,
       
//         b: 0.75,
//        k1: 1.2,
//         titleBoost: 5,
//         contentBoost: 1,
//         tagsBoost: 3,
//         parentCategoriesBoost: 2, // Only used when indexDocSidebarParentCategories > 0
//       }
//     }
// ]],
};

module.exports = config;
