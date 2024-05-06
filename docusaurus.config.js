/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Title',
    tagline: 'docs bla bla bla',
    url: 'https://docs.domain.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'your organization',
    projectName: 'Ypur project',
    plugins: //for tag manager - install the plugin
        [[ require.resolve('docusaurus-lunr-search'), 
          {
            languages: ['en', 'pt'], // language codes
            indexBaseUrl: true,
          }],
        ],
           
    themeConfig: {
        prism: {
            additionalLanguages: ['java', 'csharp', 'ruby', 'rust', 'swift', 'dart'],
        },
        tagManager: {
            trackingID: '',
        },
        navbar: {
            title: 'Title
            logo: {
                alt: 'Logo',
                src: 'img/logo.png',
            },
            items: [
                // {
                //     type: 'doc',
                //     docId: 'intro',
                //     position: 'left',
                //     label: 'Documentos',
                // },
                {
                    to: 'https://www.domain.com',
                    label: 'Website',
                    position: 'left',
                },
                {
                    href: 'https://git.domain.com',
                    label: 'GitLab TR',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'ICT',
                    items: [
                        {
                            label: 'docs.domain.com',
                            to: 'https://docs.domain.com/',
                        },
                       
                    ],
                },
                {
                    title: 'GIT',
                    items: [
                        {
                            label: 'Git',
                            href: 'https://git.domain.com',
                        },
                    ],
                },
                
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Tribunal de Recurso.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    // Please change this to your repo.
                   // editUrl: 'https://git.tribunais.tl/apps/sop-docs/-/tree/main/docs',
                   editUrl: undefined,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
