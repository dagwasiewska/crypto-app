import React from "react";

function NavigationItem({ children }) {
  return (
    <div className="container-fluid">
      <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
        <li className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page">
          {children}
        </li>
      </ul>
    </div>
  );
}

export default NavigationItem;
