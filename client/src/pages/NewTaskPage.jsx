import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Container, Form } from 'react-bootstrap'
import Navhead from '../components/Navhead'
import arrow from '../images/Vector.svg'

export default function NewTaskPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const url = "http://localhost:3200/api/v1/tasks"
    
  const redirect = useNavigate();

     const createTask = async (e) => {
      e.preventDefault()
      const res = await fetch(url,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title,description, tags})
      });
      const data = await res.json();
      console.log(data);
      //return to all tasks 
      redirect('/MyTaskPage')
     }
  return (
    <>
    <Navhead text2= 'All Tasks'/>
    <Container className='container '>
      <div className='d-flex py-4 gap-3'>
        <a href="/MyTaskPage"><img src={arrow} alt="" /></a>
        <h3>New Task</h3>
      </div>
      <form onSubmit={createTask}>
      <label htmlFor="title" className='px-4 fs-5 fw-1'>Task Title</label><br />
      <input type="text" required id='title' value={title} onChange= {(e) => setTitle(e.target.value)} className='frem' name='title' placeholder='E.g Project Defense,Assignment... '/><br />
      <label htmlFor="description" className='px-4 fs-5 fw-1 mt-3'>Description</label><br />
      <input type="text" required id='description' value={description} onChange= {(e) => setDescription(e.target.value)} className='hert' name='description' placeholder='Briefly describe your task...'/><br /><br /><br />
      <label htmlFor="title" className='px-4 fs-5 fw-1 mt-3'>Tags</label><br />
      <Form.Select value={tags} onChange= {(e) => setTags(e.target.value)} className='box'>
        <option value="Urgent">Urgent</option>
        <option value="Important">Important</option>
      </Form.Select>
        <button type='Submit' className='mt-4 w-100 fbtn'>Done</button>
      </form>
    </Container>
    </>
  )
}
