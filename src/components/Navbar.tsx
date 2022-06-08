import ThemeSwitcher from './ThemeSwitcher'
import { MdMenu } from 'react-icons/md'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import ConectWallet from './ConectWallet'
import GlobalSearch from './GlobalSearch'

function NavLink({ to, children }: { to: string; children: any }) {
  return (
    <a href={to} className={`mx-4 text-xl font-medium my-4`}>
      {children}
    </a>
  )
}

function MobileNav({ open }: { open: any }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20">
        {' '}
        {/*logo container*/}
        <Link className="text-xl font-semibold" href="/">
          WeWeb3
        </Link>
      </div>
      <div className="flex flex-col ml-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        <div className="flex items-center justify-between my-4 md:my-0">
          <ConectWallet classes="md:mx-5" />
          <ThemeSwitcher />
        </div>
        <GlobalSearch dropdownPosition="dropdown-right" />
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed w-full flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
      <MobileNav open={open} />
      <div className="w-3/12 flex items-center">
        <Link className="text-2xl font-semibold" href="/">
          WeWeb3
        </Link>
      </div>
      <div className="w-full flex justify-end items-center">
        <GlobalSearch
          dropdownPosition="dropdown-left"
          classes="hidden md:flex"
        />
        <div>
          <div
            className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
            onClick={() => {
              setOpen(!open)
            }}
          >
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? 'rotate-45 translate-y-3.5' : ''
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
                open ? 'w-0' : 'w-full'
              }`}
            />
            <span
              className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
                open ? '-rotate-45 -translate-y-3.5' : ''
              }`}
            />
          </div>
          <div className="hidden md:mx-5 md:flex md:items-center">
            <NavLink to="/contact">Home</NavLink>
            <NavLink to="/contact">Explore</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/about">Resources</NavLink>
            <NavLink to="/about">Contact</NavLink>
            <ConectWallet classes="mx-5" />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}
// <nav className="m-2 p-1 flex items-center shadow-lg bg-neutral text-neutral-content rounded-box">
//   <button className="lg:hidden btn btn-square btn-ghost mx-3">
//     <MdMenu className="text-4xl " />
//   </button>

//   <div className="flex items-center">
//     {/* <Image src="/logo.png" width={50} height={30} alt="Logo" /> */}
//     <h1 className="pl-3 text-xl">
//       <strong className="text-green-600">Web3 </strong> Template
//     </h1>
//   </div>
//   <div className="flex-1" />
//   <ThemeSwitcher />
// </nav>
