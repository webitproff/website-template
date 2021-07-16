import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min.js'
import 'uikit/dist/js/uikit-icons.min.js'
import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }){
  
  return <>
    <Component {...pageProps} />
    <Footer />
  </>
}