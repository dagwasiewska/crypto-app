import React from "react"
import Navbar from "../components/Navbar"
import NewsFeed from "../components/NewsFeed"
import { useParams } from "react-router-dom"

function SecondPage() {
  let { id } = useParams()
  console.log(id)
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-row mx-20 my-20">
        <div className="flex flex-row mx-20 my-20 ">
          <NewsFeed />
        </div>
      </div>
    </>
  )
}

export default SecondPage
