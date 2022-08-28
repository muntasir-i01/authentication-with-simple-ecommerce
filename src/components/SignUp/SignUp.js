import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }


    //event handler
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePassBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassBlur = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Password didn't match");
            return;
        }

        if (password.length < 6) {
            setError("Password must be 6 character longer");
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <form onSubmit={handleCreateUser} action="" className='form'>
                    <h2 className='font-title'>Please Sign Up</h2>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required id="" />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassBlur} type="password" name="password" required id="" />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPassBlur} type="password" name="password" required id="" />
                    </div>

                    <p style={{color:'red'}}>{error}</p>

                    <input className='form-submit' type="submit" value="SignUp" />
                </form>

                <p>Already Have An Account? <Link to="/login" className='caa'>Go to Login Page</Link></p>
            </div>
        </div>
    );
};

export default SignUp;