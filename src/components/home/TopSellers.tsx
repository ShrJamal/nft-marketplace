import Link from 'next/link'
import React, { useRef } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

export default function TopSellers() {
  return (
    <div className="container mx-auto w-full h-auto p-5 mt-9 rounded-xl">
      <div className="mb-8">
        <h1 className="font-bold text-3xl dark:text-white">Top sellers</h1>
      </div>
      <div className="rounded-box  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="mx-2 mt-2">
            <CardItem />
          </div>
        ))}
      </div>
    </div>
  )
}

function CardItem() {
  return (
    <div className="card w-auto shadow-xl bg-base-300 p-5">
      <div className="flex justify-center items-center">
        <div className="avatar hover:transform transition duration-500 hover:scale-105">
          <Link href={'/'}>
            <div className="w-20 rounded-full cursor-pointer hover:ring ring-primary ring-offset-base-100 ring-offset-2">
              {/* eslint-disable-next-line  */}
              <img src="https://api.lorem.space/image/face?hash=3174" />
              <AiFillCheckCircle className="h-7 w-7 text-indigo-700 bg-white rounded-full absolute left-0 -top-2" />
            </div>
          </Link>
        </div>
        <div className="mx-3">
          <h1 className="font-bold text-xl text-gray-700 dark:text-white">
            <span className="hover:text-indigo-700">
              <Link href={'/'}>AFIFI Hishame</Link>
            </span>
          </h1>
          <h1>
            <span>2.5 ETH</span>
          </h1>
        </div>
      </div>
    </div>
  )
}
