import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'


export function LoginPage() {
    return (
        <div className="login-page text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/">
                <p>
                    <label>Username or email address</label><br/>
                    <input className='shadow-md' type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input className='shadow-md' type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p >First time? <Link to="/register" className='font-semibold shadow-md'>Create an account</Link>.</p>
                <p><Link className='font-semibold shadow-md' to="/home">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
