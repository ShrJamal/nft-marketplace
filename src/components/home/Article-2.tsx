import Link from 'next/link'
import React, { useState } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { AiFillHeart } from 'react-icons/ai'
import SocialMedia from '~/components/Footer/SocialMedia'

export default function Article_2() {
  return (
    <div className="container bg-base-100 mx-auto w-full h-auto p-5 mt-9 rounded-xl">
      <div className="mb-8">
        <h1 className="font-bold text-4xl">New Items</h1>
      </div>
      <ul className="carousel rounded-box">
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
  const [displayBlock, setDisplayBlock] = useState(false)
  const [heart, setHeart] = useState(false)

  function toggleOpenBlock() {
    setDisplayBlock(!displayBlock)
  }
  function toggleLikeWithHeart() {
    setHeart(!heart)
  }

  return (
    <div
      onMouseLeave={() => setDisplayBlock(false)}
      className="card w-80 shadow-xl bg-base-300"
    >
      <figure className="px-8 pt-10">
        <div className="flex justify-center items-center relative w-[255px] h-[264px]">
          <div
            className={`absolute ${
              displayBlock ? 'flex' : 'hidden'
            } items-center justify-center w-full h-full rounded-lg z-50`}
            style={{ background: 'rgba(0,0,0,.5)' }}
          >
            <div>
              <button
                onClick={toggleOpenBlock}
                className="btn bg-indigo-700 border-none hover:bg-indigo-800 w-full"
              >
                Buy now
              </button>
              <h1 className="text-center text-white font-bold text-lg mt-5">
                Share
              </h1>
              <div className="mt-5">
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="w-full h-full">
            {/* eslint-disable-next-line  */}
            <img
              src="https://api.lorem.space/image/shoes"
              style={{ objectFit: 'cover' }}
              alt="Shoes"
              className="w-full h-full rounded-xl shadow-md relative cursor-pointer hover:transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
        <div className="avatar absolute top-3 left-3 hover:scale-105">
          <div className="cursor-pointer w-16 rounded-full hover:ring ring-primary ring-offset-base-100 ring-offset-2">
            {/* eslint-disable-next-line  */}
            <img src="https://api.lorem.space/image/face?hash=28212" />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold ">Shoes</h1>
          <FiMoreHorizontal
            onClick={toggleOpenBlock}
            className="w-8 h-8 text-base-content cursor-pointer hover:bg-gray-400 rounded-full"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-semibold text-gray-500">0.06 ETH</h1>
        </div>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-blue-400">
            <Link href={'/'}>Place a bid</Link>
          </h1>
          <div
            className={`flex items-center  ${
              heart ? 'text-red-400' : 'text-gray-500'
            } cursor-pointer`}
            onClick={toggleLikeWithHeart}
          >
            <AiFillHeart className={`w-8 h-8`} />
            <div className="ml-1">92</div>
          </div>
        </div>
      </div>
    </div>
  )
}
