import React from 'react'
import { BsHandThumbsUpFill } from 'react-icons/bs'
import { FaRegGrinHearts, FaSurprise } from 'react-icons/fa'
export default function AboutUs() {
  return (
    <div className="container mx-auto w-full lg:h-[700px] p-5 lg:p-10">
      <div className="lg:flex w-full items-center h-full mt-5 lg:mt-0">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold">Who we are?</h1>
          <p className="text-lg lg:text-xl mt-5 text-gray-700 dark:text-white lg:leading-10">
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content which inform, We’re
            impartial and independent, and every day we create distinctive,
            world-class programmes and content which inform, educate and
            entertain millions of people in the around the world. We’re
            impartial and independent, and every day we create distinctive,
            world-class programmes and content which inform, We’re impartial and
            independent, and every day we create distinctive, world-class
            programmes and content which inform, educate and entertain millions
            of people in the around the world.
          </p>
        </div>
        <div className="w-full relative lg:w-1/2 lg:p-24 mt-10 lg:mt-0">
          {/* eslint-disable @next/next/no-img-element */}
          <img src="/images/nft.png" alt="NFT" className="w-full h-full " />
          <div className="absolute w-14 h-14 lg:h-20 lg:w-20 p-3 bg-gray-100 dark:bg-white animate-bounce -top-6 lg:top-32 lg:left-10 rounded-xl ">
            <BsHandThumbsUpFill className="w-full h-full text-amber-500 text-4xl  transform -rotate-12" />
          </div>
          <div className="absolute h-14 w-14 p-3 bg-gray-100 dark:bg-white animate-bounce top-0 lg:top-52 right-0 lg:-right-10  rounded-xl ">
            <FaSurprise className="w-full h-full text-purple-500 text-4xl" />
          </div>
          <div className="absolute h-14 w-14 p-3 bg-gray-100 dark:bg-white animate-bounce -bottom-5 lg:bottom-20 right-0 lg:right-10  rounded-xl ">
            <FaRegGrinHearts className="w-full h-full text-red-500 text-4xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
