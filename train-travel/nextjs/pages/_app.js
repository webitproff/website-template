import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }){
  const { title } = pageProps
  
  return <>
    <Head>
      <title>{title ? title +' - ' : ''}Train Travel</title>
    </Head>
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none sm:max-w-none lg:max-w-none xl:max-w-none px-4">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  </>
}