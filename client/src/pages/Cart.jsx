import React from 'react'
import { useStateContext } from '../Lib/ContextApi'
import useFetch from '../Hooks/useFetch'
import { Container } from 'react-bootstrap'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Bagitem from '../component/Bagitem'
import FormatCurrency from '../utils/FormatCurrency'

export default function Cart() {
    const {error, data} = useFetch("https://ecommtest.onrender.com/products")
    const {bagItems} = useStateContext()
    const getTotal = bagItems?.reduce((total, bagItem) => {
        const totalItem = data.find((i) => i.id === bagItem.id)
        return total + (totalItem?.price || 0) * bagItem.quantity
    }, 0)
  return (
    <div>
        <Container style={{paddingTop: '5rem'}}>
            {bagItems.length ? (
                <h6 className='font-bold text-start text-sm'>CART({bagItems.length})</h6>
            ):(
                <h6 className='text-start text-sm font-bold'>Your Bag is Empty</h6>
            )}

        {error || (data && (
            <div>
                {error && <p>{error.message}</p>}
                {data && (
                    <ResponsiveMasonry columnsCountBreakPoints={{350: 2, 750: 3, 900: 3, 1200: 4}} className="">
                    <Masonry gutter='30px'>
                        {bagItems.map((item, index) =>(
                            <Bagitem key={index} {...item} data={data}/>
                        ))}
       
                    </Masonry>
       
            </ResponsiveMasonry>
                )}
                <div className='d-flex gap-3 font-bold text-sm mt-5 justify-content-end'>
                    <p> total <span className='fw-bold text-lg ms-3'>{FormatCurrency(getTotal)}</span></p>
                    
                </div>

            </div>
        ))}

        </Container>
    </div>
  )
}
