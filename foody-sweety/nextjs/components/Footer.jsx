
export default function Footer(){

  return (
    <footer className="p-4 sm:p-8 text-center max-w-screen-lg mx-auto">
      <a href="https://unsplash.com/photos/5f0QAmE7I3Q" target="_blank">
        Photo by Grace Ho on Unsplash
      </a>
      <p className="text-xl my-6">
        <a className="mx-auto inline-block p-2" href="https://github.com/zummon/website-template" target="_blank">
          zummon
        </a>
        <a className="mx-auto inline-block p-2" href="https://tailwindcss.com/" target="_blank">
          Tailwind CSS
        </a>
        <a className="mx-auto inline-block p-2" href="https://unsplash.com/" target="_blank">
          Unsplash
        </a>
        <a className="mx-auto inline-block p-2" href="https://fontawesome.com/" target="_blank">
          Font Awesome
        </a>
      </p>
      <p className="text-xl">
        <a className="mx-auto inline-block p-2" href="#">
          <i className="fab fa-facebook"></i>
        </a>
        <a className="mx-auto inline-block p-2" href="#">
          <i className="fab fa-github"></i>
        </a>
        <a className="mx-auto inline-block p-2" href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="mx-auto inline-block p-2" href="#">
          <i className="fab fa-youtube"></i>
        </a>
      </p>
    </footer>
  )
}