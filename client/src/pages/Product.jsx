import React from 'react'
import Container from 'react-bootstrap/Container'
import { Outlet, useLocation } from 'react-router-dom'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import Spinner from '../utils/Spinner'
import useFetch from '../Hooks/useFetch'
import ProductContainer from '../component/ProductContainer'


export default function Product() {
    const {data, error, loading} = useFetch("https://ecommtest.onrender.com/products")

    const location = useLocation()

  return (
    <Container style={{marginTop: "5rem"}}>
        {location.pathname === "/product" ? (
            <>
             {loading && <Spinner/>}
        {(error || data) && (
            <>
            {error && <p className="error">{error.message}</p>}
            {data && (
            <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3, 900: 3, 1200: 4}} className="mt-5">
                    <Masonry gutter='30px'>
                        {data.map((product) =>(
                            <ProductContainer key={product.id} {...product}/>
                        ))}

                    </Masonry>

            </ResponsiveMasonry>

            )}


            </>
        )
        }
            
            </>
        ) : (

            <Outlet/>   
        )
    }
       
    </Container>
  )
}

