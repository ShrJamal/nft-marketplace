import React from 'react'
import AboutUs from '~/components/About/AboutUs'
import Feedbacks from '~/components/About/Feedbacks'
import Founders from '~/components/About/Founders'
import Introduction from '~/components/About/Introduction'

export default function index() {
  return (
    <section>
      <article>
        <Introduction />
      </article>
      <article>
        <AboutUs />
      </article>
      <article>
        <Founders />
      </article>
      <article>
        <Feedbacks />
      </article>
    </section>
  )
}
