import React, { useEffect, useState} from 'react'
import api from "./api"
import Navbar from './Navbar'
import "./Search.css"
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const Search = () => {
  // console.log(api)
    const [data,setData] = useState(api)

    useEffect(()=>{
      setData(api)
    },[])

    
    console.log(data)
  return (
    <>
<Navbar/>
<div className='heading'>
  <h4>Tourism Places</h4>
</div>
<div className='note'>
  <p>Disclaimer : This is about the below displayed images are the places you can get the tourism guidance about for your trip to plan accordingly.If you want to get the detial description about the places you can Navigate using below link or you can go through the Navbar Section.</p>
  <NavLink to="/Details"><button className='detail_btn' type='button'>Visit Places</button></NavLink>
</div>
<div className="grid_images">
{
  data.map((ele) => {
    return(
      <>
     
    <div className="image_g">
    <NavLink to="/Details"><figure> 
        
          <img className='gimage' src={ele.images[0]}></img>
          </figure></NavLink>
          <figcaption className='caption'>{ele.name}</figcaption>
          
    </div>
      </>
    )
  })
}
</div>
  {/* <div className="grid_images">
    <div className="image_g">
          <img className='gimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ08jIVREUkrGcRF0jEjCJ9PtpjxYNHjgnZ92ruE01mA&s'></img>
    </div>
    <div className="image_g">
          <img className='gimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ08jIVREUkrGcRF0jEjCJ9PtpjxYNHjgnZ92ruE01mA&s'></img>
    </div>
    <div className="image_g">
          <img className='gimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ08jIVREUkrGcRF0jEjCJ9PtpjxYNHjgnZ92ruE01mA&s'></img>
    </div>
    <div className="image_g">
          <img className='gimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ08jIVREUkrGcRF0jEjCJ9PtpjxYNHjgnZ92ruE01mA&s'></img>
    </div>
    <div className="image_g">
          <img className='gimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ08jIVREUkrGcRF0jEjCJ9PtpjxYNHjgnZ92ruE01mA&s'></img>
    </div>
    <div className="image_g">
          <img className='gimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ08jIVREUkrGcRF0jEjCJ9PtpjxYNHjgnZ92ruE01mA&s'></img>
    </div>
    <div className="image_g">
          <img className='gimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ08jIVREUkrGcRF0jEjCJ9PtpjxYNHjgnZ92ruE01mA&s'></img>
    </div>
    <div className="image_g">
          <img className='gimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ08jIVREUkrGcRF0jEjCJ9PtpjxYNHjgnZ92ruE01mA&s'></img>
    </div>
    <div className="image_g">
          <img className='gimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ08jIVREUkrGcRF0jEjCJ9PtpjxYNHjgnZ92ruE01mA&s'></img>
    </div>
    <div className="image_g">
          <img className='gimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ08jIVREUkrGcRF0jEjCJ9PtpjxYNHjgnZ92ruE01mA&s'></img>
    </div>
    <div className="image_g">
          <img className='gimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ08jIVREUkrGcRF0jEjCJ9PtpjxYNHjgnZ92ruE01mA&s'></img>
    </div>
    <div className="image_g">
          <img className='gimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ08jIVREUkrGcRF0jEjCJ9PtpjxYNHjgnZ92ruE01mA&s'></img>
    </div>
  </div> */}
  <Footer/>
    </>
  )
}

export default Search