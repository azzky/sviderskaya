import React from "react"
import ResponsiveGallery from '../masonry-azzky'

const PostsGallery = (props) => {
    const {
        edges
    } = props

    return(
        <ResponsiveGallery images={edges}
                           useLightBox={true}
        />
    )
}

export { PostsGallery };