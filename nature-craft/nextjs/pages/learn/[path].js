import SmallHeader from '../../components/SmallHeader'
import HeadTag from '../../components/HeadTag'

export const learns = [
  {
    image: {
      copy: 'Photo by Juan Vargas from Pexels',
      link: 'https://www.pexels.com/photo/figurine-of-cute-owl-on-table-5922834/',
      src: 'https://images.pexels.com/photos/5922834/pexels-photo-5922834.jpeg?auto=compress&cs=tinysrgb&w=640',
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    invert: true,
    path: '1',
    title: 'Figurine of cute owl on table',
    steps: [
      {
        imageSrc: 'https://images.pexels.com/photos/5922834/pexels-photo-5922834.jpeg?auto=compress&cs=tinysrgb&w=640',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi harum obcaecati id.'
      },
      {
        imageSrc: 'https://images.pexels.com/photos/5922834/pexels-photo-5922834.jpeg?auto=compress&cs=tinysrgb&w=640',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid veritatis eligendi adipisci, enim fugiat assumenda.'
      },
    ]
  },
  {
    image: {
      copy: 'Photo by Ioana Motoc from Pexels',
      link: 'https://www.pexels.com/photo/creative-eggs-in-nest-on-table-4346320/',
      src: 'https://images.pexels.com/photos/4346320/pexels-photo-4346320.jpeg?auto=compress&cs=tinysrgb&w=640',
    },
    description: 'Eveniet delectus doloribus modi saepe perferendis.',
    invert: false,
    path: '2',
    title: 'Creative eggs in nest on table',
    steps: [
      {
        imageSrc: 'https://images.pexels.com/photos/4346320/pexels-photo-4346320.jpeg?auto=compress&cs=tinysrgb&w=640',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid veritatis eligendi adipisci, enim fugiat assumenda.'
      },
    ]
  },
  {
    image: {
      copy: 'Photo by Juan Vargas from Pexels',
      link: 'https://www.pexels.com/photo/figurine-of-cute-owl-on-table-5922834/',
      src: 'https://images.pexels.com/photos/5922834/pexels-photo-5922834.jpeg?auto=compress&cs=tinysrgb&w=640',
    },
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    invert: false,
    path: '3',
    title: 'Figurine of cute owl on table',
    steps: [
      {
        imageSrc: 'https://images.pexels.com/photos/5922834/pexels-photo-5922834.jpeg?auto=compress&cs=tinysrgb&w=640',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi harum obcaecati id.'
      },
      {
        imageSrc: 'https://images.pexels.com/photos/5922834/pexels-photo-5922834.jpeg?auto=compress&cs=tinysrgb&w=640',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid veritatis eligendi adipisci, enim fugiat assumenda.'
      },
    ]
  },
  {
    image: {
      copy: 'Photo by Ioana Motoc from Pexels',
      link: 'https://www.pexels.com/photo/creative-eggs-in-nest-on-table-4346320/',
      src: 'https://images.pexels.com/photos/4346320/pexels-photo-4346320.jpeg?auto=compress&cs=tinysrgb&w=640',
    },
    description: 'Eveniet delectus doloribus modi saepe perferendis.',
    invert: false,
    path: '4',
    title: 'Creative eggs in nest on table',
    steps: [
      {
        imageSrc: 'https://images.pexels.com/photos/4346320/pexels-photo-4346320.jpeg?auto=compress&cs=tinysrgb&w=640',
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid veritatis eligendi adipisci, enim fugiat assumenda.'
      },
    ]
  },
]

export default function Learn({ image: { copy, link, src }, description, title, steps }){

  return <>
    <HeadTag title={title + ' - Learn'} />
    <SmallHeader back="learn" />

    <div className="uk-section uk-section-muted">
      <div className="uk-container uk-container-xsmall">
        <h1>
          {title}
        </h1>
        <p className="uk-text-large">
          {description}
        </p>
        <div className="uk-cover-container uk-height-medium">
          <img src={src} alt={copy} uk-cover="" />
        </div>
        <p>
          <a href={link} target="_blank">
            {copy}
          </a>
        </p>
        <h4>
          How to craft
        </h4>
        <ul className="uk-list uk-list-decimal">
          {steps.map(({ imageSrc, text }, index) => (
            <li key={index} className="uk-margin-large">
              <span className="uk-display-block uk-margin">
                {text}
              </span>
              <img src={imageSrc} className="uk-height-max-medium uk-align-center" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
}

export function getStaticPaths(){
  
  return {
    paths: learns.map(({ path }) => (
      { params: { path } }
    )),
    fallback: false
  }
}

export function getStaticProps({ params }){
  
  return {
    props: {
      ...learns.find(({ path }) => path === params.path)
    }
  }
}