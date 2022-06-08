import Image from 'next/image'
import React from 'react'

export default function Article_1() {
  return (
    <article className="container">
      <div className="grid grid-cols-2 gap-4">
        <div className="w-full flex justify-center items-center">
          <div>
            <h1>Create, sell and collect digital items.</h1>
            <div>
              Unit of data stored on a digital ledger, called a blockchain, that
              certifies a digital asset to be unique and therefore not
              interchangeable
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/women-with-vr.png"
            alt="women-with-vr"
            width={100}
            height={100}
          />
        </div>
      </div>
    </article>
  )
}
