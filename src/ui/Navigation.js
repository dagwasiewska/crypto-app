import React from "react";

function Navigation({ children }) {
  return (
    // <nav classNameName="bg-blue-300 w-full border-gray-200 px-2 sm:px-4 py-5 rounded dark:bg-gray-800">
    //   <div className="container flex flex-wrap justify-between items-center mx-auto">
    //     <div
    //       className="hidden w-full md:block md:w-auto"
    //       id="mobile-menu"
    //     >
    //       {children}
    //     </div>
    //   </div>
    // </nav>

    <nav className="shadow-md w-full fixed top-0 left0">
      <div className="md:flex bg white py-4">
        <div>
          <span>
          
          </span>
          Crypto page 
        </div>


        {children}
      </div>
    </nav>
  );
}

export default Navigation;
