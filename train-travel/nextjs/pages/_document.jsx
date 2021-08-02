import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {

  render(){
    return (
      <Html lang="en">
        <Head />
        <body className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl !max-w-none px-4 dark:!prose-light">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}