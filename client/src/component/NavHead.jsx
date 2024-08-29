import React, {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import { Sling as Hamburger } from 'hamburger-react';
import { FaShoppingCart } from "react-icons/fa";
import Search from '../images/search.svg'
import Profile from '../images/profile.svg'
import {NavLink} from  'react-router-dom'
import Navlocker from './Navlocker';
import { useStateContext } from '../Lib/ContextApi';


export default function NavHead() {
    const [isOpen, setOpen] = useState(false)

    const{bagQuantity} = useStateContext()

    useEffect(() => {
      if (isOpen) {
        document.body.style.overflow ="hidden"
      } else {
        document.body.style.overflow = "unset"
      }

    },[isOpen])

  return (
    <div className="position-fixed bg-secondary w-100 top-0" style={{zIndex:10}}>
        <Container className="d-flex align-items-center justify-content-between p-2">
            <div className="d-flex align-items-center gap-3 gap-md-5" style={{zIndex:"10"}}>
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} direction="right" />
            <NavLink className="fs-1 text-black moon align-self-center" to="/">MOONCHILD</NavLink>
            </div>
            <div className="d-flex  justify-content-center align-items-center gap-3">
                <NavLink to="/search">
                <div>
                  <img src= {Search} alt= "search"/>
                </div>
                </NavLink>
                <div className="d-flex gap-3">
                <NavLink to="/login">
                  <div>
                    <img src= {Profile} alt= "profile"/>
                  </div>
                </NavLink>
                <NavLink to="/cart">
                  <div className='position-relative'>
                  <FaShoppingCart size="1.5rem" className="text-black"/>
                  <p className='position-absolute top-0 start-100 translate-middle'>{bagQuantity > 0 ? bagQuantity : 0}</p>
                  </div>
                </NavLink>
               
                </div>
            </div>
        </Container>
    {isOpen && <Navlocker isOpen={isOpen} setOpen={setOpen}/>}
    </div>
  )
}