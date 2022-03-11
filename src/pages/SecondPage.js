import React from 'react'
import NewsFeed from '../components/NewsFeed'
import Navigation from '../ui/Navigation'

function SecondPage() {
  return (
    <>
      <Navigation />
      <div>Second page</div>
      <NewsFeed />
    </>
  )
}

export default SecondPage