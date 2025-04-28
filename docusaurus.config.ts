import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "RemoteCord Docs",
  tagline: "Find everything you need to know about RemoteCord here.",
  favicon: "img/favicon.ico",


  // Set the production url of your site here
  url: "https://docs.remotecord.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Remotecord", // Usually your GitHub org/user name.
  projectName: "remotecord-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/RemoteCord/remotecord-docs/tree/main",
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "RemoteCord",
      logo: {
        alt: "Remotecord logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docs",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/RemoteCord",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Main Page",
          items: [
            {
              label: "RemoteCord",
              href: "https://remotecord.app",
            },
          ],
        },
        {
          title: "Community & Support",
          items: [
            {
              label: "Discord",
              href: "https://discord.com/oauth2/authorize?client_id=1043524973517615164&response_type=code&redirect_uri=https%3A%2F%2Fapii.remotecord.app%2Fapi%2Fcontrollers%2Fget-email&scope=email",
            },
            {
              label: "Github",
              href: "https://github.com/remotecord",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} RemoteCord. Built with Docusaurus.`,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true, // 👈 hides the toggle
      respectPrefersColorScheme: false, // 👈 ignores system setting
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
