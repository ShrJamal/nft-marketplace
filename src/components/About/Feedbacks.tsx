import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
export default function Feedbacks() {
  return (
    <div className="container mx-auto w-full lg:h-[700px] p-5 lg:p-10">
      <div className="w-full flex justify-center ">
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">
            <h1 className="text-lg lg:text-4xl font-bold">
              Good news from far away
            </h1>
          </div>
          <div className="flex justify-center">
            <h4 className="text-base-500 lg:text-lg">
              Lets see what people think of WeWeb3
            </h4>
          </div>
          <div className="lg:mt-24 mt-10 w-full ">
            <ul className="carousel rounded-box w-full  ">
              {Array.from({ length: 3 }).map((_, i) => (
                <li
                  key={i}
                  className="carousel-item  w-full flex justify-center"
                >
                  <CardItem />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function CardItem() {
  return (
    <div className="flex justify-center ">
      <div>
        <FaQuoteLeft className="text-lg lg:text-6xl text-indigo-800 dark:text-gray-500" />
      </div>
      <div className="leading-10 lg:w-1/2">
        <h1 className="text-center text-lg lg:text-2xl">
          This place is exactly like the picture posted on weweb3 great service,
          we had a great stay!
        </h1>
        <h2 className="text-center text-xl mt-4">Anwar Salim</h2>
        <h3 className="flex items-center justify-center w-full mt-3">
          <GoLocation className="text-3xl mx-1 text-gray-400" />
          Tokyo
        </h3>
        <div className="w-full flex justify-center mt-5">
          <div className="avatar">
            <div className="w-24 lg:w-48 rounded-xl">
              {/* eslint-disable @next/next/no-img-element  */}
              <img
                src="https://api.lorem.space/image/face?hash=64318"
                alt="User"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <FaQuoteRight className="text-lg lg:text-6xl text-indigo-800 dark:text-gray-500" />
      </div>
    </div>
  )
}
