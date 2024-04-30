import React, { useEffect, useState } from 'react'
import Search from './Search'
import api from './api'
import Navbar from './Navbar'
import "./Details.css"
import Footer from './Footer'

const Details = () => {
    const [data,setData] = useState([])
    const [show,setShow] = useState([])
    const [count,setCount] = useState(0)
    useEffect(()=>{
        setData(api)
        setCount(api)
    })
    const Filter = (event) => {
        // setShow(data.filter())
        const val = event.target.value
        const value = val[0].toUpperCase() + val.slice(1);
        const filter_data = data.filter(place => place.name.includes(value))
        setShow(filter_data)
    }
    // console.log(show)
    
  return (
    <>
    <Navbar/>
    <div className='box'>
      
    </div>
    <div className='searchbar'>
    <input type='text' placeholder='Search Destination' onChange={Filter}></input>
    </div>
    <div className='detailssection'>
      {
        show.map((curele) => {
          return(
            <>
             <div className='place-image'>
              <figure className='place'>
               {
                curele.images.map((img,ind) => {
                  return(
                    <>
                    <img src={img}></img>
                    <div className='details-content'> 
                    <p>{curele.name},{curele.place_type[ind]}</p>
                    <p>{curele.places_description[ind]}</p>
                    <p>The no of Visitors from various countries across the world is {curele.no_of_visitors[ind]}</p>
                    </div>
                    </>
                  )
                   
                })
               }
              </figure>
             </div>
            </>
          )
        })
      }
    </div>
    {/* <input type='text' placeholder='Enter the Place' onChange={Filter}></input> */}
    {/* <button type='button'onClick={Filter}>Search</button> */}
    <Footer/>
    </>
    
  )
}

export default Details