import Link from 'next/link'
import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { AiFillHeart } from 'react-icons/ai'
import AliceCarousel from 'react-alice-carousel'

function Card_Item() {
  return (
    <div className="card w-80 shadow-xl bg-gray-700">
      <figure className="px-8 pt-10">
        <div
          className="avatar absolute top-3 left-3 hover:scale-90"
          title="Afifi hishame"
        >
          <div className="cursor-pointer w-16 rounded-full hover:ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://api.lorem.space/image/face?hash=28212" />
          </div>
        </div>
        <div>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
            className="rounded-xl shadow-md"
          />
        </div>
      </figure>
      <div className="card-body">
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-white">Shoes</h1>
          <FiMoreHorizontal className="w-8 h-8 text-white" />
        </div>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-gray-300">0.06 ETH</h1>
        </div>
        <div className="w-full flex justify-between items-center">
          <h1 className="font-bold text-blue-400">
            <Link href={'/'}>Place a bid</Link>
          </h1>
          <div className="flex items-center">
            <AiFillHeart className="w-8 h-8 text-gray-400" />{' '}
            <span className="text-gray-300 ml-1">92</span>
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
          autoPlay={true}
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
