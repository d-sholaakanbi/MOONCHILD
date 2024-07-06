import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [load, setLoad] = useState("");
  const url ='https://postitapi.onrender.com/login'  

  const redirect = useNavigate();

  const login = async (e) => {
    setLoad(true);
    e.preventDefault();
    const res = await fetch(url,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password }),
      
    })
      const data = await res.json()
      if (data.token) {
        localStorage.setItem('token', JSON.stringify(data.token))
      redirect("/Dashboard");
      }else{
        const error = data.errors.email
        setError(error)
      }
    }
  
return (
    <>
    <div className='boxa'>
    <Container className='text-center login'>
      
       
        <div className='form1'>
        <h2>Welcome Back</h2>
        <form onSubmit={login} className='mb-3'>
        <label htmlFor="email" className='mt-5'> Your Email Address</label><br />
        <input type="text" required id='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} className='form2' /><br />
        <p style={{color: 'red',}}>{error}</p>
        <label htmlFor="password" className='mt-5'>Password</label><br />
        <input type="password" required id='password' name='password' value={password} onChange={(e)=> setPassword(e.target.value)} className='form2' /><br />
        <button type='submit' className='btn2 mt-5'>{load ? 'Logining in......': 'Continue'}</button>
        </form>
        <h6>No account? <Link to="/Signup">SignUp</Link></h6>

        </div>
    </Container>

    </div>
    </>
  )
}