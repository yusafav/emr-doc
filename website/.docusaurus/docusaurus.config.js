export default {
  title: "Meditagg",
  tagline: "The tagline of my site",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook",
  projectName: "docusaurus",
  themeConfig: {
    navbar: {
      title: "Meditagg",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
      hideOnScroll: false,
    },
    footer: {
      style: "dark",
      copyright: "Copyright © 2020 Meditagg.",
      links: [],
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: "🌜",
        darkIconStyle: {},
        lightIcon: "🌞",
        lightIconStyle: {},
      },
    },
    docs: {
      versionPersistence: "localStorage",
    },
    metadatas: [],
    prism: {
      additionalLanguages: [],
    },
    hideableSidebar: false,
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath:
            "/home/greeshma/workspace/emr-docusaurus/website/sidebars.js",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss:
            "/home/greeshma/workspace/emr-docusaurus/website/src/css/custom.css",
        },
      },
    ],
  ],
  baseUrlIssueBanner: true,
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    localeConfigs: {},
  },
  onDuplicateRoutes: "warn",
  customFields: {},
  plugins: [],
  themes: [],
  titleDelimiter: "|",
  noIndex: false,
};
