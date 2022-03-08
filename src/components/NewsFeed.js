import React from 'react';
import { useEffect, useState } from "react"
import axios from "axios"
import Title from "../ui/Title"
import Link from "../ui/Link"
import CardNewsFeed from '../ui/CardNewsFeed';


const NewsFeed = () => {
  const [articles, setArticles] = useState(null)

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://crypto-news-live3.p.rapidapi.com/news",
      headers: {
        "x-rapidapi-host": "crypto-news-live3.p.rapidapi.com",
        "x-rapidapi-key": "e3999d5757msh74ea6bad084da42p18bcd1jsn88a5ceb22f7d",
      },
    }

    axios
      .request(options)
      .then((response) => {
        console.log(response.data)
        setArticles(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  console.log(articles);

  const first7Articles = articles?.slice(0,4)

  return (
   <CardNewsFeed>
      <Title>News Feed</Title>
        {first7Articles?.map((article, _index) => (
          <div key={_index}>
            {/* <a href={article.url}><p>{article.title}</p></a> */}
            <Link url={article.url}><p>{article.title}</p></Link>
          </div>))}
   </CardNewsFeed>
  )
}

export default NewsFeed
