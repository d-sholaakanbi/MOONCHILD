import React from 'react';
import Container from 'react-bootstrap/Container';
import { Outlet, useLocation } from 'react-router-dom';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Spinner from '../utils/Spinner';
import useFetch from '../Hooks/useFetch';
import ProductContainer from '../component/ProductContainer';

export default function Product() {
    const { data, error, loading } = useFetch('https://moonchildapi.onrender.com/api/products');
    const location = useLocation();

    // Log the fetched data to inspect its structure
    console.log("Fetched data:", data);

    // Ensure data contains the products array before mapping
    const products = data && Array.isArray(data.products) ? data.products : [];

    return (
        <Container style={{ marginTop: "5rem" }}>
            {location.pathname === "/products" ? (
                <>
                    {loading && <Spinner />}
                    {error && <p className="error">{error.message}</p>}
                    {!loading && !error && (!data || !Array.isArray(data.products)) && (
                        <p>DATA IS NOT AN ARRAY: {JSON.stringify(data)}</p>
                    )}
                    {!loading && !error && Array.isArray(data.products) && (
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 3, 1200: 4 }} className="mt-5">
                            <Masonry gutter='30px'>
                                {products.map((product, index) => {
                                    console.log(`Product ${index}:`, product);
                                    return (
                                        <ProductContainer 
                                            key={product.id} 
                                            id={product.id} 
                                            images={product.images} 
                                            title={product.title} 
                                            price={product.price} 
                                            description={product.description}
                                        />
                                    );
                                })}
                            </Masonry>
                        </ResponsiveMasonry>
                    )}
                </>
            ) : (
                <Outlet />
            )}
        </Container>
    );
}
