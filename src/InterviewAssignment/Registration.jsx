import React, { useRef, useState } from 'react'
import Login from './Login'
import 'bootstrap/dist/css/bootstrap.min.css'

const Registration = () => {
    let [login, setLogin] = useState(true)
    let name = useRef()
    let email = useRef()
    let password = useRef()
    let phone = useRef()

    let HandleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("Name", (name.current.value))
        localStorage.setItem("Email", (email.current.value))
        localStorage.setItem("Password", (password.current.value))
        localStorage.setItem("Phone", (phone.current.value))
        console.log("Data saved in local storage successfully")

        setLogin(!login)

    }

    let HandleClick = () => {
        setLogin(!Login)
    }

    return (
        <>
            {login ? (
                <div className='bg-secondary m-auto w-75 rounded-5'>
                    <form action="" className='p-4' onSubmit={HandleSubmit} style={{marginTop:"100px"}} >

                        <h1 className='text-center mb-4'>Registration</h1>
                        <div className='form-group w-50 d-grid place-items-center m-auto '>
                            <label className='text-light ' htmlFor="">Name</label>
                            <input type="text" required placeholder='Enter your fullname' ref={name} className='form-control mb-2' name='name' />
                            <label className='text-light ' htmlFor="">Email</label>
                            <input type="email" required placeholder='Enter your email' ref={email} className='form-control mb-2' name='email' />
                            <label className='text-light  ' htmlFor="">Password</label>
                            <input type="password" required placeholder='Enter your password' ref={password} className='mb-2 form-control' name='password' />
                            <label className='text-light ' htmlFor="">Phone No</label>
                            <input type="phone" required placeholder='Enter your phone' ref={phone} className='form-control mb-2' name='phone' /><br />
                            <div className='position-realtive '>
                                <button type="submit" className='btn btn-success w-50 me-4 '>Registration</button>
                                <small className='btn text-decoration-none text-light fs-5' onClick={HandleClick}>Already Registered? {"  "} Login Now</small>
                            </div>

                        </div>

                    </form>
                </div>
            ) : (<Login />)}
        </>
    )
}

export default Registration