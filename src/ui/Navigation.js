import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
      
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
          {/* <FontAwesomeIcon icon="fa-brands fa-monero" /> */}
          </span>
          Crypto page 
        </div>


        {children}
      </div>
    </nav>
  );
}

export default Navigation;
