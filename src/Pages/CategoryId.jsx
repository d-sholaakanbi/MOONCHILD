import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { Container } from 'react-bootstrap';
import Spinner from '../utils/Spinner';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import ProductContainer from '../component/ProductContainer';

export default function CategoryId() {
  const { categoryid } = useParams();

  console.log("Category ID from useParams:", categoryid);

  const { data, error, loading } = useFetch(`https://moonchildapi.onrender.com/api/categories/${categoryid}/products`);

  console.log("Fetched cat:", data);
  

  const products = data && data.products ? data.products : [];

  console.log("Products Array:", products);

  if (error) {
    console.error('Fetch error:', error);
    return <p>{error.message}</p>;
  }

  if (loading) {
    return <Spinner />;
  }

  if (!products.length) {
    return <p>No products found for this category.</p>;
  }

  return (
    <Container style={{ paddingTop: '5rem' }}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
      >
        <Masonry gutter='30px'>
          {products.map((product) => (
            <ProductContainer key={product.id} {...product} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Container>
  );
}
