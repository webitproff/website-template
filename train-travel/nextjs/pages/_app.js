import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }){
  const { title } = pageProps
  
  return <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

      <title>{title ? title +' - ' : ''}Train Travel</title>
    </Head>
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none sm:max-w-none lg:max-w-none xl:max-w-none px-4">
      <Header title={title} />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
}