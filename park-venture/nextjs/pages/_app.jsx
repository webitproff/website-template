import 'tailwindcss/tailwind.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }){
  const { title, description } = pageProps

  return <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
    <Component {...pageProps} />
  </>
}