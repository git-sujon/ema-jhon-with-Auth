import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css'

const LogIn = () => {

    const [error,setError] = useState('')
    const {signInUser} =useContext(AuthContext)
    const navigate= useNavigate()
    const location =useLocation()
    console.log(location)
    const from= location.state?.from?.pathname || '/'
    console.log(from)

    const signInHandler =(event) => {
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password= form.password.value
        console.log(email,password)
        signInUser(email, password)
        .then(res => {
            console.log(res)
            form.reset()
            navigate(from, {replace:true})
        })

        .catch(error=>{
            console.error(error)
            setError(error.message.split('/')[1].split(')')[0])
        })


    }
    
    return (
        <div className='form-container'>
            <form onSubmit={signInHandler}>
                <div>
                    <h2 className='form-title'>Login</h2>
                </div>
                <div className="form-control">
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" id="" />
                </div>
                <div className="form-control">
                    <label htmlFor="Email">Password</label>
                    <input type="password" name="password" id="" />
                </div>
                <div>
                    <input className='login-btn' type="submit" value="Login" />
                </div>
                <p className='form-text'>New to Ema-john? <Link className='form-link' to='/signup'>Create New Account</Link></p>
                <p className='text-error'>{error}</p>
            </form>
            <div className='login-divider'>
                <hr />Or<hr />
            </div>
            <div>
                <input className='login-btn google-btn' type="submit" value="Continue with Google" />
            </div>
        </div>
    );
};

export default LogIn;