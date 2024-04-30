import {React,useEffect} from 'react'
import Navbar from './Navbar'
import "./App.css"
import mumbai from './mumbai.jpg'
import lord from './lord.jpg'
import Beach from './Beach.jpg'
import Footer from './Footer'
import api from './api'
const Home = () => {
  return (
     <>
<Navbar/>
<div className='title-section'>
    <h4 className="mt-3">Online Tourism Guidance System</h4>
</div>
<div className='first-section mt-5'>
    <div className='image'>
        <figure>
        <img src='https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='tourist'></img>
        </figure>
    </div>
    <div className='content-section'>
         <h6 className='mt-3'>A tourism or travel website serves as an information hub for prospective travelers planning a getaway. Today, people travel for a range of experiences—babymoons, staycations, voluntourism or bleisure—you name it. So, provide as much relevant information as possible to help users plan their trips.</h6>
         <h4 className='mt-3'>Online Tourism website for Guiding People to visit different Places with enthusiasm and excitement...</h4>
         <div className='visitbtns mt-5'>
            <button type='button' className='go-btn'>Explore</button>
            <button type='button' className='go-btn mx-5'>Check Now !</button>
         </div>
    </div>
</div>
<div className='container-fluid Featured-section mt-5'>
        <div className='sub'>
            <h4>TOURISM</h4>
            <h6>Get Enagaing,Attractive and Inovative Tourism Guidance..</h6>
        </div>
        <div className='sub-matter'>
        <img src='https://us.123rf.com/450wm/yganko/yganko1812/yganko181200218/126716285-realistic-3d-model-of-an-airplane-isolated-on-white-background-vector-illustration-eps10.jpg?ver=6' alt='tourist'></img>

            {/* <h4>Tourism Logo</h4> */}
            <div className='logo-matter'>
                <p>Travelling and Exploring different Places enhance you to Experience the wonders across the world,world has lot of different places to visit and make you feel amazed.</p>
                <p>Travelling and Exploring different Places enhance you to Experience the wonders across the world,world has lot of different places to visit and make you feel amazed.</p>   
            </div>
        </div>
        {/* this is the featured section images secion */}

        <div className='logos'>
            <div className='logo1'>
                <figure>
                    <img src={mumbai}alt='image'></img>
                    {/* <figcaption className='move'>Mumbai</figcaption> */}
                </figure>
                {/* <button type='button'>Explore</button> */}
            </div>
            <div className='logo2'>
                <figure>
                    <img src={lord}alt='image' className='class'></img>
                    {/* <figcaption className='range'>Kerala</figcaption> */}
                </figure>
                {/* <button type='button'>Explore</button> */}
            </div>
            <div className='logo3'>
                <figure>
                    <img src={Beach}alt='image' className='class'></img>
                    {/* <figcaption className='move'>Chennai</figcaption> */}
                </figure>
                {/* <button type='button'>Explore</button> */}
            </div>
        </div>
    </div>
    <Footer/>
     </>
  )
}

export default Home