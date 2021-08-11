import Head from 'next/head'

export default function Seo({ title, description, image, author="Lorem", date }){
  title += ' - Drink Taster'

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      <meta name="date" content={date} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image.src} />}
      <meta property="og:type" content="article" />
      <meta name="twitter:card" value="summary" />
      <meta name="twitter:creator" content={author} />
    </Head>
  )
}