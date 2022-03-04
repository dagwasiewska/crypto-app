import React from 'react'


function Link({ children, url }) {
  return (
    <a href={url}>{children}</a>
    // <a href={article.url}><p>{article.title}</p></a>
    // children can also be label, other argument
  )
}

export default Link