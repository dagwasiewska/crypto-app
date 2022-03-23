import React, { useState, useEffect } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

function Products() {
  const [productImageUrls, setProductImageUrls] = useState([]);

  const client = new ApolloClient({
    uri: "http://localhost:3000/shop-api",
    cache: new InMemoryCache(),
  });

  // when I have client -> then no need to fetch again because url is already there
  //first method client.query()
  //   then I pass object so ...({query: ....})
  const getProducts = () => {
    client
      .query({
        query: gql`
          query {
            products(options: { take: 3 }) {
              items {
                id
                name
                description
                assets {
                  source
                }
              }
            }
          }
        `,
      })
      .then((response) => {
        console.log(response.data.products.items)
        // map response to an array of images 'source'
        const productSources = response.data.products.items.map((product) => {
          if (product.assets.length > 0) {
            return product.assets[0].source;
          }

          return null;
        });

        // filtering out null from the productImages array
        const productImagesWithoutNull = productSources.filter(
          (image) => image !== null
        );
        console.log(productImagesWithoutNull)
        setProductImageUrls(productImagesWithoutNull);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="Inventory">
      {productImageUrls.map(url => {
        return <img key={url} src={url}></img>
      })}
    </div>
  );
}

export default Products;
