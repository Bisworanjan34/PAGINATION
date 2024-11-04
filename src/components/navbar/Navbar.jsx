import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <nav className='d-flex justify-content-around align-items-center bg-success text-white' style={{height:'50px'}}>
          <div className="logo">
            <h5> Quiz-app </h5>
          </div>
          <div className="nav-cont d-flex justify-content-center align-items-center gap-4 text-white">
              <Link className='text-white text-decoration-none' to={'/'}>Home</Link>
              <Link className='text-white text-decoration-none' to={'/Quiz'}>Quiz</Link>
              <Link className='text-white text-decoration-none' to={'/pagination'}>Pagination</Link>
          </div>
       </nav>
    </div>
  )
}

export default Navbar
