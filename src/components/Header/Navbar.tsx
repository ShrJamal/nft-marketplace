import Link from 'next/link'
import ConnectWallet from './ConnectWallet'
import ThemeSwitcher from './ThemeSwitcher'

export default function Navbar() {
  return (
    <nav className="fixed w-full flex filter drop-shadow-md bg-base-100 px-4 py-4 h-20 items-center">
      <div className="w-3/12 flex text-2xl font-bold items-center">
        <Link className="font-semibold" href="/">
          WeWeb3
        </Link>
      </div>
      <div className="w-full flex justify-end items-center">
        <div className="mx-5 flex items-center">
          <ConnectWallet className="mx-5" />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}
