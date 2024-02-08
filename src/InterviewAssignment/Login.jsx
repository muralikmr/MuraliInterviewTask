 
import React, { useRef, useState } from 'react'
import Fetching from './Fetching'

const Login = () => {
  let [fetch,setfetch]=useState(true)
  let email=useRef()
  let password=useRef()
  let Localemail=localStorage.getItem("Email")
  let Localpassword=localStorage.getItem("Password")
  let HandleSubmit=(e)=>{
      e.preventDefault()
      if((email.current.value===Localemail) && (password.current.value===Localpassword) ){
      setfetch(!fetch)
  }else{
    alert("password or email incorrect")
  }
}
  return (
    <>
    { fetch ? (
        <div  className='bg-secondary m-auto w-75 rounded-5'>
          <form  className='p-4'  action="" onSubmit={HandleSubmit} style={{marginTop:"100px"}}>
            <h2 className='text-center mb-4'>Hi,<h1 className='text-warning text-center mb-4'>{localStorage.getItem("Name")}</h1> Welcome to Login Page</h2>
            <div  className='form-group w-50 d-grid place-items-center m-auto '>
              <label htmlFor="">Email :</label>
              <input type="email" placeholder='Enter email' ref={email} name='email' className='form-control' />
              <label htmlFor="">Password :</label>
              <input type="password" placeholder='Enter password' ref={password} name='password' className='form-control' /><br />
              <button type="submit" className='btn btn-outline-warning w-50 text-center'>Login</button>
            </div>
          </form>
        </div>
        ) : (<Fetching setfetch={setfetch} />)}
    </>
  )
}

export default Login