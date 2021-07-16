import Layout from '../../components/Layout'
import BlogCard from '../../components/BlogCard'
import { blogs } from './[path]'

export const blogHeader = {
  image: {
    copy: 'Photo by Mathias P.R. Reding from Pexels',
    link: 'https://www.pexels.com/photo/decorative-cage-with-pine-cones-5483826/',
    src: 'https://images.pexels.com/photos/5483826/pexels-photo-5483826.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  description: 'Lorem ipsum dolor sit amet consectetur.',
  path: 'blog',
  title: 'Blog',
}

export default function BlogPage(){
  
  return (
    <Layout level={2} {...blogHeader}>
      <div className="uk-container">
        <div className="uk-child-width-1-2@m" uk-grid="masonry: true">

          {blogs.map((item, index) => (
            <div key={index}>
              <BlogCard {...item} />
            </div>
          ))}

        </div>
      </div>
    </Layout>
  )
}