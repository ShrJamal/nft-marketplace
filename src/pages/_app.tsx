import { useState } from 'react'
import type { AppProps } from 'next/app'
import { QueryClientProvider, Hydrate } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { newQueryClient } from '~/helpers/react-query'
import Layout from '~/layouts/default'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { ToastContainer } from 'react-toastify'
import '~/styles/global.css'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(newQueryClient())
  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
            <ToastContainer />
          </Layout>
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThirdwebProvider>
  )
}
