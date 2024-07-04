import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import Navhead from '../components/Navhead'
import {FaRegEdit} from 'react-icons/fa'
import {RiDeleteBin5Line} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'


export default function MyTaskPage() {
  const url = 'http://localhost:3200/api/v1/tasks'
  const [tasks, setTasks] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setTasks(data.tasks)
  };
  useEffect(()=>{
    fetchData()
  }, []);

  const redirect = useNavigate();
  const handleDelete = (taskId) => {
    const url = `http://localhost:3200/api/v1/tasks/${taskId}`;
    fetch(url,{
      method: 'DELETE',
    }).then(() => {
      redirect('/')
    })
    console.log(taskId);
  };
  return (
    <>
    <Navhead text1='New Task'/>
    <Container>
      <div className='d-flex justify-content-between align-items-center py-4'>
        <h1 className='fs-3'>My Tasks</h1>
        <a href="/NewTaskPage" className='fs-5'style={{color:'#974FD0'}}> + Add New Task</a>
      </div>
    </Container>
    {tasks.map((task)=>{
      const {_id,title,description,tags} = task;
      return (
        <div key={_id}>
      <Container className='d-flex justify-content-between align-items-center border-radius'>
        <h6 className='fs-5'>{tags}</h6>
        <div className='d-flex gap-3'>
          <Link to={`/edit/${_id}`}>
          <button className='dbtn fs-6'><FaRegEdit/>Edit</button>
          </Link>
          <button className='dbtn1 fs-6' onClick={()=>handleDelete(_id)}><RiDeleteBin5Line/>Delete</button>
        </div>
      </Container>
      <Container className='border p-2'>
          <h2>{title}</h2>
          <p>{description}</p>
      </Container>
    </div>
      )
    })}
    </>
  )
}
