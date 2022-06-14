import React, { useState } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import SocialMedia from '../Footer/SocialMedia'

export default function Founders() {
  return (
    <div className="container mx-auto w-full lg:h-[700px] p-5 lg:p-10">
      <div className="w-full flex justify-center">
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">
            <h1 className="text-lg lg:text-4xl font-bold">Founders</h1>
          </div>
          <div className="mt-10 lg:flex justify-between">
            <CardItem
              fullname="BOUICHOU Aicha"
              profile="Blockchain developer | Build smart contract"
            />
            <CardItem
              fullname="Zaka Salaheddine "
              profile="Full stack developer ReactJs | NextJs"
            />
            <CardItem
              fullname="AFIFI Hishame "
              profile="Full stack developer ReactJs | NextJs"
            />
            <CardItem
              fullname="ASSAHRAOUI Jamal"
              profile="Full stack developer | Blockchain developer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function CardItem({
  fullname,
  profile,
}: {
  fullname: string
  profile: string
}) {
  const [displayBlock, setDisplayBlock] = useState(false)

  function toggleOpenBlock() {
    setDisplayBlock(!displayBlock)
  }
  return (
    <div
      onMouseLeave={() => setDisplayBlock(false)}
      className="card shadow-xl bg-base-300 w-full lg:w-[350px] mt-5 lg:mt-0"
    >
      <figure className="px-4 pt-10">
        <div className="flex justify-center items-center relative w-[255px] h-[264px]">
          <div
            className={`absolute inset-0 ${
              displayBlock ? 'flex' : 'hidden'
            } items-center justify-center  rounded-lg z-10`}
            style={{ background: 'rgba(0,0,0,.5)' }}
          >
            <div>
              <h1 className="text-center text-white font-bold text-lg mt-5">
                Contact
              </h1>
              <div className="mt-5">
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="w-full h-full z-0">
            {/* eslint-disable-next-line  */}
            <img
              src={'https://api.lorem.space/image/face?hash=28212'}
              style={{ objectFit: 'cover' }}
              alt={'Founder'}
              className="w-full h-full rounded-xl shadow-md relative cursor-pointer hover:transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-lg font-bold text-gray-700 dark:text-white ">
            {fullname}
          </h1>
          <FiMoreHorizontal
            onClick={toggleOpenBlock}
            className="w-8 h-8 text-base-content cursor-pointer hover:bg-gray-400 rounded-full"
          />
        </div>
        <div className="w-full flex justify-center items-center mt-3">
          <h1 className="font-medium text-center text-gray-600 dark:text-white ">
            {profile}
          </h1>
        </div>
      </div>
    </div>
  )
}
