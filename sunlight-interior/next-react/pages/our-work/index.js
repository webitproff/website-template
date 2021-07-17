import Link from 'next/link'
import WorkTile from '../../components/WorkTile'
import HeadTag from '../../components/HeadTag'
import { ourWorks } from './[path]'

export default function OurWorkPage(){

  return <>
    <HeadTag title="Our Works" />

    <div className="uk-section uk-section-secondary" uk-scrollspy="target: > div; cls: uk-animation-fade; repeat: true">
      <nav className="uk-container uk-text-center">
        <Link href="/">
          <a className="uk-icon-link uk-margin-bottom uk-margin-right" uk-icon="icon: home; ratio: 2"></a>
        </Link>
        <Link href="/#about">
          <a className="uk-button uk-button-default uk-margin-bottom uk-margin-right">
            About
          </a>
        </Link>
        <Link href="/#contact">
          <a className="uk-button uk-button-default uk-margin-bottom uk-margin-right">
            Contact
          </a>
        </Link>
      </nav>
    </div>

    <div className="uk-grid-match uk-grid-collapse" uk-grid="" uk-scrollspy="target: > div; cls: uk-animation-fade; repeat: true">
      {ourWorks.map(({ image, path, title }, index) => (
        <div className="uk-width-1-1 uk-width-1-2@s" key={index}>
          <WorkTile image={image} title={title}>
            <Link href={`/our-work/${path}`}>
              <a className="uk-button uk-button-secondary uk-button-large uk-margin-small-left">
                See
              </a>
            </Link>
          </WorkTile>
        </div>
      ))}
    </div>
  </>
}