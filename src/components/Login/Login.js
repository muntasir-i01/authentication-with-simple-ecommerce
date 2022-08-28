import React from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const [email, setEmail] = useAuthState('');
    const [password, setPassword] = useAuthState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePassBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='font-title'>Please Login</h2>
                <form onSubmit={handleUserSignIn} action="" className='form'>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" required id="" />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassBlur} type="password" name="password" required id="" />
                    </div>

                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p style={{ color: 'red' }}>{error?.message}</p>
                {
                    loading && <p>Loading....</p>
                }
                <p>New to Ema-John? <Link to="/signup" className='caa'>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;