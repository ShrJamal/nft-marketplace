import dynamic from 'next/dynamic'
import NewItems from '~/components/home/NewItems'
import HotCollections from '~/components/home/HotCollections'
import TopSellers from '~/components/home/TopSellers'
import Introduction from '~/components/home/Introduction'
import SellNftInstructions from '~/components/home/SellNftInstructions'
const ParticlesBackground = dynamic(
  () => import('~/components/ParticlesBackground'),
)

export default function HomePage() {
  return (
    <section>
      <article>
        <Introduction />
      </article>
      <article>
        <SellNftInstructions />
      </article>
      <section className="w-full bg-gray-300 dark:bg-gray-800 p-5">
        <article>
          <NewItems />
        </article>
        <article>
          <HotCollections />
        </article>
        <article>
          <TopSellers />
        </article>
      </section>
      <article
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: -2,
        }}
      >
        <ParticlesBackground />
      </article>
    </section>
  )
}
