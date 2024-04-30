import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='subfooters'>
            <div className='subone'>
                <h4>Explorely</h4>
            </div>
            <div className='subtwo'>
                <h5>Features</h5>
                <NavLink to="/home"><a className="nav-link active" aria-current="page" href="#">Home</a></NavLink>
                <NavLink to="/Search"><a className="nav-link active" aria-current="page" href="Search">Places</a></NavLink>
                <NavLink to="/Details"><a className="nav-link active" aria-current="page" href="">Search</a></NavLink>
                <NavLink to="/contact"><a className="nav-link active" aria-current="page" href="#">Contact Us</a></NavLink>
            </div>
            <div className='subthree'>
                <h5>Contact Us</h5>
                <p>Manojthupakula06080@gmail.com</p>
                <p>India</p>
                <p>9441390073</p>
            </div>
            <div className='subfour'>
                <h5>Features</h5>
                <div className='icons'> 
                 <div className='icon'>
                    <a href='www.github.com/tupakulamanoj'>
                 <i class="fa-brands fa-github"></i></a>
                 </div>
                 <div className='icon'>
                    <a href='#'> 
                 <i class="fa-brands fa-instagram"></i></a>
                 </div>
                 <div className='icon'>
                 <a href='#'> 
                 <i class="fa-brands fa-linkedin"></i></a>
                 </div>
                 <div className='icon'>
                 <a href='#'> 
                 <i class="fa-brands fa-twitter"></i></a>
                 </div>
                 </div>
            </div>
        </div>
        <div className='copy'>
            <p>@CopyWrite created by manoj</p>
        </div>
      </div>
    </>
  )
}

export default Footer