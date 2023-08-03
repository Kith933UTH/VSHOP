import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export function RegisterPage() {

    return (
        <div className="register-page text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/private">
                <p>
                    <label>Username</label><br/>
                    <input className='shadow-md' type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input className='shadow-md' type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input className='shadow-md'  type="password" name="password" requiredc />
                </p>
                <p className='mb-2'>
                    <input className='shadow-md' type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/home">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
