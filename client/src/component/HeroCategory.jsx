import React from 'react';
import { Carousel, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import Spinner from '../utils/Spinner';

export default function HeroCategory() {
  const { data, error, loading } = useFetch("https://moonchildapi.onrender.com/api/categories");



  // Ensure data.categories is an array before filtering
  const bannerCategories = data && Array.isArray(data.categories) ?
    data.categories.filter(category => category.name === "Male" || category.name === "Female") :
    [];

  console.log("Filtered banner categories:", bannerCategories);

  return (
    <Container className="mt-5">
      {loading && <Spinner />}
      {error && <p>{error.message}</p>}
      {bannerCategories.length > 0 && (
        <div className='hero-category-container'>
          <Carousel>
            {bannerCategories.map(banner => (
              <Carousel.Item key={banner._id} style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <img
                  className="d-block w-100"
                  src={banner.image}
                  alt={banner.name}
                  style={{ height: "600px", objectFit: 'cover' }}
                />
                <Carousel.Caption>
                  <h1 className="display-3">{banner.name}</h1>
                  <Link to={`/categories/${banner.id}`}>
                    <Button variant="outline-dark" size="lg" className="border-none rounded-0">SEE MORE</Button>
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
