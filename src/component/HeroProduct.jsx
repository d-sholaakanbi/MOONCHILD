/* eslint-disable react/prop-types */
import React from 'react';
import { Carousel, Button, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Spinner from '../utils/Spinner';

export default function HeroProduct({ data, error, loading }) {
  // Check if data is an object and contains a products array
  const products = data && Array.isArray(data.products) ? data.products : [];
  const bannerProducts = products.filter(product => product.price >= 10);

  // Detailed logging
  console.log("Data prop:", data);
  console.log("Products array:", products);
  console.log("Filtered banner products:", bannerProducts);
  console.log("Data prop (stringified):", JSON.stringify(data, null, 2));

  return (
    <Container className="mt-5">
      {loading && <Spinner />}
      {error && <p>{error.message}</p>}
      {bannerProducts.length > 0 && (
        <div className='hero-product-container'>
          <Carousel>
          {bannerProducts.slice(0, 5).map(banner => (
            <Carousel.Item key={banner._id} style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <Image
                fluid
                className="d-block w-100"
                src={banner.images && banner.images.length > 2 ? banner.images[2] : banner.images[0]}
                alt={banner.title}
                style={{ height: '600px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h1 className="display-3">{banner.title}</h1>
                <Link to={`/product/${banner.id}`}>
                  <Button variant="outline-dark" size="lg" className="border-none rounded-0">BUY NOW</Button>
                </Link>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
        
      )}
    </Container>
  );
}
