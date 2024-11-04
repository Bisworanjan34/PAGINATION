import './App.css'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pagination from './pages/Pagination'



function App() {


  return (
   <>
     <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
      
         <Route path='/pagination' element={<Pagination/>} />
       </Routes>
   

   </>
  )
}

export default App
