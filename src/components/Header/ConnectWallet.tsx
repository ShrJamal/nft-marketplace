import { FaWallet } from 'react-icons/fa'
import React from 'react'

export default function ConectWallet({ className }: { className?: string }) {
  return (
    <div className={className}>
      <button className="btn btn-outline btn-secondary gap-2 ">
        <FaWallet className="text-[20px]" /> <span>Wallet connect</span>
      </button>
    </div>
  )
}
