import {useEffect, useState} from "react"
import React from 'react'
import axios from 'axios'
import {NavLink} from  'react-router-dom'
import Spinner from "../utils/Spinner"


export default function Navlocker(isOpen, setOpen) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);


  //   const fetchData = async () => {
  //       try {bb44f
  //         setLoading(true);
  //         await fetch('https://api.escuelajs.co/api/v1/categories')
  //         .then((res) => res.json())
  //         .then((data) => setData(data))
  //       } catch (error) {
  //         console.log(error);
          
  //       }finally {
  //         setLoading(false);
  //       }
  //   }
  //   fetchData()
    
  // },[])
  // console.log("fda" , data)
  useEffect(() => { 
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://ecommtest.onrender.com/categories')
      setCategories(response.data)
    } catch (error) {
      console.log(error);
      setError(error)
    }finally {
      setLoading(false);
    }
}
fetchData()

},[])
console.log("fda" , categories)
  return (
    <div className="position-fixed top-0 h-100">
        <div className="p-4 bg-light h-100" style={{width:"24rem"}}>
            <div style={{marginTop: "5rem"}}>
              <NavLink to='/product' onClick={() => setOpen (!isOpen)}>
                <p className="text-dark">Products</p>
                </NavLink>
                <p className="text-dark">Categories</p>
                {loading && <Spinner/>}
                {(error || categories)&& (
                  <>
                  {error && <p>{error.message}</p>}
                  {categories.map((cat) => (
                    <NavLink to={`/categories/${cat.id}`} key={cat.id} onClick={() => setOpen (!isOpen)}>
                      <p className="text-sm mt-4 text-secondary">{cat.name}</p>

                    </NavLink>
                  ))}
                  </>
                )}
            </div>
        </div>
    </div>
  )
}
