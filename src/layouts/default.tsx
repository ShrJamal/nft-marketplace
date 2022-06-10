import type { ReactNode } from 'react'
import Footer from '~/components/Footer'
import Navbar from '~/components/Header/Navbar'

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
