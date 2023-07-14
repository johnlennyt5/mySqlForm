import React, { useState } from "react";
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:8080/login', { email, password })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div className='login-container' style={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className='login-form' style={{ backgroundColor: 'white', padding: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='Enter Email' className='form-control' id="email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='Enter Password' className='form-control' id='password' onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className='btn btn-success'>Login</button>
                </form>
            </div>
        </div>
    );
}
