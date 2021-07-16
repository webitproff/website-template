import Link from 'next/link'
import WorkTile from '../../components/WorkTile'
import { ourWorks } from './[path]'

export default function OurWorkPage(){

  return <>

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