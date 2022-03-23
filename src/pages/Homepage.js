import React from "react";
import Descriptions from "../components/Descriptions";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

function Homepage() {
  return (
    <>
      <Navbar />
      <Products />
      <Descriptions />
      <div className="w-full h-full mt-32 mx-5 my-5 bg-blue-100 rounded py-32 self-center">
   
      </div>
      <div className="w-full h-full mt-32 mx-5 my-5 bg-blue-100 rounded py-32 self-center"></div>
      <div className="w-full h-full mt-32 mx-5 my-5 bg-blue-100 rounded py-32 self-center"></div>
      <div className="w-full mt-32 mx-5 my-5 bg-blue-100 rounded py-32 self-center">
        
      </div>
    </>
  );
}

export default Homepage;
