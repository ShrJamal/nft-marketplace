import dynamic from 'next/dynamic'
import NewItems from '~/components/home/NewItems'
import HotCollections from '~/components/home/HotCollections'
import TopSellers from '~/components/home/TopSellers'
import Introduction from '~/components/home/Introduction'
const ParticlesBackground = dynamic(
  () => import('~/components/ParticlesBackground'),
)

export default function HomePage() {
  return (
    <section>
      <article>
        <Introduction />
      </article>
      <section className="container mx-auto rounded-lg bg-gray-800 p-5">
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
