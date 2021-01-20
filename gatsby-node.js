const path= require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

//Dynamic Blog Templates

module.exports.createPages = async ({graphql,actions}) => {
  const {createPage} = actions
  const result = await graphql(
    `query Getblog {
  blogs: allContentfulBlogs {
    nodes {
      slug
    }
  }
}

`)

result.data.blogs.nodes.forEach((blog) => {
  createPage({
    path:`/blogs/${blog.slug}`,
    component:path.resolve(`src/templates/blog-template.js`),
    context:{
      slug:blog.slug,
    },
  })
})

}