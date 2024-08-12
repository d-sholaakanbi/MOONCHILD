/* eslint-disable react/prop-types */
import React from 'react';
import { Image } from 'react-bootstrap';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from '../Lib/ContextApi';
import formatCurrency from '../utils/FormatCurrency';

export default function BagItem({ id, data }) {
  const {
    removeFromBag,
    increaseBagQuantity,
    decreaseBagQuantity,
    getItemQuantity,
  } = useStateContext();

  // Find the item with the given id from the data array
  const item = data?.find((product) => product.id === id);

  // If the item is not found, return null
  if (!item) return null;

  const quantityCount = getItemQuantity(item.id);

  return (
    <div className='mt-5'>
      <h6 className='text-start text-sm font-bold'>{item.title}</h6>
      <div className='d-md-flex gap-4 mt-5'>
        <div className='mb-4 md-mb-0' style={{ maxWidth: '150px' }}>
          <Image src={item.images[0]} alt={item.title} className='w-100 h-100' />
        </div>
        <div className='d-flex flex-md-column justify-content-between'>
          <div className='d-flex gap-3 align-items-center align-self-start'>
            <AiOutlineMinus
              onClick={() => decreaseBagQuantity(item.id)}
              style={{ cursor: 'pointer' }}
            />
            <span>{quantityCount}</span>
            <AiOutlinePlus
              onClick={() => increaseBagQuantity(item.id)}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <p className='text-sm'>{formatCurrency(item.price)}</p>
          <p
            className='text-sm text-danger'
            onClick={() => removeFromBag(id)}
            style={{ cursor: 'pointer' }}
          >
            DELETE
          </p>
        </div>
      </div>
    </div>
  );
}
