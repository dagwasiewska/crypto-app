import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar'
import SideNav from '../ui/SideNav'

function Logged() {
  const os = localStorage.getItem('os')

  console.log('OS: ', os)

  /*
  if (os === 'iOs') {
    // create ios share buttons
  } else if (os === 'Android') {
    // create android share buttons
  } else if (os === 'Windows Phone') {
    // create windows phone share buttons
  } else {
    // create desktop share buttons
  }
  */

  switch (os) {
    case 'iOS':
      // create ios share buttons
      break;
    case 'Android':
      // create android share buttons
      break;
    case 'Windows Phone':
      // create windows phone share buttons
      break;
    default:
      // create desktop share buttons
  }


  return (
 <>
 <Navbar />
 <SideNav />
 <About />
 </>
  )
}

export default Logged