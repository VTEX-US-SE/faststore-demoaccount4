import { SectionOverride } from '@faststore/core/src/typings/overrides'
import ImageGalleryWrapper from './ImageGalleryWrapper/ImageGalleryWrapper'

const SECTION = 'ProductDetails' as const

const override: SectionOverride = {
  section: SECTION,
  components: {
    ImageGalleryViewer: { Component: ImageGalleryWrapper },
  }
}

export { override }