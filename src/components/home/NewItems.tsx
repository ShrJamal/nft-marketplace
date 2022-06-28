import { useEffect, useState } from 'react'
import { useMarketplace } from '@thirdweb-dev/react'
import CardItem from '../Shared/CardItem'
import { AuctionListing, DirectListing } from '@thirdweb-dev/sdk'

export default function NewItems() {
  const contract = useMarketplace('0xb01d9463eb54860c0D604BE9bb5b001E761f9283')
  const [items, setItems] = useState<(AuctionListing | DirectListing)[]>([])
  useEffect(() => {
    contract
      ?.getAll()
      .then((v) => {
        console.log('getAll', v)
        setItems(v)
      })
      .catch((e) => console.error('getAll', e))
  }, [contract])
  return (
    <div className="container mx-auto w-full h-auto p-5 lg:mt-52 rounded-xl">
      <div className="mb-8">
        <h1 className="font-bold text-3xl dark:text-white">New Items</h1>
      </div>
      <ul className="carousel rounded-box ">
        {items.map((item, i) => (
          <li key={i} className="carousel-item mx-2 pb-7">
            <CardItem
              nft={item.asset.image || ''}
              nftTitle={item.asset.name}
              avatar="https://api.lorem.space/image/face?hash=28212"
              auctionEndInTime="23d 15h 30m 10s"
              likes="90"
              price={
                item.buyoutCurrencyValuePerToken.displayValue +
                ' ' +
                item.buyoutCurrencyValuePerToken.symbol
              }
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
