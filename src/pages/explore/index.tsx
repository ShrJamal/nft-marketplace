import React from 'react'
import ExploreItems from '~/components/Explore/ExploreItems'
import Introduction from '~/components/Explore/Introduction'

export default function index() {
  return (
    <section>
      <article>
        <Introduction />
      </article>
      <article>
        <div className="bg-white dark:bg-gray-800 px-5 lg:px-20">
          <ExploreItems />
        </div>
      </article>
    </section>
  )
}
