import React, { useState } from 'react';
import './CSS/LogingSignup.css';

const LoginSignup = () => {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    });

    const login = async () => {
        console.log("Login Function executed", formData);
    };

    const signup = async () => {
        console.log("Signup Function executed", formData);
    };

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>{state}</h1>
                <div className='loginsignup-fields'>
                    {state === "Sign Up" ? (
                        <input
                            name='username'
                            value={formData.username}
                            onChange={changeHandler}
                            type="text"
                            placeholder='Your Name'
                        />
                    ) : null}
                    <input
                        name='email'
                        type="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder='Email Address'
                    />
                    <input
                        name='password'
                        type="password"
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder='Password'
                    />
                </div>
                <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
                {state === "Login" ? (
                    <p className='loginsignup-login'>Don't have an account? <span onClick={() => setState("Sign Up")}>Sign Up here</span></p>
                ) : (
                    <p className='loginsignup-login'>Already have an account? <span onClick={() => setState("Login")}>Login here</span></p>
                )}
                <div className='loginsignup-agree'>
                    <input type="checkbox" name='' id='' />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
