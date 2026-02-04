import type { AppProps } from 'next/app'

// Analytics Dashboard v1
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
