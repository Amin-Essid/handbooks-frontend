const path = require(`path`);

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        return result;
      })
    );
  });

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const getPages = makeRequest(
    graphql,
    `
    {
        allStrapiHandbook {
            edges {
              node {          
                url
              }
            }
          }
          allStrapiCategory {
            edges {
              node {
                url
                handbook {
                  url
                }
              }
            }
          }
          allStrapiGuide {
            edges {
              node {
                category {
                  url
                }
                handbook {
                  url
                }
                url
              }
            }
          }
    }
    `
  ).then((result) => {
    // Create pages for each handbook pages.
    result.data.allStrapiHandbook.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.url}`,
        component: path.resolve(`src/templates/handbook.js`),
        context: {
          url: node.url,
        },
      });
    });
    // Create pages for each category pages.
    result.data.allStrapiCategory.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.handbook.url}/${node.url}`,
        component: path.resolve(`src/templates/category.js`),
        context: {
          url: node.url,
        },
      });
    });
    // Create pages for each guide pages.
    result.data.allStrapiGuide.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.handbook.url}/${node.category.url}/${node.url}`,
        component: path.resolve(`src/templates/guide.js`),
        context: {
          url: node.url,
          handbookUrl: node.handbook.url,
          categoryUrl: node.category.url,
        },
      });
    });
  });

  // Query for articles nodes to use in creating pages.
  return getPages;
};
