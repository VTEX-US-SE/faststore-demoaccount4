import { forwardRef } from 'react'
import { Link, ProductPrice } from '@faststore/ui'

const ProductCardContent = forwardRef<
  HTMLElement,
  any
>(function CardContent(
  {
    testId = 'fs-product-card-content',
    title,
    linkProps,
    price,
    brandName,
    skuQuantity,
    outOfStock,
    outOfStockLabel = 'Out of stock',
    promotions,
    showDiscountBadge,
    buttonLabel = 'Add',
    onButtonClick,
    children,
    sku,
    ...otherProps
  },
  ref
) {
  return (
    <section
      ref={ref}
      data-fs-product-card-content
      {...otherProps}
    >
      <div data-fs-product-card-heading>
        <h3 data-fs-product-card-title>
          <Link {...linkProps} title={title}>
            <span>{title}</span>
          </Link>
        </h3>
        <div data-fs-product-card-pricing>
          $<ProductPrice value={price.value} listPrice={price.listPrice} />
        </div>
        <div data-fs-product-card-footer>
          <p data-fs-shipping>Free Shipping*</p>
        </div>
      </div>
    </section>
  )
})

export default ProductCardContent