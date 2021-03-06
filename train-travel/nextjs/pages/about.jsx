export default function AboutPage(){

  return <>
    <div className="max-w-prose mx-auto">
      <p>
        <img className="w-full object-cover object-top h-96" src="https://images.pexels.com/photos/4555348/pexels-photo-4555348.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="Photo by ROMAN ODINTSOV from Pexels" />
      </p>
      <h1>
        About
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, amet placeat atque dolore eaque est quam maiores cupiditate recusandae provident itaque libero adipisci dolor. Iusto blanditiis ducimus doloribus perspiciatis tenetur!
        <a href="https://www.pexels.com/photo/optimistic-girl-leaning-out-from-wagon-exit-of-train-4555348/" target="_blank">
          Photo by ROMAN ODINTSOV from Pexels
        </a>
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, mollitia laborum. Molestias.
      </p>
    </div>
    <div className="max-w-screen-lg mx-auto text-right">
      <h4>
        Signature
      </h4>
    </div>
  </>
}

export function getStaticProps(){

  return {
    props: {
      title: 'About'
    }
  }
}