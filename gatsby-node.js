const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  await createBlogPages(graphql, createPage);
  await createUseCasePages(graphql, createPage);
};

createBlogPages = async (graphql, createPage) => {
  const blogPost = path.resolve('./src/templates/blog-post.js');

  await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              title
              slug
              heroImage {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors);
      throw new Error(result.errors);
    }

    const posts = result.data.allContentfulBlogPost.edges;
    posts.forEach(post => {
      createPage({
        path: `/blog/${post.node.slug}/`,
        component: blogPost,
        context: {
          slug: post.node.slug
        }
      });
    });
  });
};

createUseCasePages = async (graphql, createPage) => {
  const useCaseTemplate = path.resolve('./src/templates/use-case.js');
  await graphql(
    `
      {
        allContentfulUseCase {
          edges {
            node {
              headline {
                headline
              }
              slug
              displayOrder
              heroImage {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors);
      throw new Error(result.errors);
    }

    const posts = result.data.allContentfulUseCase.edges;
    posts.forEach(useCase => {
      createPage({
        path: `/use-case/${useCase.node.slug}/`,
        component: useCaseTemplate,
        context: {
          slug: useCase.node.slug
        }
      });
    });
  });
};
