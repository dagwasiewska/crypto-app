import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Card from "../ui/Card";
import Link from "../ui/Link";

function Descriptions() {
  const [opisyPodZdj, setOpisyPodZdj] = useState([]);

  const client = new ApolloClient({
    uri: "http://localhost:3000/shop-api",
    cache: new InMemoryCache(),
  });

  const getDescriptions = () => {
    client
      .query({
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
        console.log(response.data.products.items.description);
        const something = response.data.products.items.map((items) => {
          if (items.description && true) {
            return items.description.substring(0, 30);
          }
        });

        setOpisyPodZdj(something);
      });
  };

  useEffect(() => {
    getDescriptions();
  });

  return (
    <Card additionalcss="w-full text-center bg-white self-center my-0">
      <div className="mx-auto w-full">
        <div>{opisyPodZdj}</div>
        <Link>CLICK HERE</Link>
      </div>
    </Card>
  );
}

export default Descriptions;
