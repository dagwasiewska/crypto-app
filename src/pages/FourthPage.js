import React from "react";
import NewsFeed from "../components/NewsFeed";
import CurrencyConverter from "../components/CurrencyConverter";
import Navbar from "../components/Navbar";

function FourthPage() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row mx-20 my-20">
        <div className="flex flex-row mx-20 my-20 ">
          <NewsFeed />
          <CurrencyConverter />
        </div>
      </div>
      <div className="table-footer-group">Hello</div>
    </>
  );
}

export default FourthPage;
