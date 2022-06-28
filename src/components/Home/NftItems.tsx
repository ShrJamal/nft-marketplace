import { useMarketPlaceItems } from '~/hooks/useMarketplace'

export default function NftItems() {
  const { data: items, isFetching } = useMarketPlaceItems()
  return (
    <article className="container mx-auto rounded-lg bg-gray-800">
      <div className="container bg-base-100 mx-auto w-full h-auto p-5 mt-9 rounded-xl">
        <div className="mb-8">
          <h1 className="font-bold text-4xl">Items</h1>
        </div>
        <ul className="carousel rounded-box">
          {items?.map((item, i) => (
            <li key={i} className="carousel-item mx-2">
              <div className="card w-80 shadow-xl bg-base-300">
                <figure className="px-8 pt-10">
                  <div className="flex justify-center items-center relative w-[255px] h-[264px]">
                    <div className="w-full h-full">
                      {/* eslint-disable-next-line  */}
                      <img
                        src={item.asset.image || ''}
                        style={{ objectFit: 'cover' }}
                        alt={item.asset.name}
                        className="w-full h-full rounded-xl shadow-md relative cursor-pointer hover:transform transition duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </figure>
                <div className="card-body flex flex-row">
                  <div className="flex-grow">
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-bold ">{item.asset.name}</h1>
                    </div>
                    <div className="w-full flex justify-between items-center">
                      <h1 className="font-semibold text-gray-500">
                        {item.buyoutCurrencyValuePerToken?.displayValue}{' '}
                        {item.buyoutCurrencyValuePerToken.symbol}
                      </h1>
                    </div>
                  </div>
                  <button className="btn btn-ghost font-bold text-blue-400">
                    Place a bid
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
