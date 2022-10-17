import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const LogIn = () => {
    return (
        <div className='form-container'>
            <form >
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