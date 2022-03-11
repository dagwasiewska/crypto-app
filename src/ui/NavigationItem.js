import React from 'react'

function NavigationItem({ children }) {
  return (
    <div className="container-fluid">
      <li className="self-center max-w-sm mx-10 my-3 text-xl text-black hover:text-white">{children}</li>
    </div>
  )
}

export default NavigationItem