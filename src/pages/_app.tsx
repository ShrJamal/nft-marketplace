import { useState } from 'react'
import type { AppProps } from 'next/app'
import { QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import '~/styles/global.css'
import { newQueryClient } from '~/helpers/react-query'
import Layout from '~/layouts/default'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(newQueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
