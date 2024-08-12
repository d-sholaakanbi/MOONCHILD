/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Spinner from "../utils/Spinner";

export default function Navlocker({ isOpen, setOpen }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://moonchildapi.onrender.com/api/categories');
        console.log("Response data:", response.data);
        setCategories(response.data.categories); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("Categories:", categories); // Log categories state to verify

  return (
    <div className="position-fixed top-0 h-100">
      <div className="p-4 bg-light h-100" style={{ width: "24rem" }}>
        <div style={{ marginTop: "5rem" }}>
          <NavLink to="/products" onClick={() => setOpen(!isOpen)}>
            <p className="text-dark">Products</p>
          </NavLink>
          <p className="text-dark">Categories</p>
          {loading && <Spinner />}
          {error && <p>Error: {error.message}</p>}
          {categories.length > 0 && (
            <>
              {categories.map((cat) => (
                <NavLink to={`/categories/${cat.id}`} key={cat.id} onClick={() => setOpen(!isOpen)}>
                  <p className="text-sm mt-4 text-secondary">{cat.name}</p>
                </NavLink>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
