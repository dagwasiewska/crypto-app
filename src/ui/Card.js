import React from 'react'

function Card({ children, additionalcss }) {
  const className=`block  content-center p-12 self-center rounded-lg shadow-2xl bg-gray-200 max-w-sm mx-20 my-10 ${additionalcss || ''}`
  return (
    <div className={className}>{children}</div>
  )
}

export default Card