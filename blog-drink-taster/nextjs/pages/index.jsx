import Seo from '../components/Seo'
import Image from 'next/image'
import { getAllContents } from '../getContent'

export default function IndexPage({ title, description, image, blogs }){

  return <>
    <Seo title={title} description={description} image={image} />
    <div className="md:flex items-center max-w-screen-md mx-auto">
      <h1 className="text-3xl p-4">
        {title}
      </h1>
      <p className="text-xl p-4">
        {description}
      </p>
    </div>
    <div className="max-w-screen-md mx-auto">
      <Image src={image.src} width={image.width} height={image.height} />
    </div>
    <div className="max-w-screen-md mx-auto">
      {blogs.map(({ title, description, image, date }, index) => (
        <div key={`blog-${index}`}>
          <h2 className="text-2xl font-semibold my-6">
            {title}
          </h2>
          <p className="text-lg italic">
            {date}
          </p>
          <p className="text-lg my-4">
            {description}
          </p>
        </div>
      ))}
    </div>
  </>
}

export function getStaticProps({  }){

  return {
    props: {
      title: 'Home. Lorem ipsum dolor sit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero error reprehenderit, expedita enim, praesentium animi natus modi odio ipsam nemo, quisquam voluptates? Ipsum voluptas necessitatibus culpa. Accusamus eveniet eaque cum.',
      image: {
        src: '/static/coffee-2151200_1280.jpg',
        width: 1280,
        height: 853,
      },

      blogs: getAllContents('blog').slice(0,4),
    },
  }
}