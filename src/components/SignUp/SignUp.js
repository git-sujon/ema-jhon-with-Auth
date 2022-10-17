import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './SignUp.css'

const SignUp = () => {
    const {createUser} =useContext(AuthContext)
    const [passError,setPassError ]= useState('')

    const inputFormHandler = event => {
        event.preventDefault()
        const form = event.target
        const email= form.email.value
        const password= form.password.value
        const confirmPassword= form.confirmPassword.value
        console.log(email, password, confirmPassword)
        
        if(password.length < 6 ) {
            return setPassError('Enter at least six characters')  
        }

        if(password !== confirmPassword) {
           return setPassError("Password Didn't match")
        }

        createUser(email, password)
        .then(res => {
            console.log(res.user)
            form.reset()
        })
        .catch(error=> {
            console.error(error)
            setPassError(error.message.split('/')[1].split(')')[0])
        })


    }




    return (
        <div className='form-container signup-container'>
            <form onSubmit={inputFormHandler}>
                <div>
                    <h2 className='form-title'>Sign Up</h2>
                </div>
                <div className="form-control">
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="email" id="" />
                </div>
                <div className="form-control">
                    <label htmlFor="Email">Password</label>
                    <input type="password" name="password" id="" />
                </div>
                <div className="form-control">
                    <label htmlFor="Email">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="" />
                </div>
                <div>
                    <input className='login-btn' type="submit" value="Sign Up" />
                </div>
                <p className='form-text'>Already have an account? <Link className='form-link' to='/login'>Login</Link></p>
                <p className='text-error'>{passError}</p>
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

export default SignUp;