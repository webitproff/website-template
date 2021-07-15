import Layout from '../../components/Layout'
import { learnHeader } from './index'

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
    title: 'Figurine of cute owl on table'
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
    title: 'Creative eggs in nest on table'
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
    title: 'Figurine of cute owl on table'
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
    title: 'Creative eggs in nest on table'
  },
]

export default function Learn({ image: { copy, link, src }, description, title }){

  return (
    <Layout level={3} {...learnHeader} subtitle={title}>
      <div className="uk-container uk-container-xsmall">
        <h1>
          {title}
        </h1>
        <p className="uk-text-large">
          {description}
        </p>
        <img src={src} alt={copy} />
        <p>
          <a href={link} target="_blank">
            {copy}
          </a>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam at repellat odit quasi nostrum animi iure ab quis pariatur voluptates, tenetur fugit voluptatum enim dolorum veritatis expedita! Iusto pariatur natus delectus saepe modi laborum unde ex a assumenda neque enim possimus, nulla repudiandae iste, iure rem soluta numquam aperiam 
          <a>
            necessitatibus
          </a>
          ?
        </p>
        <h4>
          List
        </h4>
        <ul className="uk-list uk-list-decimal">
          <li>
            List item 1
          </li>
          <li>
            List 
            <a>
              item 2
            </a>
          </li>
          <li>
            List item 3
          </li>
        </ul>
      </div>
    </Layout>
  )  
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