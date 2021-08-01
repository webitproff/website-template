export const items = [
  {
    imageCopy: "Photo by Mick Haupt on Unsplash",
    imageLink: "https://unsplash.com/photos/tJefy_Vu7Po",
    imageSrc: "https://source.unsplash.com/tJefy_Vu7Po",
    title: "Compass",
    path: "compass"
  },
  {
    imageCopy: "Photo by Florian Klauer on Unsplash",
    imageLink: "https://unsplash.com/photos/mk7D-4UCfmg",
    imageSrc: "https://source.unsplash.com/mk7D-4UCfmg",
    title: "Typing machine",
    path: "typing-machine"
  },
  {
    imageCopy: "Photo by Ripple Qian on Unsplash",
    imageLink: "https://unsplash.com/photos/BdvX-f_dJOk",
    imageSrc: "https://source.unsplash.com/BdvX-f_dJOk",
    title: "Lamp",
    path: "lamp"
  },
  {
    imageCopy: "Photo by Egor Myznik on Unsplash",
    imageLink: "https://unsplash.com/photos/CdRIW3QRdE4",
    imageSrc: "https://source.unsplash.com/CdRIW3QRdE4",
    title: "Door bell",
    path: "door-bell"
  },
  {
    imageCopy: "Photo by Adolfo Félix on Unsplash",
    imageLink: "https://unsplash.com/photos/RTEbHyyZtnU",
    imageSrc: "https://source.unsplash.com/RTEbHyyZtnU",
    title: "Clothes maker",
    path: "clothes-maker"
  },
]

export default function ItemPage({ imageCopy, imageLink, imageSrc, title }){
  
  return <>
    <div className="uk-container uk-container-small uk-background-muted">
      <div className="uk-padding">
        <h1>
          {title}
        </h1>
        <img className="uk-margin-auto-left uk-margin-auto-right uk-display-block" src={imageSrc} alt={imageCopy} />
        <a href={imageLink} target="_blank">
          {imageCopy}
        </a>
      </div>
    </div>
  </>
}

export function getStaticPaths(){
  
  return {
    paths: items.map(({ path }) => ({ 
      params: { item: path }
    })),
    fallback: false
  }
}
export async function getStaticProps({ params: { item } }){
  

  return {
    props: {
      ...items.find(({ path }) => path === item)
    }
  }
}