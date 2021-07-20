import Link from 'next/link'
import BlogCard from '../components/BlogCard'
import LearnCard from '../components/LearnCard'
import HeadTag from '../components/HeadTag'
import { blogs } from './blog/[path]'
import { learns } from './learn/[path]'

export default function HomePage(){

  return <>
    <HeadTag />
    
    <div className="uk-section uk-light uk-background-cover uk-background-fixed uk-background-blend-soft-light uk-background-secondary uk-section-large" style={{ backgroundImage: 'url(https://images.pexels.com/photos/6102217/pexels-photo-6102217.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}>
      <div className="uk-container uk-container-small">
        <div className="uk-flex uk-flex-right">
          <div className="uk-width-2-3">
            <h1 className="uk-heading-medium">
              Nature Craft
            </h1>
            <p className="uk-h3 uk-margin-top">
              Lorem ipsum dolor sit amet consectetur.
              <a href="https://www.pexels.com/photo/wooden-reindeer-placed-in-greenery-composition-6102217/" target="_blank">
                Photo by Laura James from Pexels
              </a>
            </p>
            <nav>
              <Link href="/learn">
                <a className="uk-button uk-button-secondary uk-button-large uk-margin-bottom uk-margin-right">
                  Learn
                </a>
              </Link>
              <Link href="/blog">
                <a className="uk-button uk-button-default uk-button-large uk-margin-bottom uk-margin-right">
                  Blog
                </a>
              </Link>
              <hr className="uk-hidden@s" />
              <a className="uk-button uk-button-text uk-button-large uk-margin-bottom uk-margin-right" uk-scroll="" href="#about">
                About
              </a>
              <a className="uk-button uk-button-text uk-button-large uk-margin-bottom uk-margin-right" uk-scroll="" href="#donate">
                Donate
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>

    <div className="uk-section uk-section-muted">
      <div className="uk-container uk-margin-large">
        <div uk-slider="">
          <ul className="uk-slider-items uk-grid-match uk-child-width-1-3@m uk-child-width-1-2@s" uk-grid="">
            {learns.slice(0,5).map((item, index) => (
              <li key={index}>
                <LearnCard {...item} />
              </li>
            ))}
          </ul>
          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
      </div>

      <div className="uk-flex-middle uk-margin-large" uk-grid="">
        <div className="uk-width-2-3@m">
          <div className="uk-flex uk-flex-middle uk-card uk-card-default uk-margin-right uk-margin-remove-right@m" id="about">
            <div className="uk-width-1-3 uk-card-media-left uk-height-large uk-background-cover" 
              style={{ backgroundImage: 'url(https://images.pexels.com/photos/6137913/pexels-photo-6137913.jpeg?auto=compress&cs=tinysrgb&w=1280)' }}
            ></div>
            <div className="uk-width-2-3 uk-card-body">
              <h2 className="uk-heading-small">
                About
              </h2>
              <p className="uk-h4 uk-margin-top">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id doloremque accusantium at cupiditate quaerat temporibus?
              </p>
              <p>
                <a href="https://www.pexels.com/photo/crop-woman-collecting-lilac-flowers-in-summer-garden-6137913/" target="_blank">
                  Photo by Follow my Instagram from Pexels
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
    </div>

    <div className="uk-background-muted">
      <div className="uk-container uk-container-xsmall uk-text-center" id="donate">
        <div className="uk-card uk-card-default uk-card-body">
          <h2 className="uk-heading-small">
            Donate
          </h2>
          <p className="uk-h4 uk-margin uk-margin-top">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id doloremque accusantium at cupiditate quaerat temporibus?
          </p>
          <a href="#" className="uk-icon-button uk-margin-right" uk-icon="icon: lifesaver; ratio: 2"></a>
          <a href="#" className="uk-icon-button" uk-icon="icon: credit-card; ratio: 2"></a>
          <hr />
          <h2>
            Supporters
          </h2>
          <p className="uk-text-lead uk-text-break uk-margin-top">
            <a className="uk-margin-right uk-margin-bottom">Air</a>
            <a className="uk-margin-right uk-margin-bottom">Earth</a>
            <a className="uk-margin-right uk-margin-bottom">Fire</a>
            <a className="uk-margin-right uk-margin-bottom">Water</a>
          </p>
        </div>
      </div>
    </div>
  </>
}