import react from 'react'
import Article_1 from '~/components/home/Article-1'
import ParticlesBackground from '~/shared/components/ParticlesBackground'
export default function HomePage() {
  return (
    <section>
      <Article_1 />
      <article
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <ParticlesBackground />
      </article>
    </section>
  )
}
