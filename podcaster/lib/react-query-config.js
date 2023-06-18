export const config = {
  defaultOptions: {
      queries: {
          staleTime: 24 * 60 * 60 * 1000,
          cacheTime: 24 * 60 * 60 * 1000,
          refetchOnWindowFocus: false
      }
  }
}