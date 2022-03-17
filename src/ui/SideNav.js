import React from 'react'
import NavigationItem from './NavigationItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SideNav() {
  return (
    <aside className="w-64 py- pl-0" aria-label="Sidebar">
      <div className="h-screen py-10 rounded my-32  px-3 bg-gray-50 bg-gray-200">
       <NavigationItem />
       <NavigationItem additionalCss="py-3 text-black hover:text-blue-600 cursor-pointer"> Inbox</NavigationItem>
       <FontAwesomeIcon icon="fa-solid fa-inbox" />
       <NavigationItem additionalCss="py-3 text-black hover:text-blue-600 cursor-pointer"> Notifications</NavigationItem>
       <NavigationItem additionalCss="py-3 text-black hover:text-blue-600 cursor-pointer"> Archive</NavigationItem>
       <NavigationItem additionalCss="py-3 text-black hover:text-blue-600 cursor-pointer"> Wallet</NavigationItem>
       <NavigationItem additionalCss="py-3 text-black hover:text-blue-600 cursor-pointer"> Settings</NavigationItem>
       <NavigationItem additionalCss="py-3 text-black hover:text-blue-600 cursor-pointer"> Help</NavigationItem>
      </div>
    </aside>
  )
}

export default SideNav