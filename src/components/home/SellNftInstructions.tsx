import React from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import { MdOutlineSell } from 'react-icons/md'
import { BiWallet } from 'react-icons/bi'

export default function SellNftInstructions() {
  return (
    <div className="container mx-auto w-full h-auto px-3 lg:px-5 my-9 md:my-0 lg:-mb-44 rounded-xl">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-10 gap-y-3 lg:gap-y-0">
          <CardItem
            icon="wallet"
            title="Set up your wallet"
            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
          />
          <CardItem
            icon="upload"
            title="Add your NFT's"
            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
          />
          <CardItem
            icon="sell"
            title="Sell your NFT's"
            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem."
          />
        </div>
      </div>
    </div>
  )
}

function CardItem({
  icon,
  title,
  content,
}: {
  icon: string
  title: string
  content: string
}) {
  const backgroundIconClasses =
    'h-28 w-28 right-3 -bottom-2 absolute text-4xl text-gray-500 opacity-40'
  return (
    <div className="card w-full p-5 bg-base-100 shadow-xl">
      <div className="absolute inset-0 transform transition duration-700 hover:-rotate-6 z-20">
        {icon === 'wallet' ? (
          <BiWallet className={backgroundIconClasses} />
        ) : icon === 'upload' ? (
          <FiUploadCloud className={backgroundIconClasses} />
        ) : (
          <MdOutlineSell className={backgroundIconClasses} />
        )}
      </div>

      <div className="card-body">
        <h2 className="card-title flex h-16 w-16 p-3 bg-indigo-600 rounded-lg">
          {icon === 'wallet' ? (
            <BiWallet className="h-full w-full text-4xl text-white" />
          ) : icon === 'upload' ? (
            <FiUploadCloud className="h-full w-full text-4xl text-white" />
          ) : (
            <MdOutlineSell className="h-full w-full text-4xl text-white" />
          )}
        </h2>
        <h1 className="text-2xl font-bold dark:text-white py-3">{title}</h1>
        <p className="font-medium text-gray-800 dark:text-gray-300 z-10">
          {content}
        </p>
      </div>
    </div>
  )
}
