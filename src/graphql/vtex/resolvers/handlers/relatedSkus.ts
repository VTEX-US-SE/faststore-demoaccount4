import type { StoreProductRoot } from '@faststore/core/api'

type Item = {
    relationship_type: string
    relatedSkus: RelatedSku[]
}

type RelatedSku = {
    relatedSkuRefId: string
    relatedSkuId: string
    quantity: number
    position: number
    imageUrl: string
    name: string
}

const baseUrl = `https://demoaccount1.myvtex.com/_v/related-parts`

const relatedSkus = async (root: StoreProductRoot) => {
    
    const skuId = root.itemId
    try {
        const response = await fetch(
            `${baseUrl}/${skuId}`
        )

        if (!response.ok) {
            throw new Error(
                `Error in the VTEX API response: ${response}. Retrying request...`
            )
        }

        const responseData = await response.json()

        const auxResponse = {
            ...responseData,
            items: responseData.items.map((item: Item) => {
                const { relationship_type, ...response } = item
                return {
                    ...response,
                    relationshipType: relationship_type
                }
            })
        }

        return auxResponse
    } catch (error) {
        console.log(`Error fetching data from VTEX API: ${error}`)
        return {
            id: '',
            skuRefId: '',
            skuId: '',
            items: [
                {
                    relationshipType: '',
                    relatedSkus: [
                        {
                            relatedSkuRefId: '',
                            relatedSkuId: '',
                            quantity: 0,
                            position: 0,
                            imageUrl: '',
                            name: ''
                        }
                    ]
                }
            ]
        }
    }
}

export default relatedSkus