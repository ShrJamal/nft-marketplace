import dynamic from 'next/dynamic'
import Article_1 from '~/components/home/Article-1'
import Article_2 from '~/components/home/Article-2'
import Article_3 from '~/components/home/Article-3'
const ParticlesBackground = dynamic(
  () => import('~/components/ParticlesBackground'),
)

export default function HomePage() {
  return (
    <section>
      <article>
        <Article_1 />
      </article>
      <section className="container mx-auto rounded-lg bg-gray-800 p-5">
        <article>
          <Article_2 />
        </article>
        <article>
          <Article_3 />
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
