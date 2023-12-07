// pages/_app.js
import PlausibleProvider from 'next-plausible'

export default function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="poland.natwestshareplans.com">
      <Component {...pageProps} />
    </PlausibleProvider>
  )
}