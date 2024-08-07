import React from 'react'
import HeroProduct from '../component/HeroProduct'
import useFetch from "../Hooks/useFetch"
import HeroCategory from '../component/HeroCategory'


export default function Home() {
  const {data, error, loading} = useFetch("https://ecommtest.onrender.com/products")

  return (
    <>
        <HeroProduct data={data} error={error} loading={loading}/>
        <HeroCategory/>

    </>
  )
}
