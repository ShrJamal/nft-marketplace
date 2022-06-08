import { FaWallet } from 'react-icons/fa'
import React from 'react'

export default function ConectWallet({ classes }: { classes?: string }) {
  return (
    <div className={classes}>
      <button className="btn btn-outline btn-primary gap-2 ">
        <FaWallet className="text-[20px]" /> <span>Wallet connect</span>
      </button>
    </div>
  )
}
