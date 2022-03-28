import React from "react";
import Navbar from "../components/Navbar"
import Paginate from "../components/Paginate";
import Products from "../components/Products";
import ReactPaginate from "react-paginate";

function Homepage() {
  return (
    <>
      <Navbar />
      <Products />
      {/* <div className="w-full h-full mt-32 mx-5 my-5 bg-blue-100 rounded py-32 self-center">
   
      </div> */}

      <ReactPaginate 
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      pageCount={10}
      marginPagesDisplayed={2}
      />

        
    
    </>
  );
}

export default Homepage;
