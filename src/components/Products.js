import React, { useState, useEffect } from "react"
import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import Card from "../ui/Card"
import Link from "../ui/Link"
import Title from "../ui/Title"
import ReactPaginate from "react-paginate"

function Products() {
  const [produkty, setProdukty] = useState([])
  const [pageCount, setPageCount] = useState(0)
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)
  const itemsPerPage = 5
  const [totalHits, setTotalHits] = useState(55)

  const client = new ApolloClient({
    uri: "http://localhost:3000/shop-api",
    cache: new InMemoryCache(),
  })

  // zamiast take i skip zamienic z id jak bede wrzucac produkty, jesli w liczbie mnogiej nie bedzie dzialac to w pojedynczej sprobowac 
  const getProdukty = (take, skip) => {
    console.log(take, skip, '...')
    client
      .query({
        query: gql`
          query {
            products(options: { take: ${take}, skip: ${skip} }) {
              totalItems
              items {
                id
                description
                name
                variants {
                  productId
                  price
                }
                assets {
                  source
                }
              }
            }
          }
        `,
      })
      .then((response) => {
        console.log(response.data.products.totalItems)
        const productData = response.data.products.items.map((produkt) => {
          // odpowiedz z API odnosnie danych, items -> pozniej iteruje 'map' zeby uzyskac nowa tablice
          return {
            id: produkt.id,
            name: produkt.name,
            description: produkt.description,
            imageUrl: produkt.assets[0].source,
            price: produkt.variants[0].price,
            // obiekty zawsze w dziwnych nawiasach
          }
        })
        console.log(productData)
        setTotalHits(response.data.products.totalItems)
        setProdukty(productData)
      })
  }

  useEffect(() => {
    getProdukty(itemsPerPage, 0)
  }, [])

  function Items({ produkty }) {
    return (
      <div className="grid grid-cols-4 gap-4">
        {produkty &&
          produkty.map((produkt) => {
            return (
              <div className="space-x-4">
                <Card
                  key={produkt.id}
                  additionalcss="h-96 mt-36 grid gap-4 bg-purple-100 mr-10"
                >
                  <Title>{produkt.name}</Title>
                  <img
                    className="max-w-xs max-h-40 mx-auto"
                    src={produkt.imageUrl}
                  ></img>
                  <div className="mx-auto text-bold">
                    Price: {produkt.price} USD
                  </div>

                  <Link>CLICK HERE</Link>
                </Card>
              </div>
            )
          })}
      </div>
    )
  }

  // We start with an empty list of items.

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    getProdukty(itemsPerPage, itemOffset)
    // najpierw bylo endoffset i zamienilismy to na items perpage zeby pokazywalo te sama liczbe na stronie, wczesniej cos nie dzialalo i pokazywalo bledna liczbe produktow 
    setPageCount(Math.ceil(totalHits / itemsPerPage))
  }, [itemOffset, itemsPerPage])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % totalHits
    console.log(newOffset)
    setItemOffset(newOffset)
  }

  console.log(totalHits)

  return (
    <>
      <Items produkty={produkty} className="space-x-4 " />
      <ReactPaginate
        className="flex flex-wrap w-full content-center bg-blue-200 absolute mb-0 px-8 self-end"
        pageClassName="grid grid-cols-1 py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        nextClassName="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        previousClassName="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        breakLabel="..."
        breakClassName="py-2 px-3 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  )
}

export default Products
