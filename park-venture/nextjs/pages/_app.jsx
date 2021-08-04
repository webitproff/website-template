import 'tailwindcss/tailwind.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }){
  const { title, description } = pageProps

  return <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <Component {...pageProps} />
  </>
}