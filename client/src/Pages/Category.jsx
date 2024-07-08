import React from 'react'
import useFetch from '../Hooks/useFetch'
import { Container } from 'react-bootstrap'
import { Link , Outlet, useLocation } from 'react-router-dom'


export default function Category() {
    const location = useLocation();

    const {data } = useFetch("https://ecommtest.onrender.com/categories")
  return (
    <Container style={{marginTop: '5rem'}} >
        <div className='d-flex align-items-center justify-content-center'>
            {data.map((category) => (
                <Link to={`/categories/${category.id}`} key={category.id} className='mx-2'>
                    <p className={location.pathname === `/categories/${category.id}` ? 'fw-bold text-black' : 'text-sm text-secondary'}>{category.name}</p>
                </Link>

            ))}

        </div>
            <Outlet/>
    </Container>
  )
}
