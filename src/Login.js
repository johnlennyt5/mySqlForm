import React, { useState } from "react";
import axios from 'axios';

export default function Login() {
    const [formData, setFormData] = useState({ email: '', password: '' });

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:8080/login', formData)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    }

    return (
        <div className='login-container' style={{ backgroundColor: 'brown', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className='login-form' style={{ backgroundColor: 'white', padding: '20px' }}>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='Enter Email' className='form-control' id="email" name="email" value={formData.email} onChange={handleInputChange} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='Enter Password' className='form-control' id='password' name="password" value={formData.password} onChange={handleInputChange} />
                    </div>
                    <button className='btn btn-success'>Login</button>
                </form>
            </div>
        </div>
    );
}
