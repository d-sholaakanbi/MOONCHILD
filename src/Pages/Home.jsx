import React from 'react'
import HeroProduct from '../component/HeroProduct'
import useFetch from "../Hooks/useFetch"
import HeroCategory from '../component/HeroCategory'

export default function Home() {
  const {data, error, loading} = useFetch("https://moonchildapi.onrender.com/api/products")

  return (
    <>
        <HeroProduct data={data} error={error} loading={loading}/>
        <HeroCategory/>
    </>
  )
}
