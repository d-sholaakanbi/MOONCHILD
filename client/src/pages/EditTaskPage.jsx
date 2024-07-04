import React, { useState, useEffect } from 'react'
import {Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Navhead from '../components/Navhead'
import arrow from '../images/Vector.svg'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditTaskPage() {

  const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');


    const {id} = useParams();
    console.log(id);
    const url = `http://localhost:3200/api/v1/${id}`;

    const fetchTask = async (e) => {
        const res = await fetch(url);
        const {task} = await res.json();
        console.log(task);
        setTitle(task.title);
        setTags(task.tags);
        setDescription(task.description);
    };
    useEffect(() => {fetchTask()}, []);

    const redirect = useNavigate();

    const handleUpdate = async (e) => {
        e.preventDefault();
        const res = await fetch(url,{
            method:'PATCH',
            headers: {'Content-Type': 'application/json'} ,
            body: JSON.stringify({title, description,tags})         
        });
        const data = await res.json();
        redirect('/MyTaskPage')
    }

  return (
    <>
    <Navhead text1= 'All Tasks'/>
    <Container className='container '>
      <div className='d-flex py-4 gap-3'>
        <a href="/MyTaskPage"><img src={arrow} alt="" /></a>
        <h3>Edit Task</h3>
      </div>
      <form action=''>
      <label For="title" className='px-4 fs-5 fw-1'>Task Title</label><br />
      <input type="title" required id='title' className='frem' value={title} onChange={(e)=> setTitle(e.target.value)} name='title' placeholder='E.g Project Defense,Assignment... '/><br />
      <label For="title" className='px-4 fs-5 fw-1 mt-3'>Description</label><br />
      <input type="description" required id='description' className='hert' value={description} onChange={(e)=> setDescription(e.target.value)} placeholder='Briefly describe your task...'/><br /><br /><br />
      <label For="title" className='px-4 fs-5 fw-1 mt-3'>Tags</label><br />
      <Form.Select className='box' value={tags} onChange={(e)=> setTags(e.target.value)}>
        <option value="Urgent">Urgent</option>
        <option value="Important">Important</option>
      </Form.Select>
      <Link to='/MyTaskPage'>
        <button onClick={handleUpdate} type='Submit' className='mt-4 w-100 fbtn'>Done</button>
      </Link>
      </form>
    </Container>
    </>
  )
}
