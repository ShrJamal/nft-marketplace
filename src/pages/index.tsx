import dynamic from 'next/dynamic'
import HomeBanner from '~/components/Home/HomeBanner'
import NftItems from '~/components/Home/NftItems'
const ParticlesBackground = dynamic(
  () => import('~/components/ParticlesBackground'),
)

export default function HomePage() {
  return (
    <section>
      <HomeBanner />
      <NftItems />

      <ParticlesBackground />
    </section>
  )
}
