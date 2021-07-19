import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }){
  
  return (
    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
      
      <Component {...pageProps} />

    </div>
  )
}