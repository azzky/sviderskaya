// const path = require(`path`)

// exports.createPages = async ({ graphql, actions }) => {
//     const { createPage } = actions

//     const results = await graphql(`
//     {
//         allContentfulPost(sort: {order: DESC, fields: date}) {
//             edges {
//                 node {
//                     link
//                     type {
//                         type
//                     }
//                     node_locale
//                     updatedAt(formatString: "YYYY-MM-DD")
//                     title
//                     preview {
//                         gatsbyImageData(
//                             quality: 100
//                             placeholder: BLURRED
//                             formats: [AVIF, WEBP]
//                             width: 1920,
//                             breakpoints: [400, 800, 1080, 1366, 1440, 1920]
//                         )
//                     }
//                 }
//             }
//         }
//     }
//   `)
//     const posts = results.data.allContentfulPost.edges

//     const promises = posts.map(async (node, i) => {
//         const previous = i < 2 ? null : posts[i - 2]
//         const next = i === posts.length - 2 ? null : posts[i + 2]
//         let lang = `/${node.node.node_locale}/`
//         if (node.node.node_locale === "en-US") {
//             lang = ""
//         }

//         createPage({
//             path: lang + node.node.type.type + node.node.link,
//             component: path.resolve(`./src/templates/post.jsx`),
//             context: {
//                 slug: node.node.link,
//                 lang: node.node.node_locale,
//                 modified: node.node.updatedAt,
//                 prev: next ? {
//                     link: next.node.link,
//                     title: next.node.title,
//                     image: next.node.preview?.gatsbyImageData
//                 } : null,
//                 next: previous ? {
//                     link: previous.node.link,
//                     title: previous.node.title,
//                     image: previous.node.preview?.gatsbyImageData
//                 } : null
//             }
//         })
//     })

//     await Promise.all(promises)
// }
