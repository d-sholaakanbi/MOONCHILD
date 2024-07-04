// import React, { useState, useEffect } from 'react'
// import { Container, Form } from 'react-bootstrap'
// import { useParams, useNavigate } from 'react-router-dom';
// import Navhead from '../components/Navhead'
// import arrow from '../images/Vector.svg'

// export default function Edit() {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [tags, setTags] = useState('');


//     const {id} = useParams();
//     console.log(id);
//     const url = `http://localhost:3200/api/v1/${id}`;

//     const fetchTask = async (e) => {
//         const res = await fetch(url);
//         const {task} = await res.json();
//         console.log(task);
//         setTitle(task.title);
//         setTags(task.tags);
//         setDescription(task.description);
//     };
//     useEffect(() => {fetchTask()}, []);

//     const redirect = useNavigate();

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         const res = await fetch(url,{
//             method:'PATCH',
//             headers: {'Content-Type': 'application/json'} ,
//             body: JSON.stringify({title, description,tags})         
//         });
//         const data = await res.json();
//         redirect('/MyTaskPage')
//     }

//   return (
//     <>
//      <Navhead text2='All Tasks' />
//         <Container>
//         <div className='d-flex py-4 gap-3'>
//             <a href="/MyTaskPage" className='fs-1' ><img src={arrow} alt=''/></a>
//             <h3>Edit Task</h3>
//         </div>
//         <form>
//         <label For="title" className='px-4 fs-5 fw-1'>Task Title</label><br></br>
//         <input type="text" required id='title' value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Enter a Task Title" className='w-100 taskTitle'/>

//         <label For="description" className='px-4 fs-5 fw-1 mt-3'>Description</label><br></br>
//         <input type="text" required id='description' value={description} onChange={(e)=> setDescription(e.target.value)} placeholder="Brefitly describe your task" className='w-100 taskDecription'/>

//         <label For="tags" className='px-4 fs-5 fw-1 mt-3'>Tags</label><br></br>
//         <Form.Select value={tags} onChange={(e)=> setTags(e.target.value)}>
//         <option value='Urgent' >Urgent</option>
//         <option value='Important'>Important</option>
//         </Form.Select>
//         <button onClick={handleUpdate} type='submit' className='mt-4 w-100 btn' >Done</button>
//         </form>
//     </Container>
   
//     </>
//   )
// }