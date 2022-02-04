/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import {MetaHome} from '../components/meta/meta'
import {PostsGallery} from '../components/gallery/gallery'
import {PageData} from "../constants"
import config from '../components/meta/config'

const Shibari = () => {
    const data = PageData.en.shibari


    return(
    <StaticQuery query={graphql`
    {
        allContentfulPost {
            edges {
                node {
                    images {
                        file {
                            url
                        }
                        gatsbyImageData(
                            width: 400
                            placeholder: BLURRED
                            formats: [WEBP, JPG]
                            quality: 100
                            breakpoints: [375, 768, 1366, 1920]
                        )
                        description
                    }
                }
            }
        }
    }
    `}
    render={({ allContentfulPost: { edges } }) => (
        <Layout>
        {/* <MetaHome data={data} /> */}
            <PostsGallery edges={edges[0].node.images} />
        </Layout>
    )}/>
)}

export default Shibari