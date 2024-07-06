import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormatCurrency from '../utils/FormatCurrency'

export default function ProductContainer({id, images, title, price}) {
  return (
    <Link to={`/product/${id}`}>
        <>
        <div style={{height: "420px"}}>
            <Image src={images[0]} alt={title} className="w-100 h-100" style={{objectFit: "inherit"}} />
        </div>
        <div className='d-flex justify-content-between'>
            <p className='text-uppercase text-xs text-dark'> {title.slice(0,30)}</p>
            <p className='text-uppercase text-xs text-secondary'> {FormatCurrency(price)}</p>
        </div>
        
        
        </>

    </Link>
  )
}
