import Layout from '../components/Layout'
import BlogCard from '../components/BlogCard'
import LearnCard from '../components/LearnCard'
import { blogs } from './blog/[path]'
import { learns } from './learn/[path]'

export const about = {
  image: {
    copy: 'Photo by Follow my Instagram from Pexels',
    link: 'https://www.pexels.com/photo/crop-woman-collecting-lilac-flowers-in-summer-garden-6137913/',
    src: 'https://images.pexels.com/photos/6137913/pexels-photo-6137913.jpeg?auto=compress&cs=tinysrgb&w=1280',
  },
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id doloremque accusantium at cupiditate quaerat temporibus?',
  path: '#about',
  title: 'About',
}

export default function HomePage(){
  const { image: { copy, link, src }, description, path, title } = about

  return (
    <Layout level={1} image={{
      copy: 'Photo by Laura James from Pexels',
      link: 'https://www.pexels.com/photo/wooden-reindeer-placed-in-greenery-composition-6102217/',
      src: 'https://images.pexels.com/photos/6102217/pexels-photo-6102217.jpeg?auto=compress&cs=tinysrgb&w=1920',
    }}>
      <div className="uk-container uk-margin-large">
        <div uk-slider="">
          <ul className="uk-slider-items uk-grid-match uk-child-width-1-3@m uk-child-width-1-2@s" uk-grid="">

            {learns.slice(0,6).map((item, index) => (
              <li key={`learn-${index}`}>
                <LearnCard {...item} />
              </li>
            ))}

          </ul>
          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
      </div>
      <div className="uk-flex-middle uk-margin-large" uk-grid="">
        <div className="uk-width-2-3@m">
          <div className="uk-flex uk-flex-middle uk-card uk-card-default uk-margin-right uk-margin-remove-right@m" id={path.substring(1)}>
            <div className="uk-width-1-3 uk-card-media-left uk-height-large uk-background-cover" 
              style={{ backgroundImage: `url(${src})` }}
            ></div>
            <div className="uk-width-2-3 uk-card-body">
              <h2 className="uk-heading-small">
                {title}
              </h2>
              <p className="uk-h4 uk-margin-top">
                {description}
              </p>
              <p>
                <a href={link} target="_blank">
                  {copy}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="uk-width-1-3@m">
          <div className="uk-child-width-1-1" uk-grid="">

            {blogs.slice(0,2).map((item, index) => (
              <div key={`blog-${index}`}>
                <BlogCard {...item} />
              </div>
            ))}

          </div>
        </div>
      </div>
    </Layout>
  )
}