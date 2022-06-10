import Link from 'next/link'
import React, { useState } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { AiFillHeart } from 'react-icons/ai'
import AliceCarousel from 'react-alice-carousel'
import SocialMedia from '~/shared/components/SocialMedia'

function Card_Item() {
  const [displayBlock, setDisplayBlock] = useState(false)
  const [heart, setHeart] = useState(false)

  const toggleOpenBlock = () => {
    setDisplayBlock(!displayBlock)
  }
  const toggleOpenBlockOnMouseLeave = () => {
    setDisplayBlock(false)
  }
  const toggleLikeWithHeart = () => {
    setHeart(!heart)
  }

  return (
    <div
      onMouseLeave={toggleOpenBlockOnMouseLeave}
      className="card w-80 shadow-xl bg-gray-700"
    >
      <figure className="px-8 pt-10">
        <div
          className="avatar absolute top-3 left-3 hover:scale-105"
          title="Afifi hishame"
          style={{ zIndex: 999 }}
        >
          <div className="cursor-pointer w-16 rounded-full hover:ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://api.lorem.space/image/face?hash=28212" />
          </div>
        </div>
        <div
          className="flex justify-center items-center"
          style={{ position: 'relative', width: '255px', height: '263px' }}
        >
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
            <img
              src="https://api.lorem.space/image/shoes"
              style={{ objectFit: 'cover' }}
              alt="Shoes"
              className="absolute w-full h-full rounded-xl shadow-md relative cursor-pointer hover:transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-white">Shoes</h1>
          <FiMoreHorizontal
            onClick={toggleOpenBlock}
            className="w-8 h-8 text-white cursor-pointer hover:bg-gray-400 rounded-full"
          />
        </div>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-gray-300">0.06 ETH</h1>
        </div>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-blue-400">
            <Link href={'/'}>Place a bid</Link>
          </h1>
          <div
            className={`flex items-center  ${
              heart ? 'text-red-400' : 'text-gray-400'
            } cursor-pointer`}
            onClick={toggleLikeWithHeart}
          >
            <AiFillHeart className={`w-8 h-8`} />
            <div className="text-gray-300 ml-1">92</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Article_2() {
  const items = [
    <Card_Item key={0} />,
    <Card_Item key={1} />,
    <Card_Item key={2} />,
    <Card_Item key={3} />,
    <Card_Item key={4} />,
    <Card_Item key={5} />,
    <Card_Item key={6} />,
  ]
  return (
    <div className="container mx-auto w-full h-auto p-5 mt-9 rounded-xl">
      <div className="mb-8">
        <h1 className="text-white font-bold text-4xl">New Items</h1>
      </div>
      <div>
        <AliceCarousel
          animationType={'slide'}
          responsive={{
            0: {
              items: 1,
            },
            1024: {
              items: 4,
            },
          }}
          autoPlay={false}
          autoPlayInterval={1500}
          infinite={true}
          disableButtonsControls={true}
          mouseTracking
          items={items}
        />
      </div>
    </div>
  )
}
