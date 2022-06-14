import React from 'react'

export default function Introduction() {
  return (
    <div className="w-full">
      {/* eslint-disable @next/next/no-img-element  */}
      <img
        src="/images/cover-about.jpg"
        alt="Metaverse"
        className="-z-50 mt-16 lg:mt-1 h-[300px]  lg:h-[500px] w-screen object-cover "
      />

      <div className="z-10 w-full absolute top-0 mt-16 lg:mt-1 h-[300px]  lg:h-[500px] flex items-center justify-center">
        <h1
          className=" text-4xl lg:text-7xl font-extrabold text-white shadow-lg -ml-2"
          style={{
            textShadow:
              ' 1px 1px 10px rgba(55, 48, 163), 0 0 1em rgba(55, 48, 163), 0 0 .5em rgba(55, 48, 163)',
          }}
        >
          About Us
        </h1>
      </div>
    </div>
  )
}
