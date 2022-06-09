import type { ReactNode } from 'react'
import Footer from '~/shared/components/Footer'
import Navbar from '~/shared/components/Navbar'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <header style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
      </header>
      <main className="mb-auto">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
