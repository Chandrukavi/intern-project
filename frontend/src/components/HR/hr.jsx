import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // New state for toggling password visibility
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/signup', { email, password, username })
            .then(result => {
                console.log(result);
                // Navigate to login page after successful signup
                navigate('/Loginuser');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='Container-Form'>
            <form onSubmit={handleSubmit}>
                <h1 className='Head-SignUp'>Greetings HR</h1>
                <div className='Form-Type'>
                    <label className='Label-Type'>Enter Name:</label>
                    <input 
                        className='input-Type' 
                        type="text" 
                        placeholder='username' 
                        name='username' 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </div>          
                <div className='Form-Type'>
                    <label className="Label-Type">Enter Email:</label>
                    <input 
                        className='input-Type' 
                        type="email" 
                        placeholder='Email' 
                        name='email' 
                        onChange={(e) => setEmail(e.target.value)} 
                    />   
                </div>
                <div className='Form-Type'>
                    <label className="Label-Type">Enter password:</label>
                    <input 
                        className='input-Type' 
                        type={showPassword ? "text" : "password"} 
                        placeholder='password' 
                        name='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}>Show Password</button> 
                </div>
                <button className='Type-btn' type='submit'>Sign up</button>
                <div className='SignUp-Footer'>
                    <p className='Footer-P'>Already you have an Account:</p>
                    <Link to='/Loginuser' className='Btn-Login'>Login</Link>
                </div>
            </form>
           
        </div>
    );
}

export default Signup;
