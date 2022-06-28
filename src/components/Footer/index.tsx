import Link from 'next/link'
import React from 'react'
import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <div className="w-full h-50 bg-indigo-800 mt-12 pt-10 divide-y divide-indigo-200 ">
      <div className="w-full mt-10 py-3 h-auto md:px-36">
        <div className="md:flex md:justify-between h-full items-center">
          <div className="text-slate-300 font-bold text-center md:text-start">
            &copy; Copyright {new Date().getFullYear()} -{' '}
            <Link href={'/'}>WeWeb3</Link>
          </div>
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}
