import type { ReactNode } from 'react'
import Navbar from '~/shared/components/Navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4">
      <div>
        <Navbar />
      </div>
      <div>
        <div style={{ marginTop: '10px' }}>{children}</div>
      </div>
    </div>
  )
}
