import React from 'react'

function CardNewsFeed({ children, url }) {
  return (
    <div className="block p-6 rounded-lg shadow-lg bg-pink max-w-sm">{children}</div>
  )
}

export default CardNewsFeed