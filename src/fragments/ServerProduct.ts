import { gql } from '@faststore/graphql-utils'

export const fragment = gql`
  fragment ServerProduct on Query {
    product(locator: $locator) {
      id: productID
      relatedSkus {
        id
        skuRefId
        skuId
        items {
          relationshipType
          relatedSkus {
            relatedSkuRefId
            relatedSkuId
            quantity
            position
            imageUrl
            name
          }
        }
      }
    }
  }
`