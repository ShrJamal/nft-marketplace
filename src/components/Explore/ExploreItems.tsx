import React from 'react'
import CardItem from '../Shared/CardItem'

export default function ExploreItems() {
  return (
    <div className="w-full h-auto p-5 lg:mt-52 rounded-xl py-10">
      <div className="mb-8">
        <h1 className="font-bold text-3xl dark:text-white">Items</h1>
      </div>
      <div className="lg:flex mb-5">
        <div className="w-full lg:w-[260px] lg:mx-3">
          <input
            type="text"
            placeholder="Search item here..."
            className="input max-w-xs w-full"
          />
        </div>
        <div className="w-full lg:w-[260px] lg:mx-3 mt-5 lg:mt-0">
          <select className="select w-full max-w-xs">
            <option disabled selected>
              All categories
            </option>
            <option>Art</option>
            <option>Music</option>
            <option>Domain Names</option>
            <option>Sports</option>
            <option>Virtual World</option>
          </select>
        </div>
        <div className="w-full lg:w-[260px] lg:mx-3 mt-5 lg:mt-0">
          <select className="select w-full max-w-xs">
            <option disabled selected>
              Buy Now
            </option>
            <option>On Auction</option>
            <option>Has Offers</option>
          </select>
        </div>
        <div className="w-full lg:w-[260px] lg:mx-3 mt-5 lg:mt-0">
          <select className="select w-full max-w-xs">
            <option disabled selected>
              All Items
            </option>
            <option>Single Items</option>
            <option>Bundles</option>
          </select>
        </div>
      </div>

      <div className="rounded-box  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="mx-2 mt-2">
            <CardItem
              nft="https://api.lorem.space/image/shoes"
              nftTitle="NFT"
              avatar="https://api.lorem.space/image/face?hash=28212"
              auctionEndInTime="23d 15h 30m 10s"
              likes="90"
              price="0.07 ETH"
            />
          </div>
        ))}
      </div>
      <div className="mt-10">
        <div className="btn-group flex justify-center">
          <button className="btn btn-outline w-[160px]">Previous page</button>
          <button className="btn btn-outline  w-[160px]">Next</button>
        </div>
      </div>
    </div>
  )
}
