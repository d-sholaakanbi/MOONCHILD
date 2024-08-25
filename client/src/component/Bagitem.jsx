/* eslint-disable react/prop-types */
import React from 'react';
import { Image } from 'react-bootstrap';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from '../Lib/ContextApi';
import formatCurrency from '../utils/FormatCurrency';

export default function BagItem({ item }) {
  const {
    removeFromBag,
    increaseBagQuantity,
    decreaseBagQuantity,
  } = useStateContext();
  const {title, quantity, price, images} = item;

  return (
    <div className='mt-5'>
      <h6 className='text-start text-sm font-bold'>{title}</h6>
      <div className='d-md-flex gap-4 mt-5'>
        <div className='mb-4 md-mb-0' style={{ maxWidth: '150px' }}>
          <Image src={images[0]} alt={title} className='w-100 h-100' />
        </div>
        <div className='d-flex flex-md-column justify-content-between'>
          <div className='d-flex gap-3 align-items-center align-self-start'>
            <AiOutlineMinus
              onClick={() => decreaseBagQuantity(item)}
              style={{ cursor: 'pointer' }}
            />
            <span>{quantity}</span>
            <AiOutlinePlus
              onClick={() => increaseBagQuantity(item)}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <p className='text-sm'>{formatCurrency(price)}</p>
          <p
            className='text-sm text-danger'
            onClick={() => removeFromBag(item.id)}
            style={{ cursor: 'pointer' }}
          >
            DELETE
          </p>
        </div>
      </div>
    </div>
  );
}
