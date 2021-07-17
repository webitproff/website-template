import Link from 'next/link'
import HeadTag from '../../components/HeadTag'

export const ourWorks = [
  {
    image: {
      copy: 'Photo by Rachel Claire from Pexels',
      link: 'https://www.pexels.com/photo/interior-details-of-modern-bar-with-wooden-furniture-and-arched-wall-5490909/',
      src: 'https://images.pexels.com/photos/5490909/pexels-photo-5490909.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    path: '1',
    title: 'House with Arched Wall',
  },
  {
    image: {
      copy: 'Photo by Kien Tran from Pexels',
      link: 'https://www.pexels.com/photo/hotel-house-table-luxury-5814952/',
      src: 'https://images.pexels.com/photos/5814952/pexels-photo-5814952.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    path: '2',
    title: 'Hotel House with Table Luxury',
  },
  {
    image: {
      copy: 'Photo by Rachel Claire from Pexels',
      link: 'https://www.pexels.com/photo/interior-details-of-modern-bar-with-wooden-furniture-and-arched-wall-5490909/',
      src: 'https://images.pexels.com/photos/5490909/pexels-photo-5490909.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    path: '3',
    title: 'House with Arched Wall',
  },
  {
    image: {
      copy: 'Photo by Kien Tran from Pexels',
      link: 'https://www.pexels.com/photo/hotel-house-table-luxury-5814952/',
      src: 'https://images.pexels.com/photos/5814952/pexels-photo-5814952.jpeg?auto=compress&cs=tinysrgb&w=1280',
    },
    path: '4',
    title: 'Hotel House with Table Luxury',
  },
]

export default function OurWork({ image: { copy, link, src }, title }){

  return <>
    <HeadTag title={title + '| Our Works'} />

    <div className="uk-section uk-section-muted" uk-scrollspy="target: > div; cls: uk-animation-fade; repeat: true">
      <nav className="uk-container uk-text-center">
        <Link href="/our-work">
          <a className="uk-icon-link uk-margin-bottom uk-margin-right" uk-icon="icon: reply; ratio: 2"></a>
        </Link>
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

    <div className="uk-section uk-section-large" uk-scrollspy="cls: uk-animation-fade; repeat: true">
      <div className="uk-container uk-container-small">
        <h2 className="uk-heading-medium">
          {title}
        </h2>
        <img src={src} alt={copy} />
        <a className="uk-link-muted" href={link} target="_blank">
          {copy}
        </a>
      </div>
    </div>
  </>
}

export function getStaticPaths(){
  
  return {
    paths: ourWorks.map(({ path }) => (
      { params: { path } }
    )),
    fallback: false
  }
}

export function getStaticProps({ params }){
  
  return {
    props: {
      ...ourWorks.find(({ path }) => path === params.path)
    }
  }
}