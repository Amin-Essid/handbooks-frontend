module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "hanbooks-frontend",
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`handbook`, `category`, `guide`, `step`],
      },
    },
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [`Lato`],
        display: "swap",
        // display: "block",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `handbook`,
        short_name: `handbook`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // You can have multiple instances of this plugin to create indexes with
    // different names or engines. For example, multi-lingual sites could create
    // an index for each language.
    // {
    //   resolve: "gatsby-plugin-local-search",
    //   options: {
    //     // A unique name for the search index. This should be descriptive of
    //     // what the index contains. This is required.
    //     name: "pages",
    //     // Set the search engine to create the index. This is required.
    //     // The following engines are supported: flexsearch, lunr
    //     engine: "flexsearch",
    //     // Provide options to the engine. This is optional and only recommended
    //     // for advanced users.
    //     //
    //     // Note: Only the flexsearch engine supports options.
    //     engineOptions: {
    //       profile: "speed",
    //       // Partial search moving forward
    //       tokenize: "forward",
    //     },
    //     // GraphQL query used to fetch all data for the search index. This is
    //     // required.
    //     query: `
    //       query {
    //         allStrapiGuides {
    //           edges {
    //             node {

    //               id
    //               title
    //               url
    //               description
    //               image {
    //                 localFile {
    //                   childImageSharp {
    //                     gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, aspectRatio: 1.3)
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     `,
    //     // Field used as the reference value for each document.
    //     // Default: 'id'.
    //     ref: "url",
    //     // List of keys to index. The values of the keys are taken from the
    //     // normalizer function below.
    //     // Default: all fields
    //     index: ["title", "description"],
    //     // List of keys to store and make available in your UI. The values of
    //     // the keys are taken from the normalizer function below.
    //     // Default: all fields
    //     store: ["url", "title", "description", "image", "id"],
    //     // Function used to map the result from the GraphQL query. This should
    //     // return an array of items to index in the form of flat objects
    //     // containing properties to index. The objects must contain the `ref`
    //     // field above (default: 'id'). This is required.
    //     normalizer: ({ data }) =>
    //       data.allStrapiGuides.edges.map(({ node }) => {
    //         return {
    //           title: node.title,
    //           description: node.description,
    //           slug: node.url,
    //           image: node.image,
    //           id: node.id,
    //           // price: node.price,
    //         }
    //       }),
    //   },
    // },
  ],
};
