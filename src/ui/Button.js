import React from 'react'

function Button({ children, onClick }) {
  return (
    <div className="flex space-x-2 justify-center">    
      <button type="button" className="self-center px-10 py-3 mx-10 my-5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      onClick={onClick}>{children}</button>
      </div>
  )
}

export default Button