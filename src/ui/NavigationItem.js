import React from "react";

function NavigationItem({ children }) {
  return (
    // <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
      <ul className="md:flex md:items-center md:pb-0 pb-12">
        <li className="md:ml-8 md:my-0 my-7hover:text-indigo-600 duration-500">
          {children}
        </li>
      </ul>
    // </div>
  );
}

export default NavigationItem;
