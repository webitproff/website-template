import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render(){
    return (
      <Html>
        <Head />
        <body className="bg-site-image bg-cover text-gray-50 bg-blend-soft-light bg-gray-900 min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
