import React from 'react'
import NavigationItem from './NavigationItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox, faBell, faClockRotateLeft, faWallet, faGear, faCircleInfo  } from '@fortawesome/free-solid-svg-icons'

function SideNav() {
  return (
    <aside className="w-64 py- pl-0" aria-label="Sidebar">
      <div className="h-screen py-10 rounded my-32  px-3 bg-gray-50 bg-gray-200">
       <NavigationItem />
       <NavigationItem additionalCss="py-3 text-black hover:text-blue-600 cursor-pointer"><FontAwesomeIcon icon={faInbox} className="text-indigo-700 px-2"/>  Inbox</NavigationItem>
       
       <NavigationItem additionalCss="py-3 text-black hover:text-blue-600 cursor-pointer"> <FontAwesomeIcon icon={faBell} className="text-indigo-700 px-2"/>Notifications</NavigationItem>
       <NavigationItem additionalCss="py-3 text-black hover:text-blue-600 cursor-pointer"> <FontAwesomeIcon icon={faClockRotateLeft} className="text-indigo-700 px-2" />Archive</NavigationItem>
       <NavigationItem additionalCss="py-3 text-black hover:text-blue-600 cursor-pointer"> <FontAwesomeIcon icon={faWallet} className="text-indigo-700 px-2" />Wallet</NavigationItem>
       <NavigationItem additionalCss="py-3 text-black hover:text-blue-600 cursor-pointer"> <FontAwesomeIcon icon={faGear} className="text-indigo-700 px-2" />Settings</NavigationItem>
       <NavigationItem additionalCss="py-3 text-black hover:text-blue-600 cursor-pointer"> <FontAwesomeIcon icon={faCircleInfo} className="text-indigo-700 px-2" /> Help</NavigationItem>
      </div>
    </aside>
  )
}

export default SideNav