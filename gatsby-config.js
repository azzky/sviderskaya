if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}
if (process.env.NODE_ENV === "production") {
  require("dotenv").config();
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
        excludes: [`/ru/404`, `/404.html`, `/success`, `/ru/success`, `/contact`, `/ru/contact`],
        query: `{
          allSitePage {
            nodes {
              path
              pageContext
            }
          }
        }`,
        resolveSiteUrl: () => process.env.SITE_URL,
        serialize: ({path, pageContext}) => {
          const today = new Date()
          return {
            url: process.env.SITE_URL + path,
            changefreq: `daily`,
            priority: 0.7,
            lastmodISO: pageContext.modified || today.toISOString()
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: process.env.SITE_URL,
        sitemap: process.env.SITE_URL +'/sitemap-0.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }]
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shibari by Azzky`,
        short_name: `Shibari by Azzky`,
        start_url: `/`,
        description: 'Shibari portfolio of rope artist Azzky',
        lang: 'en',
        // direction: 'ltr',
        orientation: 'portrait',
        background_color: `#f7f0eb`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/fav.png`,
        include_favicon: true,
        cache_busting_mode: 'none',
        // gcm_sender_id: '976120493038',
        icon_options: {
          purpose: `any maskable`,
        },
        localize: [
          {
            start_url: '/ru/',
            lang: 'ru',
            name: `Шибари от Azzky`,
            short_name: `Шибари от Azzky`,
            description: 'Сайт-портфолио Azzky про шибари',
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: ['https://images.ctfassets.net'],
      },
    },
    // `gatsby-plugin-offline`,
    // `gatsby-plugin-remove-serviceworker`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: process.env.SITE_URL,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        failOnError: true,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-csp`,
    //   options: {
    //     disableOnDev: false,
    //     reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
    //     mergeScriptHashes: true, // you can disable scripts sha256 hashes
    //     mergeStyleHashes: true, // you can disable styles sha256 hashes
    //     mergeDefaultDirectives: true,
    //     directives: {
    //       "script-src": "'self' 'unsafe-inline' 'unsafe-eval' www.google-analytics.com",
    //       "style-src": "'self' 'unsafe-inline'",
    //       "img-src": "'self' data: www.google-analytics.com azzky.ru images.ctfassets.net",
    //       "connect-src": "'self' http://localhost:33763",
    //       "default-src": "'self'"
    //       // you can add your directives or override defaults
    //     }
    //   }
    // },
  ],
}