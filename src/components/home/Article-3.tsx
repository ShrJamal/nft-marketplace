import Link from 'next/link'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

export default function Article_3() {
  return (
    <div className="container bg-base-100 mx-auto w-full h-auto p-5 mt-9 rounded-xl">
      <div className="mb-8">
        <h1 className="font-bold text-4xl">Hot collections</h1>
      </div>
      <ul className="carousel rounded-box p-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <li key={i} className="carousel-item mx-2">
            <CardItem />
          </li>
        ))}
      </ul>
    </div>
  )
}

function CardItem() {
  return (
    <div className="card w-auto shadow-xl	 bg-base-300">
      <figure className="p-5 cursor-pointer">
        <Link href={'/'}>
          <div className="flex justify-center items-center relative w-[255px] h-[160px] hover:transform transition duration-500  hover:scale-105">
            <div className="w-full h-full">
              {/* eslint-disable-next-line  */}
              <img
                src="https://api.lorem.space/image/shoes"
                style={{ objectFit: 'cover' }}
                alt="Shoes"
                className="w-full h-full rounded-xl shadow-md relative"
              />
            </div>
            <div className="avatar absolute top-3/4">
              <div className="w-16 rounded-full ">
                {/* eslint-disable-next-line  */}
                <img src="https://api.lorem.space/image/face?hash=28212" />
                <AiFillCheckCircle className="h-5 w-5 text-indigo-700 bg-white rounded-full absolute right-0 bottom-0" />
              </div>
            </div>
          </div>
        </Link>
      </figure>
      <div className="card-body">
        <div className="w-full flex justify-center items-center">
          <h1 className="font-bold text-base-800 cursor-pointer">
            <Link href={'/'}>WeWeb3</Link>
          </h1>
        </div>
        <div className="w-full flex justify-center items-center">
          <h1 className="font-semibold text-gray-500">ERC - 001</h1>
        </div>
      </div>
    </div>
  )
}
