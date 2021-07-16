import Layout from '../../components/Layout'
import { blogHeader } from './index'

export const blogs = [
  {
    date: 'July 15, 2021', 
    description: 'Eaque necessitatibus labore neque vitae sit laborum, minus maiores.', 
    invert: true, 
    path: '1', 
    title: 'Ab nihil non sequi.'
  },
  {
    date: 'July 11, 2021', 
    description: 'Veritatis nemo nostrum porro doloribus velit!', 
    invert: false, 
    path: '2', 
    title: 'Lorem, ipsum.'
  },
  {
    date: 'July 11, 2021', 
    description: 'Veritatis nemo nostrum porro doloribus velit!', 
    invert: false, 
    path: '3', 
    title: 'Lorem, ipsum.'
  },
  {
    date: 'July 11, 2021', 
    description: 'Veritatis nemo nostrum porro doloribus velit!', 
    invert: false, 
    path: '4', 
    title: 'Lorem, ipsum.'
  },
  {
    date: 'July 11, 2021', 
    description: 'Veritatis nemo nostrum porro doloribus velit!', 
    invert: false, 
    path: '5', 
    title: 'Lorem, ipsum.'
  },
]

export default function Blog({ description, title }){

  return (
    <Layout level={3} {...blogHeader} subtitle={title}>
      <div className="uk-container uk-container-xsmall">
        <h1>
          {title}
        </h1>
        <p className="uk-text-large">
          {description}
        </p>
        <p>
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
    paths: blogs.map(({ path }) => (
      { params: { path } }
    )),
    fallback: false
  }
}

export function getStaticProps({ params }){
  
  return {
    props: {
      ...blogs.find(({ path }) => path === params.path)
    }
  }
}