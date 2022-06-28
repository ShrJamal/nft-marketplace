import Image from 'next/image'
import React from 'react'

export default function HomeBanner() {
  return (
    <article>
      <div
        style={{ position: 'absolute', top: 0, opacity: 0.7, zIndex: -1 }}
        className="
              w-full
              h-full
              relative
              before:absolute
              before:w-full
              before:h-full
              before:-z-10
              before:bg-gradient-to-r
              before:from-indigo-800
              before:to-fuchsia-700
              before:left-0
              before:top-0
              before:blur-[15px]
              "
      ></div>
      <div className="container mx-auto py-12 mt-12 md:mt-14 px-3">
        <div className="w-full md:flex">
          <div className="w-full min-h-full md:w-1/2 flex justify-center items-center">
            <div className="w-full">
              <div className="flex justify-between md:block items-center w-full">
                <h1 className="uppercase font-bold text-indigo-200 text- xl md:text-3xl my-5 w-auto">
                  weweb market
                </h1>
                <div className="md:hidden mb-5">
                  <Image
                    src="/images/vr.png"
                    alt="women-with-vr"
                    width={200}
                    height={200}
                    priority
                  />
                </div>
              </div>
              <h1 className="text-white font-bold	text-3xl md:text-6xl	">
                Create, sell and collect digital items.
              </h1>
              <div className="mt-8 text-slate-300 font-normal text-xl md:text-2xl">
                Unit of data stored on a digital ledger, called a blockchain,
                that certifies a digital asset to be unique and therefore not
                interchangeable
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 min-h-full hidden md:flex justify-center items-center">
            <Image
              src="/images/vr.png"
              alt="women-with-vr"
              width={700}
              height={700}
              priority
            />
          </div>
        </div>
      </div>
    </article>
  )
}
