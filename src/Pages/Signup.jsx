import React from 'react'
import { useState } from 'react'
import { Container} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';


export default function Signup() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [gender, setGender] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad]=useState('');
  const [error, setError] = useState('');
  const url = 'https://moonchildapi.onrender.com/api/signup';


const redirect = useNavigate();
  const signup = async(e) =>{
    setLoad(true);
    e.preventDefault();
    const res = await fetch (url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify ({firstName,lastName,userName,gender,email,password})
    });
    const data = await res.json();

    if (data.errors) {
      const error = data.errors.email
      setError(error)
      // console.log(error);
    }else {
        //console.log(data);
        redirect('/login');
    }
  }

  return (
    <>
    <div>
    <Container className=' text-center login'>
        <div className='text-center form4'>
        <h2>Join MoonChild</h2>
        <form onSubmit={signup} className='mb-2'>
        <label htmlFor="firstName" className='mt-3'> First Name</label><br />
        <input type="text" required id='firstName' name='firstName' value={firstName} onChange={(e)=> setfirstName(e.target.value)} className='form3' /><br />
        <label htmlFor="lastName" className='mt-3'> Last Name</label><br />
        <input type="text" required id='lastName' name='lastName' value={lastName} onChange={(e)=> setlastName(e.target.value)} className='form3' /><br />
        <label htmlFor="userName" className='mt-3'> UserName</label><br />
        <input type="text" required id='userName' name='userName' value={userName} onChange={(e)=> setUserName(e.target.value)} className='form3' /><br />
        <label htmlFor="gender" className='mt-3'>Gender</label><br />
       <select name='gender' value={gender} onChange={(e)=> setGender(e.target.value)} className='opp'>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
       </select><br />
        <label htmlFor="email" className='mt-3'> Your Email Address</label><br />
        <input type="text" required id='email' name='email' value={email} onChange={(e)=> setEmail(e.target.value)} className='form3' /><br />
        <p style={{color: 'red',}}>{error}</p>
        <label htmlFor="password" className='mt-3'>Password</label><br />
        <input type="password" required id='password' name='password' value={password} onChange={(e)=> setPassword(e.target.value)} className='form3' /><br />
        <button type='submit'className='btn2 mt-4'>{load ? 'Signing Up......': 'Continue'}</button>
        </form>
        <h6>Already have an account? <Link to="/login">Login</Link></h6>

        </div>
    </Container>

    </div>
    </>
  )
}
