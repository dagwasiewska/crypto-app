import React from 'react'

function Card({ children, additionalcss }) {
  const className=`block p-12 rounded-lg shadow-2xl bg-gray-200 max-w-sm ${additionalcss || ''}`
  return (
    <div className={className}>{children}</div>
  )
}

export default Card