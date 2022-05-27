import React from "react"
import Lightbox from "react-image-lightbox"
import PropTypes from "prop-types"
import { HolderSmall } from '../../constants'

export const ImagesLightBox = ({
    imagesLightbox,
    photoIndex,
    lightBoxDispatch,
    lightBoxAdditionalProps,
}) => {
    const settingsQuery = '?w=2048&h=2048&q=100&fm=webp'
    return(
    <Lightbox mainSrc={imagesLightbox[photoIndex].file.url + settingsQuery}
              nextSrc={imagesLightbox[(photoIndex + 1) % imagesLightbox.length].file.url + settingsQuery}
              prevSrc={
                    imagesLightbox[
                        (photoIndex + imagesLightbox.length - 1) % imagesLightbox.length
                    ].file.url + settingsQuery
              }
              onCloseRequest={() => lightBoxDispatch({ type: "close" })}
              onMovePrevRequest={() =>
                    lightBoxDispatch({
                        type: "photoIndex",
                        photoIndex:
                            (photoIndex + imagesLightbox.length - 1) % imagesLightbox.length,
                    })
              }
    onMoveNextRequest={() =>
        lightBoxDispatch({
            type: "photoIndex",
            photoIndex: (photoIndex + 1) % imagesLightbox.length,
        })
    }
    imageTitle={
        imagesLightbox[photoIndex].lightboxTitle &&
        imagesLightbox[photoIndex].lightboxTitle
    }
    imageCaption={
        imagesLightbox[photoIndex].lightboxCaption &&
        imagesLightbox[photoIndex].lightboxCaption
    }
    {...lightBoxAdditionalProps}
    />
)};

ImagesLightBox.propTypes = {
    imagesLightbox: PropTypes.array.isRequired,
    photoIndex: PropTypes.number,
    lightBoxDispatch: PropTypes.func,
    lightBoxAdditionalProps: PropTypes.object,
};

export default ImagesLightBox
