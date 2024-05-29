import React, { useEffect, useMemo, useState } from 'react'
import fsconfig from 'faststore.config'
import { useQuery } from 'src/sdk/graphql/useQuery'
import { ClientManyProductsQueryDocument } from '@generated/graphql'
import ProductCard from './ProductCard/ProductCard'
import formatProducts from '../../../utils/formatProducts copy'
import styles from './RoomIdea.module.scss'

function RoomIdea({
  first = 100,
  after = '0',
  term = '',
  productGrid: {
    selectedFacets,
    sort,
    return: returnBtn
  },
  image
}: any) {

  if (selectedFacets && selectedFacets.length > 0) {
    selectedFacets = [...selectedFacets].map(({ key, value }) => {
      return {
        key,
        value: encodeURI(value),
      }
    })
  }

  const queryVariables = {
    first,
    after,
    sort,
    selectedFacets: selectedFacets
      ? [
          ...selectedFacets,
          {
            key: 'channel',
            value: fsconfig.session.channel,
          },
        ]
      : [],
    term,
  }

  const pds: any = useQuery(ClientManyProductsQueryDocument, queryVariables)

  const productEdges = useMemo(() => {
    return (
      pds?.data?.search?.products?.edges?.map(
        (product: any) => product?.node
      ) || []
    )
  }, [pds])

  const products: any =
    productEdges.length > 0 ? formatProducts(productEdges) : []

  return (
    <div className={styles.RoomIdea}>
      <div data-fs-room-idea-image>
        <img src={image.src} alt={image.alt} />
      </div>
      <div data-fs-room-idea-products>
        {products.length > 0 ? (
          <div data-fs-room-idea-products-container>
            {products.map((product: any, i: number) => (
              <ProductCard
                key={`p${i}`}
                product={product}
                showdiscountbadge={"false"}
                testId="product-card"
              />
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
      <div data-fs-room-idea-return>
        <a data-fs-room-idea-return-link href={returnBtn.url}>{returnBtn.text}</a>
      </div>
    </div>
  )
}

export default RoomIdea