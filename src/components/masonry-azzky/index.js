import React, { useReducer } from "react"
import ImagesLightBox from "../gallery/lightbox"
import { lightBoxReducer } from "./reducers"
import { GatsbyImage } from "gatsby-plugin-image"
import useWidth from "../../hooks/windowsize"
import config from "./config"

import "react-image-lightbox/style.css"
import { Gallery, Column, Item } from './styled'

const GalleryItem = ({
    img,
    imgIndex,
    index,
    settings
}) => {
    console.log(img.file.url);
    return (
        <Item itemScope
              itemType="http://schema.org/ImageObject">
            <figcaption itemProp="name"
                        className="visually-hidden">
                {img.description || 'aaaaa'}
            </figcaption>
            <GatsbyImage itemProp="contentUrl"
                         image={img.gatsbyImageData}
                         alt={img.description || 'aaaaa'} />
            <button className="opener"
                    onClick={() =>
                        settings.useLightBox &&
                        settings.lightBoxDispatch({
                            type: "photoIndex_Open",
                            photoIndex:
                                imgIndex === 0
                                    ? index
                                    : index + imgIndex * settings.columnNumber,
                    })}>
                <span className="visually-hidden">
                    {config.imageOpenText}
                </span>
            </button>
        </Item>
    )
}

const GalleryColumn = ({
    column,
    index,
    settings,
    pageNsfw
}) => {
    return (
        <Column key={index}>
            {column.map((img, imgIndex) => (
                <GalleryItem
                    img={img}
                    imgIndex={imgIndex}
                    index={index}
                    settings={settings} key={imgIndex} pageNsfw={pageNsfw} />
                ))}
        </Column>
    )
}

const ResponsiveGallery = ({
    images,
    useLightBox
}) => {
    const allImages = images
    // start masonry logic here
    const [width] = useWidth()
    let columnNumber = 2
    let getWidth = false

    const setWidth  = () => {
        if (allImages.length < columnNumber) columnNumber = allImages.length
        getWidth = true
    }

    switch (true) {
        case width > config.deviceL:
            columnNumber = config.deviceLcolumncount
            setWidth()
            break
        default:
            getWidth = true
    }
    
    // end masonry logic here

    let imgSubArray = [...Array(columnNumber)].map((_, i) => [])

    for (let i = 0; i < images.length; i++) {
        imgSubArray[(i + columnNumber) % columnNumber].push(images[i])
    }
    // end filtering logic here

    const [lightBoxVal, lightBoxDispatch] = useReducer(lightBoxReducer, {
        photoIndex: 0,
        isOpen: false,
    })

    const settings = {
        useLightBox, lightBoxDispatch, columnNumber
    }
    
    return <>
    {useLightBox && lightBoxVal.isOpen && (
    <ImagesLightBox
        imagesLightbox={images}
        photoIndex={lightBoxVal.photoIndex}
        lightBoxDispatch={lightBoxDispatch}
        />
    )}
    <Gallery columnNumber={columnNumber}>
        {getWidth && imgSubArray.map((column, index) => (
            <GalleryColumn
                column={column}
                index={index}
                settings={settings}
                key={index}/>
        ))}
    </Gallery>
    </>
}

export default ResponsiveGallery