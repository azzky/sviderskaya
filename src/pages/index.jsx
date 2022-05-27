/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import {MetaHome} from '../components/meta/meta'
import {PostsGallery} from '../components/gallery/gallery'
import {PageData} from "../constants"
import config from '../components/meta/config'
import { GatsbyImage } from "gatsby-plugin-image"

const Shibari = () => {
    const data = PageData.en.shibari


    return(
    <StaticQuery query={graphql`
    {
        allContentfulHomeImage {
            edges {
                node {
                    image {
                        file {
                            url
                        }
                        gatsbyImageData(
                            width: 700
                            placeholder: BLURRED
                            formats: [WEBP, JPG]
                            quality: 100
                            breakpoints: [375, 768, 1366, 1920]
                        )
                        description
                    }
                    text {
                        text
                    }
                }
            }
        }
    }
    `}
    render={({ allContentfulHomeImage: { edges } }) => (
        <Layout>
            <div>
                <GatsbyImage image={edges[0].node.image.gatsbyImageData}/>
                <div>
                    <p>{edges[0].node.text.text}</p>
                </div>
            </div>
        {/* <MetaHome data={data} /> */}
        </Layout>
    )}/>
)}

export default Shibari