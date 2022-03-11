import React from "react";

function Navigation({ children }) {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-blue-300 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        {children}
      </div>
    </nav>
  );
}

export default Navigation;
