import React, {useRef}  from 'react'
import {Image, Container, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import FormatCurrency from '../utils/FormatCurrency'
import Spinner from '../utils/Spinner'
import { useStateContext } from '../Lib/ContextApi'
import  toast  from 'react-hot-toast'

export default function FeatureProduct({data, error, loading}) {
    const scrollRef = useRef()
    const { increaseBagQuantity } = useStateContext()

    const scroll = (direction) => {
        const {current} = scrollRef

        direction === "left" ? (current.scrollLeft -= 300) : (current.scrollLeft += 300)

        // if (direction === "left") {
        //      current.scrollLeft -= 300
        // }else {
        //     current.scrollLeft += 300
        // }
    }

    const featureProduct = data.filter ((product) => product.price >= 700 && product.price <= 5000)
  return (
    <Container className='mt-3 p-3'>
        <h6 className='mt-3'> Featured Product</h6>
        {loading && <Spinner/>}
        {(error || featureProduct) && (
            <>
                {error && <p className='text-center'>{error.message}</p>}
                <div className='position-relative'>
                    <Container ref={scrollRef} className="d-flex overflow-scroll scrollbody " style={{scrollBehavior:"smooth"}}>
                        {featureProduct.slice(0,10).map ((product) =>(
                           <div key={product.id} className="me-3">
                            <Link to={`/product/${product.id}`}> 
                                <div style={{width: "270px", height: "350px"}}>
                                    <Image src={product.images[0]} alt={product.title} className="w-100 h-100"/>

                                </div>
                            </Link>
                            <p className='text-dark mb-0'>{product.title}</p>
                            <p className='text-secondary tx-sm mb-0'>{FormatCurrency(product.price)}</p>
                            <Button variant='outline-dark' className="border-none rounded-0" onClick={() => {
                                increaseBagQuantity(product.id)
                                toast.success(`${product.title} added to bag`)
                                }}>ADD TO CART</Button>

                           </div> 
                        ))}
                    </Container>

                    <div className='d-none d-md-block w-100 position-absolute top-50'>
                        <div className='d-flex justify-content-between align-content-center'>
                        <AiOutlineArrowLeft size="2rem" style={{cursor: "pointer"}} onClick={() => scroll("left")}/>
                        <AiOutlineArrowRight size="2rem" style={{cursor: "pointer"}} onClick={() => scroll("right")}/>
                        </div>

                    </div>

                </div>

            </>
        )

        }
    </Container>
  )
}
