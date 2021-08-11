import Seo from '../../components/Seo'
import Image from 'next/image'
import { getAllContents } from '../../getContent'

export default function BlogIndexPage({ title, description, image, blogs }){

  return <>
    <Seo title={title} description={description} image={image} />
    <div className="">
      <Image src={image.src} width={image.width} height={image.height} />
    </div>
  </>
}

export function getStaticProps({  }){

  return {
    props: {
      title: 'Blog. Lorem.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, officiis. Neque, molestias! Laborum, dolor necessitatibus! Repudiandae laborum unde dolorem dolorum dicta cumque optio! Neque perspiciatis debitis quas suscipit, esse vel.',
      image: {
        src: '/static/blog/hot-chocolate-1782623_1280.jpg',
        width: 1280,
        height: 853,
      },

      blogs: getAllContents('blog'),
    },
  }
}