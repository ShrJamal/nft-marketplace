import { useMarketplace } from '@thirdweb-dev/react'
import { useQuery } from 'react-query'

export function useMarketPlaceItems() {
  const marketplace = useMarketplace(
    process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,
  )
  return useQuery('marketplaceItems', async () => {
    const items = await marketplace?.getAll()
    return items
  })
}
