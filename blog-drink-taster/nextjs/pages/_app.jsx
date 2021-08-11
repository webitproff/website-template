import 'tailwindcss/tailwind.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }){

  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}