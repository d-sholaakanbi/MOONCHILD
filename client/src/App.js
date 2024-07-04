import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import EditTaskPage from './pages/EditTaskPage';
import MyTaskPage from './pages/MyTaskPage';
import NewTaskPage from './pages/NewTaskPage';
function App() {
return(
  <>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/edit/:taskId' element={<EditTaskPage/>}/>
  <Route path='/MyTaskPage' element={<MyTaskPage/>}/>
  <Route path='/NewTaskPage' element={<NewTaskPage/>}/>
  </Routes>
  </>
);
}

export default App;
