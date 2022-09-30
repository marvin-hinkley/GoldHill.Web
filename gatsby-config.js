require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: "gatsby-source-graphql",
    //   options: {
    //     // Arbitrary name for the remote schema Query type
    //     typeName: "strapi",
    //     // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
    //     fieldName: "strapi",
    //     // Url to query from
    //     url: `${process.env.STRAPI_URL}/graphql`,
    //     headers: {
    //       Authorization: `Bearer ${process.env.STRAPI_API_KEY}`
    //     }
    //   },
    // },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.STRAPI_URL,
        accessToken: process.env.STRAPI_API_KEY,
        collectionTypes: [
          { singularName: 'alert' },
          {
            singularName: 'meeting-agenda',
            queryParams: {
              populate: {
                Attachments: '*'
              }
            }
          },
        ],
        singleTypes: [
          { singularName: 'global' },
          {
            singularName: 'hero',
            queryParams: {
              populate: {
                BackgroundImage: '*'
              }
            }
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: `src/images/gatsbyjs-icon.png`,
      },
    },
  ],
}
