import React from 'react'

function CardNewsFeed({ children, url }) {
  return (
    <div className="block p-7 rounded-lg shadow-lg bg-gray-200 max-w-sm">{children}</div>
  )
}

export default CardNewsFeed