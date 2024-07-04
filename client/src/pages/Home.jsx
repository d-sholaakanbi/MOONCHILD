import React from 'react'
import Navhead from '../components/Navhead'
import imag from '../images/Component 1.jpg'

export default function Home () {
  return (
    <>
    <Navhead text1='New Task' text2='All Tasks'/>
    <div className='d-flex justify-content-between px-3 container mt-5'>
        <div className='task' >
            <h1>Manage your Tasks on <span style={{color:'#974fd0'}}>TaskDuty</span></h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa corporis nemo voluptatum itaque distinctio ab adipisci, a unde, quisquam fuga eaque debitis explicabo facilis quaerat deserunt blanditiis labore repellendus assumenda?
            </p>
            <a href="/MyTaskPage"><button className='bton'>Go to My Tasks</button></a>
        </div>
        <div>
            <img src={imag} alt=''/>

        </div>

    </div>
    </>
    
  )
}
