import React from "react"
import ResponsiveGallery from '../masonry-azzky'

const PostsGallery = (props) => {
    const {
        edges
    } = props
    console.log(edges);

    // edges.map((i) => {
    //     images.push(
    //         {
    //             url: i.node.link,
    //             data: i.node.preview.gatsbyImageData,
    //             tags: i.node.tags,
    //             type: i.node.type.type,
    //             title: i.node.title
    //         }
    //     )
    //     return null
    // })
    return(
        <ResponsiveGallery images={edges}
                           useLightBox={true}
        />
    )
}

export { PostsGallery };