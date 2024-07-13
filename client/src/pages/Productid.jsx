import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'
import { Container } from 'react-bootstrap'
import Spinner from '../utils/Spinner'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import ProductContainer from '../component/ProductContainer'

export default function Productid() {
  const {productid} = useParams()
  const {data, error, loading } = useFetch(`https://ecommtest.onrender.com/products/${productid}`)
  return (
    <Container style={{marginTop: '5rem'}}>
        {loading && <Spinner/>}
        {error && <p>{error.message}</p>}
        {data && (
             <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3, 900: 3, 1200: 4}} className="">
             <Masonry gutter='30px'>
                 {data.map((product) =>(
                     <ProductContainer key={product.id} {...product}/>
                 ))}
             </Masonry>
     </ResponsiveMasonry>
        )}
    </Container>
  )
}
