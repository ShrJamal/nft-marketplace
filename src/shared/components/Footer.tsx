import Link from 'next/link'
import React from 'react'
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaDiscord,
  FaInstagramSquare,
} from 'react-icons/fa'
import { IoSend } from 'react-icons/io5'

export default function Footer() {
  return (
    <div className="w-full h-50 bg-indigo-800 mt-12 pt-10 divide-y divide-indigo-200 ">
      <div className="w-full md:flex md:px-36 px-10 ">
        <div className="md:w-1/4 w-1/2 flex justify-start">
          <div>
            <h1 className="py-2 text-white font-bold text-xl">Marketplace</h1>
            <ul>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>All NFTs</Link>
              </li>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Art</Link>
              </li>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Music</Link>
              </li>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Domain Names</Link>
              </li>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Virtual World</Link>
              </li>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Collectibles</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/4 w-1/2 flex justify-start">
          <div>
            <h1 className="py-2 text-white font-bold text-xl">Resources</h1>
            <ul>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Help Center</Link>
              </li>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Partners</Link>
              </li>
              <li className="text-slate-300 text-semibold text-lg py-1"></li>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Suggestions</Link>
              </li>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Discord</Link>
              </li>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Docs</Link>
              </li>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Newsletter</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/4 flex justify-start">
          <div>
            <h1 className="py-2 text-white font-bold text-xl">Community</h1>
            <ul>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Community</Link>
              </li>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Documentation</Link>
              </li>
              <li className="text-slate-300 text-semibold text-lg py-1"></li>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Brand Assets</Link>
              </li>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Blog</Link>
              </li>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Forum</Link>
              </li>
              <li className="text-slate-300 text-semibold text-lg py-1">
                <Link href={'/'}>Mailing List</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:w-1/4 flex justify-start">
          <div>
            <h1 className="py-2 text-white font-bold text-xl">Newsletter</h1>
            <p className="text-slate-300 text-semibold text-lg py-1">
              Signup for our newsletter to get the latest news in your inbox.
            </p>
            <div className="mt-5">
              <label className="relative text-gray-400 focus-within:text-gray-600 block">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email@weweb3.com"
                  className="form-input border border-gray-900 py-3 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-3 focus:outline-none"
                />

                <IoSend className="w-8 h-8 absolute cursor-pointer	 top-1/2 transform -translate-y-1/2 text-gray-800 right-3" />
              </label>
            </div>
            <p className="text-slate-300 text-semibold text-lg py-1">
              Your email is safe with us. We don&apos;t spam.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 py-3 h-auto md:px-36">
        <div className="md:flex md:justify-between h-full items-center">
          <div className="text-slate-300 font-bold text-lg text-center md:text-start">
            &copy; Copyright 2022 - <Link href={'/'}>WeWeb3</Link>
          </div>
          <div className="flex justify-center mt-4 md:mt-0">
            <button className="btn btn-square bg-white hover:bg-white mx-1">
              <FaTwitterSquare className="h-full w-full text-blue-800" />
            </button>
            <button className="btn btn-square bg-white hover:bg-white mx-1">
              <FaDiscord className="h-full w-full text-blue-800" />
            </button>
            <button className="btn btn-square bg-white hover:bg-white mx-1">
              <FaFacebookSquare className="h-full w-full text-blue-800" />
            </button>
            <button className="btn btn-square bg-white hover:bg-white mx-1">
              <FaInstagramSquare className="h-full w-full text-blue-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
