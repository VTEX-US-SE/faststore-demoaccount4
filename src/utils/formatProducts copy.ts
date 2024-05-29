import NextLink from 'next/link'

const formatProducts = (products: any) => {
  products.forEach((product: any) => {
    product.linkProps = {
      href: `/${product.slug}/p`,
      as: NextLink,
      passHref: true,
      legacyBehavior: false,
      prefetch: false,
      onClick: () => undefined,
      'data-testid': 'product-link',
    }
  })

  return products
}

export default formatProducts
