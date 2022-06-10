import { useState } from 'react'
import Link from 'next/link'
import ConnectWallet from './ConnectWallet'
import ThemeSwitcher from './ThemeSwitcher'
import GlobalSearch from './GlobalSearch'
import AnimatedMenuBurger from './AnimatedMenuBurger'

const navItems = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/',
    label: 'Explore',
  },
  {
    href: '/',
    label: 'About',
  },
  {
    href: '/',
    label: 'Resources',
  },
  {
    href: '/',
    label: 'Contact',
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed w-full flex filter drop-shadow-md bg-base-100 px-4 py-4 h-20 items-center">
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
          <div className="md:hidden">
            <AnimatedMenuBurger open={open} onClick={() => setOpen(!open)} />
          </div>
          <ul className="hidden md:mx-5 md:flex md:items-center">
            {navItems.map((item, i) => (
              <li key={i} className="mx-4 text-xl font-medium my-4">
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <ConnectWallet className="mx-5" />
            <ThemeSwitcher />
          </ul>
        </div>
      </div>
    </nav>
  )
}

function MobileNav({ open }: { open: boolean }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-base-200 transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-base-100 h-20">
        {/*logo container*/}
        <Link className="text-xl font-semibold" href="/">
          WeWeb3
        </Link>
      </div>
      <div className="flex flex-col ml-2">
        <ul>
          {navItems.map((item, i) => (
            <li key={i} className="mx-4 text-xl font-medium my-4">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between my-4 md:my-0">
          <ConnectWallet className="md:mx-5" />
          <ThemeSwitcher />
        </div>
        <GlobalSearch dropdownPosition="dropdown-right" />
      </div>
    </div>
  )
}
