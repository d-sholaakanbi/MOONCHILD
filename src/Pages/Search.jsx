import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { Container } from 'react-bootstrap';
import ProductContainer from '../component/ProductContainer';
import Spinner from '../utils/Spinner';

export default function Search() {
  const [query, setQuery] = useState('');
  const { error, loading, data } = useFetch('https://moonchildapi.onrender.com/api/products');
  const navigate = useNavigate();

  console.log(data);
  

  useEffect(() => {
    const getSearch = setTimeout(() => {
      if (query && query.length > 0) {
        setQuery(query);
      }
    }, 2000);
    return () => clearTimeout(getSearch);
  }, [query]);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) {
      params.append('name', query);
    } else {
      params.delete('name');
    }
    navigate({ search: params.toString() });
  }, [query, navigate]);

  // Check data and filter if it's an array
  const filteredData = (Array.isArray(data.products) ? data.products : []).filter((res) => {
    if (!res.title || !res.description) return false;

    const filter =
      res.title.toLowerCase().includes(query.toLowerCase()) ||
      res.description.toLowerCase().includes(query.toLowerCase());

    return filter;
  });

  console.log(filteredData);
  

  return (
    <Container style={{ marginTop: '7rem' }}>
      <div className='position-relative h4 pb-2 mb-4 border-bottom border-dark'>
        <input
          className='small w-100 no-outline border-0'
          id='search'
          type='text'
          placeholder='ENTER SEARCH TERMS'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query.length > 0 && (
          <AiOutlineClose
            className='position-absolute end-0'
            onClick={() => setQuery('')}
            style={{ cursor: 'pointer' }}
          />
        )}
      </div>
      {loading && <Spinner />}
      {error && <p className='text-center'>{error.message}</p>}
      {filteredData && filteredData.length > 0 && (
        <div className='mt-5'>
          <div className='d-flex align-items-center justify-content-between'>
            <p className='text-sm text-gray-700'>
              {filteredData.length} results
            </p>
          </div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
            className='mt-5'
          >
            <Masonry gutter='30px'>
              {filteredData.map((product) => (
                <ProductContainer key={product.id} {...product} />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      )}
    </Container>
  );
}
