import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Card from "../ui/Card";

function Descriptions() {
  const [opisyPodZdj, setOpisyPodZdj] = useState([]);

  const client = new ApolloClient({
    uri: "http://localhost:3000/shop-api",
    cache: new InMemoryCache(),
  });

  const getDescriptions = () => {
    client.query({
      query: gql`
        query {
          products(options: { take: 3 }) {
            items {
              description
            }
          }
        }
      `,
    })
    .then((response) => {
      console.log(response.data.products.items[0].description)
      const something = response.data.products.items.map((items) => {
        if (items.description && true) {
          return items.description
        }
      })
      
      setOpisyPodZdj(something)
    })
  }

  useEffect(() => {
    getDescriptions()
  })



  return (
    <Card >

      <div>{opisyPodZdj}</div>;
    </Card>
  )
}

export default Descriptions;
