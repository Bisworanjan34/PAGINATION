import './App.css'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Pagination2 from './pages/pagination2'

function App() {


  return (
   <>
     <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/quiz' element={<Quiz/>}/>
         <Route path='/pagination' element={<Pagination2/>} />
       </Routes>
   

   </>
  )
}

export default App
