import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import {useState} from 'react-router-dom'
// import './App.css'

const Login = () => {
    const [login,setLogin] = useState({
        email : "",
        password : ""
    })
    const navigate = useNavigate()
    const inputchange = (e) => {
    // e.target.value
    const name = e.target.name
    const value = e.target.value
    setLogin((prevdata) => {
        if(name === "email"){
            return{
                email : value,
                password : prevdata.password
            }
        }else if(name === "password"){
            return{
                email : prevdata.email,
                password : value
            }
        }
    })
    }
    const senddata = async(event) => {
        event.preventDefault()
        const {email,password} = login
        const res = await fetch('/login',{
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
               email,password
            })
        })
        const data = await res.json()
        // console.log(data.err)
        // console.log(data.message)
        console.log(data.message)
        if(data.err === "plz fill all the fields" || !data){
            alert("fill up all the fields")
        }
        else if(data.err === "invalid credentials"){
            alert("invalid credentials")
        }else{
            alert("user login successful")
            navigate('/Home')
        }
    }
    return(
        <>
        <div className='login'>
         <div className='row'>
                <div className='col-lg-12 col-md-12 col-12 d-flex justify-content-center mt-5'>
                    <h1>Login Page</h1>
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
                                <h4 className='register d-flex justify-content-center mt-3'>Login Your Account</h4>
                                <form className='login account'method='POST'>
                                    {/* <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">UserName</label>
                                        <input type="text" onChange={inputchange} name="name" value={data.name} className="form-control"   aria-describedby="emailHelp" />

                                    </div> */}
                                    <div className="mb-3">
                                        <label for="exampleInputPassword" className="form-label">Email</label>
                                        <input type="email"onChange={inputchange} name="email" value={login.email} className="form-control"   />
                                    </div>
                                    {/* <div className='mb-3'>
                                        <label for="profession" className='form-label'>Profession</label>
                                        <input type="text"onChange={inputchange} name="profession"value={data.profession} className="form-control"  />
                                    </div> */}
                                    {/* <div className='mb-3'>
                                        <label for="phone" className='form-label'>Phone</label>
                                        <input type="Number"onChange={inputchange} name="phone"value={data.phone} className="form-control"   />
                                    </div> */}
                                    <div className='mb-3'>
                                        <label for="password" className='form-label'>Password</label>
                                        <input type="password"onChange={inputchange} name="password" value={login.password} className="form-control" />
                                    </div>
                                    <button type="submit" onClick={senddata} className="btn btn-primary">Login</button>
                                    {/* <p>Already have an account?<NavLink to="/login">Login</NavLink></p> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div className='row'>
                <div className='col-lg-12 col-md-12 col-12 d-flex justify-content-center mt-5'>
                    <div className='box'>
                    {/* <h6>You will redirect to the Home page of this Quiz Website by logging in..</h6> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;