import React from 'react'
import {Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import Logo from '../images/Group 1.svg'
import Logo2 from '../images/Group 6.svg'

export default function Navhead({text1, text2}) {
  
  return (
    <div style={{zIndex:'10'}} >
    <div className='w-100 '>
        <Container className='d-flex align-items-center justify-content-between p-2 border-bottom'>
           <div className='d-flex align-tems-center gap-md-5' >
            <img src={Logo} alt="firstlogo" />
          <NavLink className='fw-600 fs-2 align-self-center' to='/'style={{color:'#2D0050'}}>TaskDuty</NavLink>
         </div>
          <div className='d-flex justify-content-center align-items-center gap-5'>
              <h5><a href='/NewTaskPage' className='text-dark fs-4  '>{text1}</a></h5>
              <h5><a href='/MyTaskPage' className='text-dark fs-4 '>{text2}</a></h5>
            <img src={Logo2} alt="secondlogo" />
         </div>
        </Container>
    </div>
    </div>
  )
}


