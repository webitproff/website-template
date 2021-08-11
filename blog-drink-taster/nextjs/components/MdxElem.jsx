export default {
  a: ({ children, href }) => {

    if (href.startWith('/')){
      return (
        <Link href={href}>
          <a>
            {children}
          </a>
        </Link>
      )
    } else if (href.startWith('#')){
      return (
        <a href={href}>
          {children}
        </a>
      )
    }
    
    return (
      <a href={href} target="_blank">
        {children}
      </a>
    )
  },
}