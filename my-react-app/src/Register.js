import React, { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

const Register = () => {
  const [data,setData] = useState({
    name : "",
    email : "",
    profession : "",
    phone : "",
    password : ""

  })
  const navigate = useNavigate()
    const inputchange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData((prevdata) => {
            if(name === "name"){
                return{
                    name : value,
                    email : prevdata.email,
                    profession : prevdata.profession,
                    phone : prevdata.phone,
                    password : prevdata.password
                }
            }
            if(name === "email"){
                return{
                    name : prevdata.name,
                    email : value,
                    profession : prevdata.profession,
                    phone : prevdata.phone,
                    password : prevdata.password
                }
            }
            if(name === "profession"){
                return{
                    name : prevdata.name,
                    email : prevdata.email,
                    profession : value,
                    phone : prevdata.phone,
                    password : prevdata.password
                }
            }
            if(name === "phone"){
                return{
                    name : prevdata.name,
                    email : prevdata.email,
                    profession : prevdata.profession,
                    phone : value,
                    password : prevdata.password
                }
            }
            if(name === "password"){
                return{
                    name : prevdata.name,
                    email : prevdata.email,
                    profession : prevdata.profession,
                    phone : prevdata.phone,
                    password : value
                }
            }
        })
    }

    const postdata = async(event) => {
         event.preventDefault();
         const{name,email,profession,phone,password} = data
         const res = await fetch('/register',{
            method : 'POST',
            headers : {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,email,profession,phone,password
            })
         })
         const result = await res.json()
        //  console.log(result.status===401 || !result)
        if(result.err === "Fill all the fields"){
            alert("fill up all the fields")
        }else if(result.message === "email already exist"){
            alert("email already exist")
        }else{
            alert("user registration successful")
            navigate('/login')
        }
        //  if(result.err === "Fill all the fields")
    }
    return (
        <>
        <div className='body'>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-12 d-flex justify-content-center mt-5'>
                    <h1>Register Page</h1>
                </div>
                <hr className='mx-auto w-25' />
            </div>
            {/* this is the register header row */}

            <div className='row'>
                <div className='col-lg-12 col-md-12 col-12 shadow w-25 mx-auto'>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-12'>
                            <div className='image-section d-flex justify-content-center'>
                                <i className="fa-solid fa-user user-icon"></i>
                            </div>
                            <div className='content-section'>
                                <h4 className='register d-flex justify-content-center mt-3'><span className='text-white'>Register</span>Your Account</h4>
                                <form className='register account'method='POST'>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label text-white">UserName.....</label>
                                        <input type="text"  onChange={inputchange} name="name" value={data.name} className="form-control"  />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword" className="form-label">Email</label>
                                        <input type="email"   onChange={inputchange} name="email" value={data.email} className="form-control"   />
                                    </div>
                                    <div className='mb-3'>
                                        <label for="profession" className='form-label'>Profession</label>
                                        <input type="text"   onChange={inputchange} name="profession"value={data.profession} className="form-control"  />
                                    </div>
                                    <div className='mb-3'>
                                        <label for="phone" className='form-label'>Phone</label>
                                        <input type="Number"onChange={inputchange} name="phone"value={data.phone} className="form-control"   />
                                    </div>
                                    <div className='mb-3'>
                                        <label for="password" className='form-label'>Password</label>
                                        <input type="password"onChange={inputchange} name="password" value={data.password} className="form-control" />
                                    </div>

                                    <button type="submit" onClick={postdata} className="btn btn-primary">Submit</button>
                                    <p>Already have an account?<NavLink to="/login">Login</NavLink></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Register;