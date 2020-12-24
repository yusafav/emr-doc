export default {
  title: "Meditagg Doc",
  tagline: "An Application for Managing Electronic Medical Records",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/meditaggFavIcon.ico",
  organizationName: "facebook",
  projectName: "docusaurus",
  themeConfig: {
    navbar: {
      title: "Documentation",
      logo: {
        alt: "Meditagg Logo",
        src: "img/meditaggLogo.svg",
      },
      items: [],
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
