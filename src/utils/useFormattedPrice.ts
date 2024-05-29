import { useMemo } from 'react'

export const usePriceFormatter = () => {
  return (price: number) =>
    price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

export const useFormattedPrice = (price: number) => {
  const formatter = usePriceFormatter()

  return useMemo(() => formatter(price), [formatter, price])
}
