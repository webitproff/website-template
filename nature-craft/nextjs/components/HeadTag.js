import Head from 'next/head'

export default function HeadTag({ title }){

  return (
    <Head>
      <title>
        {title ? title + ' -' : ''} Nature Craft
      </title>
    </Head>
  )
}