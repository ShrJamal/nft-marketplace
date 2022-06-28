import { QueryClient } from 'react-query'
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'

export function newQueryClient() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minute
        cacheTime: 1000 * 60 * 60 * 24, // 24 hours

        refetchOnWindowFocus: process.env.NODE_ENV !== 'development',
      },
    },
  })
  if (typeof window !== 'undefined') {
    const localStoragePersistor = createWebStoragePersistor({
      storage: window.localStorage,
    })
    persistQueryClient({
      queryClient,
      persistor: localStoragePersistor,
    })
  }
  return queryClient
}
