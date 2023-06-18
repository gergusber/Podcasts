'use client'

import '@/styles/globals.css'
import Layout from '../components/Layout/layout';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { useState } from 'react';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '../lib/react-query-config';

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: '#4ADE7B',
      secondary: '#F9CB80',
      error: '#FCC5D8',
    },
  }
})

export default function App({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient(config))
  
  return <NextUIProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout >
          <Component {...pageProps} />
        </Layout></Hydrate>
    </QueryClientProvider>
  </NextUIProvider>
}
