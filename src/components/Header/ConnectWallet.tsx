import { useState } from 'react'
import { FaWallet } from 'react-icons/fa'
import { useAddress, useMetamask } from '@thirdweb-dev/react'
import { toast } from 'react-toastify'

export default function ConectWallet({ className }: { className?: string }) {
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  async function onClick() {
    if (address) return
    const { error } = await connectWithMetamask()
    if (error) {
      toast.error(error.message, {
        position: 'bottom-center',
      })
    }
  }
  return (
    <div className={className}>
      <button
        className={'w-[10rem] btn btn-outline btn-secondary capitalize px-2'}
        disabled={!!address}
        onClick={onClick}
      >
        {address ? (
          <span className="text-base-content">
            {address.substring(0, 10)}...
          </span>
        ) : (
          <>
            <FaWallet className="text-xl mr-1" /> <span>Connect Wallet</span>
          </>
        )}
      </button>
    </div>
  )
}
