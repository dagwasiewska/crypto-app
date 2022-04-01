import React from 'react'

function Card({ children, additionalcss }) {
  const className=`block  content-center p-16 self-center rounded-lg shadow-2xl my-10 ${additionalcss || ''}`
  return (
    <div className={className}>{children}</div>
  )
}

export default Card