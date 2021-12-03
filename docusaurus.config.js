// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Redes y seguridad de computadoras',
  tagline: 'Proyecto integrador',
  url: 'https://HikingCarrot7.github.io',
  baseUrl: '/proyecto-seguridad-redes/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'HikingCarrot7', // Usually your GitHub org/user name.
  projectName: 'proyecto-seguridad-redes', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'RySC',
        logo: {
          alt: 'RySC Logo',
          src: '/img/misc/internet.png',
        },
        items: [
          { to: '/authors', label: 'Autores', position: 'right' },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'Código fuente',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Proyecto final RySC. Hecho con Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'kotlin'],
      },
    }),
};

module.exports = config;
