import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <form action="" className='form'>
                    <h2 className='font-title'>Please Login</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>

                    <input className='form-submit' type="submit" value="Login" />
                </form>

                <p>New to Ema-John? <Link to="/signup" className='caa'>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;