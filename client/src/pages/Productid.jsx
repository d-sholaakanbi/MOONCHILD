import React, {useState} from 'react'
import {useParams, Link} from "react-router-dom"
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import Spinner from '../utils/Spinner'
import FormartCurreny  from '../utils/FormatCurrency'
import { useStateContext } from '../Lib/ContextApi'
import  toast  from 'react-hot-toast'

export default function Productid() {
  const [index, setIndex] = useState(0)
  const { productid} = useParams()
  const {error, data, loading} = useFetch(`https://ecommtest.onrender.com/products/${productid}`)
  const {error: err, data: dataProduct, loading: load } = useFetch(`https://ecommtest.onrender.com/products`)

  const {increaseBagQuantity} = useStateContext()

  const relatedProduct = dataProduct.filter((product) => product.category?.name === data.category.name)
 

  const filteredProductById = relatedProduct.filter((item) => item.id !== data.id)
  


  return (
    <Container>
        {loading && <Spinner/>}
        {(error || data) && (
          <Row className="mt-5 g-4 h-100">
              {error && <p>{error.message}</p>}
              <Col md={8}>
                <div className='d-md-flex align-items-center h-100 gap-4'>
                  <div className='mb-4 align-self-end gap-2'>
                    <h6 className='text-start'>{data.title}</h6>
                    <p className='text-sm font-bold'>{data.category?.name}</p>
                  </div>
                  <div className='d-md-flex mb-4 adjustImg'>
                        <Image src={data.images && data.images[index]} alt={data.title} className="w-100 h-100"/>
                  </div>
                  <div className="d-flex flex-md-column align-self-start">
                      {data.images?.map((image, i) => (
                        <Image key={i} src={image} alt="..." style={{width:"70px", height: "70px"}} onMouseEnter={() => setIndex(i)} className={i === index ? "border border-dark" : ""}/>
                      ))}
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className='d-md-flex align-items-center gap-4 h-100'>
                        <div className='mb-4 align-self-end gap-2'>
                          <h6 className='font-bold'> Descriptions</h6>
                          <p className='text-secondary text-sm'>{data.description}</p>
                          <p className='text-secondary text-sm'>{FormartCurreny(data.price)}</p>
                          <Button variant='dark' className='border-none rounded-0 w-100' onClick={() => {
                            increaseBagQuantity(data.id) 
                            toast.success(`${data.title} added to bag`)
                            }}>ADD TO BAG</Button>
                        </div>

                </div>
              
              </Col>
          </Row>
        )}

        <div style={{marginTop: "5rem"}}>
          <h6 className='text-start text-sm font-bold'>Similar Items</h6>
          <div className='mt-5 d-flex overflow-auto gap-4 w-100'>
            {filteredProductById.map((item) => (
              <div className='flex-shrink-0' key={item.id}>
                <Link to={`/product/${item.id}`}>
                <div style={{width: '270px', height: '350px'}}>
                  <img src={item.images[0]} alt={item.title} className="w-100 h-100" />
                </div>
                </Link>
                  <p className='text-sm text-black mb-0'>
                    {FormartCurreny(data.price)}
                  </p>
                  <Button variant='outline-dark' className='border-none rounded-0' onClick={() => {
                    increaseBagQuantity(item.id)
                    toast.success(`${item.title} added to bag`)
                    }}>ADD TO BAG</Button>
              </div>
            ))}
          </div>

        </div>

    </Container>
  )
}
 