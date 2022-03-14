import React from 'react'
import CurrencyConverter from '../components/CurrencyConverter'
import Navbar from '../components/Navbar'

function ThirdPage() {
  return (
    <>
    <Navbar />
    <div className="flex flex-row mx-20 my-20">
        <div className="flex flex-row mx-20 my-20 ">
          <CurrencyConverter />
        </div>
      </div>
    </>
  )
}

export default ThirdPage