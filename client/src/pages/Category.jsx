import React from 'react';
import useFetch from '../Hooks/useFetch';
import { Container } from 'react-bootstrap';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Spinner from '../utils/Spinner';

export default function Category() {
  const location = useLocation();
  const { data, error, loading } = useFetch('https://moonchildapi.onrender.com/api/categories');

  // Log the fetched data to inspect its structure
  console.log("Fetched data:", data);

  // Ensure data is an object and has a categories array
  const categories = data && Array.isArray(data.categories) ? data.categories : [];

  return (
    <Container style={{ marginTop: '5rem' }}>
      {loading && <Spinner />}
      {error && <p>{error.message}</p>}
      {!loading && !error && categories.length === 0 && <p>No categories found</p>}
      {!loading && !error && categories.length > 0 && (
        <div className='d-flex align-items-center justify-content-center'>
          {categories.map((category) => (
            <Link to={`/categories/${category.id}`} key={category.id} className='mx-2'>
              <p className={location.pathname === `/categories/${category.id}` ? 'fw-bold text-black' : 'text-sm text-secondary'}>
                {category.name}
              </p>
            </Link>
          ))}
        </div>
      )}
      <Outlet />
    </Container>
  );
}
