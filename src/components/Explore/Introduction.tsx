import React from 'react'

export default function Introduction() {
  return (
    <div className="w-full">
      <div className="relative w-full h-full">
        {/* eslint-disable @next/next/no-img-element  */}
        <img
          src="/images/metaverse.jpg"
          alt="Metaverse"
          className="-z-50 mt-16 lg:mt-1 h-[300px] lg:h-screen w-screen object-cover fixed"
        />
        <div className="z-10 w-full h-[360px] lg:h-screen flex justify-end items-center">
          <h1 className=" text-3xl lg:text-9xl absolute right-8 lg:right-40 mt-28 lg:mt-40 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-fuchsia-400">
            Explore
          </h1>
        </div>
      </div>
    </div>
  )
}
