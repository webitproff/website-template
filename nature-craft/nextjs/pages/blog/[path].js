import SmallHeader from '../../components/SmallHeader'
import HeadTag from '../../components/HeadTag'

export const blogs = [
  {
    date: 'July 15, 2021', 
    description: 'Eaque necessitatibus labore neque vitae sit laborum, minus maiores.', 
    invert: true, 
    path: '1', 
    title: 'Ab nihil non sequi.',
    contents: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque adipisci consectetur rerum mollitia tempore dolores, commodi aut. Eveniet porro libero praesentium explicabo fuga aperiam. Fugit quasi ullam reiciendis totam culpa.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque ipsum hic doloremque nam omnis ea, ex laudantium vero aut!',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque adipisci consectetur rerum mollitia tempore dolores, commodi aut. Eveniet porro libero praesentium explicabo fuga aperiam. Fugit quasi ullam reiciendis totam culpa.',
    ]
  },
  {
    date: 'July 11, 2021', 
    description: 'Veritatis nemo nostrum porro doloribus velit!', 
    invert: false, 
    path: '2', 
    title: 'Lorem, ipsum.',
    contents: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque adipisci consectetur rerum mollitia tempore dolores, commodi aut. Eveniet porro libero praesentium explicabo fuga aperiam. Fugit quasi ullam reiciendis totam culpa.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque ipsum hic doloremque nam omnis ea, ex laudantium vero aut!',
    ]
  },
  {
    date: 'July 11, 2021', 
    description: 'Veritatis nemo nostrum porro doloribus velit!', 
    invert: false, 
    path: '3', 
    title: 'Lorem, ipsum.',
    contents: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque adipisci consectetur rerum mollitia tempore dolores, commodi aut. Eveniet porro libero praesentium explicabo fuga aperiam. Fugit quasi ullam reiciendis totam culpa.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque ipsum hic doloremque nam omnis ea, ex laudantium vero aut!',
    ]
  },
]

export default function Blog({ description, title, contents }){

  return <>
    <HeadTag title={title + ' - Blog'} />
    <SmallHeader back="blog" />
    
    <div className="uk-section uk-section-muted">
      <div className="uk-container uk-container-xsmall">
        <h1>
          {title}
        </h1>
        <p className="uk-text-large">
          {description}
        </p>
        {contents.map((content, index) => (
          <p key={index}>
            {content}
          </p>
        ))}
      </div>
    </div>
  </>
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