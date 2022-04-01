// import React from "react"
// import { ApolloClient, InMemoryCache, gql } from "@apollo/client"

// function ProdView() {

//   const [produkty, setProdukty] = useState([])
//   const [pageCount, setPageCount] = useState(0)
//   // Here we use item offsets; we could also use page offsets
//   // following the API or data you're working with.
//   const [itemOffset, setItemOffset] = useState(0)
//   const itemsPerPage = 5
//   const [totalHits, setTotalHits] = useState(55)

//   const client = new ApolloClient({
//     uri: "http://localhost:3000/shop-api",
//     cache: new InMemoryCache(),
//   })

//   const getProdukty = () => {
//     client
//       .query({
//         query: gql`
//           query {
//             product(id: ${id}) {
//               id
//               name
//               variants {
//                 productId
//                 price
//                 priceWithTax
//               }
//             }
//           }
//         `,
//       })
//       .then((response) => {
//         console.log(response.data.products.totalItems)
//         const productData = response.data.products.items.map((produkt) => {
//           // odpowiedz z API odnosnie danych, items -> pozniej iteruje 'map' zeby uzyskac nowa tablice
//           return {
//             id: produkt.id,
//             name: produkt.name,
//             description: produkt.description,
//             imageUrl: produkt.assets[0].source,
//             price: produkt.variants[0].price,
//             // obiekty zawsze w dziwnych nawiasach
//           }
//         })
//         console.log(productData)
//         setTotalHits(response.data.products.id)
//         setProdukty(productData)
//       })
//   }


//   useEffect(() => {
//     getProdukty(itemsPerPage, 0)
//   }, [])

//   function View ({ produkt }) {
//   return (

//   <div>ProdView </div>
//   )
// }

// export default ProdView()
