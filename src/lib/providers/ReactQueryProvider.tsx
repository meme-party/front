"use client"
import { isServer, QueryClient, QueryClientProvider } from "@tanstack/react-query"

// ? https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#initial-setup

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: 0,
        refetchOnWindowFocus: false
      }
      // dehydrate: {
      //   shouldDehydrateQuery: (query) => defaultShouldDehydrateQuery(query) || query.state.status === "pending",
      //   shouldRedactErrors: () => false
      // }
    }
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (isServer) {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

export default function ReactQueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
