import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Card from "../ui/Card";
import Link from "../ui/Link";

function Descriptions() {
  const [produkty, setProdukty] = useState([]);

  const client = new ApolloClient({
    uri: "http://localhost:3000/shop-api",
    cache: new InMemoryCache(),
  });

  const getProdukty = () => {
    client
      .query({
        query: gql`
          query {
            products(options: { take: 3 }) {
              items {
                id
                description
                name
                assets {
                  source
                }
              }
            }
          }
        `,
      })
      .then((response) => {
        console.log(response.data.products);
        const productData = response.data.products.items.map((produkt) => {
          // odpowiedz z API odnosnie danych, items -> pozniej iteruje 'map' zeby uzyskac nowa tablice
          return {
            id: produkt.id,
            name: produkt.name,
            description: produkt.description,
            imageUrl: produkt.assets[0].source,
            // obiekty zawsze w dziwnych nawiasach
          };
        });
        console.log(productData);
        setProdukty(productData);
      });
  };

  useEffect(() => {
    getProdukty();
  }, []);


  // usunac products.js i description.js jest teraz lista produktow czyli name, description, itd..

  // Prices

  return (
    <>
      {produkty.map((produkt) => {
        return (
          <Card
            key={produkt.id}
            additionalcss="w-full text-center bg-white self-center my-0"
          >
            <div>{produkt.name}</div>
            <img src={produkt.imageUrl}></img>

            <Link>CLICK HERE</Link>
          </Card>
        );
      })}
    </>
  );
}

export default Descriptions;
