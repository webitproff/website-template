import Head from 'next/head'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }){
  
  return <>
    <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/css/uikit.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.1/dist/js/uikit-icons.min.js"></script>
    </Head>
    <Component {...pageProps} />
    <Footer />
  </>
}