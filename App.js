import React from 'react'
import Carts from './components/Carts'
import  Home  from './navfolder/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login'
import About from './navfolder/About';
import Fruits from './components/Fruits';
import Loading from './Loading';
import Nuts from './components/Nuts';
import Contact from './navfolder/Contact';

export default function App() {
  return (
      
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Loading/>}/> 
      <Route path='/home' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/vegetables' element={<Carts/>}/>
       <Route path='/fruits' element={<Fruits/>}/>
       <Route path='/nuts' element={<Nuts/>}/>
    </Routes> 
    </BrowserRouter>
  )
}
