
import React, { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";

function Products() {
  let [productsImage, setProductsImage] = useState(null);

  const client = new ApolloClient({
    uri: "http://localhost:3000/shop-api",
    cache: new InMemoryCache(),
  });


  useEffect(() => {
    fetch("http://localhost:3000/shop-api");
    client
      .query({
        query: gql`
          query {
            products(options: { take: 3 }) {
              items {
                id
                name
                description
              }
            }
          }
        `,
      })
      .then((response) => response.json())
      .then((data) => setProductsImage(data.message));
  }, []);

  return (
    <div className="Inventory">
      {productsImage && <img src={productsImage}></img>}
    </div>
  );
}

export default Products;
