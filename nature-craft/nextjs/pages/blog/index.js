import HeadTag from '../../components/HeadTag'
import MediumHeader from '../../components/MediumHeader'
import BlogCard from '../../components/BlogCard'
import { blogs } from './[path]'

export default function BlogPage(){
  
  return <>
    <HeadTag title="Blog" />
    <MediumHeader title="Blog" description="Lorem ipsum dolor sit amet consectetur." />

    <div className="uk-section uk-section-muted">
      <div className="uk-container">
        <div className="uk-child-width-1-2@m" uk-grid="masonry: true">

          {blogs.map((item, index) => (
            <div key={index}>
              <BlogCard {...item} />
            </div>
          ))}

        </div>
      </div>
    </div>
  </>
}