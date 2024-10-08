import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import BagItem  from '../component/Bagitem'
import useFetch from '../Hooks/useFetch'
import { useStateContext } from '../Lib/ContextApi'
import formatCurrency  from '../utils/FormatCurrency'
import Spinner from '../utils/Spinner'

export default function Cart() {
  const { error, loading, data } = useFetch(
    'https://moonchildapi.onrender.com/api/products'
  )
  const { bagItems } = useStateContext()
  const getTotal = bagItems?.reduce((total, bagItem) => 
   total + bagItem.quantity * bagItem.price, 0
   )

  return (
    <Container style={{ paddingTop: '5rem' }}>
      {bagItems?.length > 0 ? (
        <h6 className='text-start text-sm font-bold'>
          CART ({bagItems?.length})
        </h6>
      ) : (
        <h6 className='text-center text-sm font-bold d-flex justify-content-center align-items-center py-5'>
          your basket is empty
        </h6>
      )}

      {loading && <Spinner />}
      {(error || data) && (
        <div className='h-100'>
          {error && <p className='text-lg text-center'>{error.message}</p>}
          <>
            <p className='p-3 uppercase font-normal mt-4'>
              ITEMS IN THE BASKET ARE NOT RESERVED UNTIL COMPLETING THE
              PURCHASE.
            </p>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              className='mx-auto'
            >
              <Masonry gutter='30px'>
                {bagItems.map((item) => (
                  <BagItem key={item.id} item = {item}/>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </>
          <div className='border-t-2 border-black md:border-0 py-2 flex md:flex-row-reverse items-center gap-4 fixed bottom-0 right-20 md:right-20'>
            {/* <Checkout getTotal={getTotal} /> */}
            <div className='flex space-x-3 font-bold text-xs text-slate-900'>
              <p>TOTAL</p>
              <span>{formatCurrency(getTotal)}</span>
              </div>
    <div className="flex justify-center items-center h-screen">
    <div className="flex space-x-3 font-bold text-xs text-slate-900">
    <a href='https://Wa.me/2348152366415'>
    <Button variant="outline-dark" size="lg" className="border-none rounded-0">
        BUY NOW
      </Button>
    </a>
      
    
         </div>
          </div>
          </div>
        </div>
      )}
    </Container>
  )
}