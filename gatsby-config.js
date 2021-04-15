require('dotenv').config({
  path:`.env.${process.env.NODE_ENV}`
})
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [

     {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mobi4te0npts`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "Fw49coGp_zcnPCDJ83VgzdxIGhBp9af1XtHpqZTe2CY",
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-inline-svg`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: `webp`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 50,
        failOnError: true,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyD9gs80sZG2xgAo2t6CsOgT7MSlF-yzh_U",
          authDomain: "icvreact.firebaseapp.com",
          databaseURL: "https://icvreact-default-rtdb.firebaseio.com/",
          projectId: "icvreact",
          storageBucket: "icvreact.appspot.com",
          messagingSenderId: "189094855320",
          appId: "1:189094855320:web:7025c86b7a4239a51c46ed"
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
