import React from 'react'
import CardItem from '../Shared/CardItem'

export default function NewItems() {
  return (
    <div className="container mx-auto w-full h-auto p-5 lg:mt-52 rounded-xl">
      <div className="mb-8">
        <h1 className="font-bold text-3xl dark:text-white">New Items</h1>
      </div>
      <ul className="carousel rounded-box ">
        {Array.from({ length: 8 }).map((_, i) => (
          <li key={i} className="carousel-item mx-2 pb-7">
            <CardItem
              nft="https://api.lorem.space/image/shoes"
              nftTitle="NFT"
              avatar="https://api.lorem.space/image/face?hash=28212"
              auctionEndInTime="23d 15h 30m 10s"
              likes="90"
              price="0.07 ETH"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
