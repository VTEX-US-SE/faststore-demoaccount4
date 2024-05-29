import { ProductCard as UIProductCard, ProductCardImage, Link } from '@faststore/ui'
import NextLink from 'next/link'
import { useProductLink } from 'src/sdk/product/useProductLink'
import { useFormattedPrice } from '../../../../utils/useFormattedPrice'
import ProductCardContent from './ProductCardContent'
import { Image } from 'src/components/ui/Image'

const ProductCard = (props: any) => {
  const { product, index } = props
  const linkProps = {
    ...useProductLink({ product, selectedOffer: 0, index }),
    as: NextLink,
    passHref: true,
    legacyBehavior: false,
    prefetch: false,
  }

  return (
    <UIProductCard
      {...props}
    >
      <Link {...linkProps}>
        <ProductCardImage aspectRatio={3 / 4}>
          <Image
            data-fs-image
            src={product?.image?.[0]?.url}
            alt={product?.image?.[0]?.alternateName || product?.isVariantOf?.name}
            width="220"
            height="220"
            loading="lazy"
          />
        </ProductCardImage>
        <ProductCardContent
          brandName={product?.brand?.name}
          skuQuantity={product?.numberOfColorVariations}
          sku={product?.sku}
          title={product?.isVariantOf?.name}
          price={
            product?.offers?.offers?.length > 0
              ? {
                  value: product.offers.offers[0]?.price,
                  listPrice: product.offers.offers[0]?.listPrice,
                  formatter: useFormattedPrice,
                }
              : undefined
          }
          linkProps={linkProps}
          promotions={[]}
        />
      </Link>
    </UIProductCard>
  )
}

export default ProductCard
