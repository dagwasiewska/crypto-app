import React from 'react'


function Link({ children, url }) {
  return (
    <a href={url} className="px-4 py-2 border-b hover:text-blue-600 cursor-pointer mx-auto">{children}</a>
    // <a href={article.url}><p>{article.title}</p></a>
    // children can also be label, other argument
  )
}

export default Link