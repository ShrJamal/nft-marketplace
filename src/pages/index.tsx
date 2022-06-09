import react from 'react'
import Article_1 from '~/components/home/Article-1'
import ParticlesBackground from '~/shared/components/ParticlesBackground'
export default function HomePage() {
  return (
    <section>
      <article>
        <Article_1 />
      </article>
      <article
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -2,
        }}
      >
        <ParticlesBackground />
      </article>
    </section>
  )
}
