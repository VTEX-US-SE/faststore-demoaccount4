import React from 'react'
import { ImageGalleryViewer, ImageGalleryViewerProps } from '@faststore/ui'
import RelatedSkus from '../ImageGalleryWrapper/RelatedSkus/RelatedSkus'

const ImageGalleryWrapper = (props: ImageGalleryViewerProps) => {

    return (
        <>
            <ImageGalleryViewer {...props} /> 
            <RelatedSkus />
        </>
    )
}

export default ImageGalleryWrapper