const path = require(`path`);

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      projects: allProjectsJson {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `)
  data.projects.edges.forEach(edge => {
    const id = edge.node.id;
    const title = edge.node.title;
    console.log(title);
    actions.createPage({
      path: title.toLowerCase(),
      component: require.resolve(`./src/templates/project.js`),
      context: { id: id },
    })
  })
}