import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {toggleLogin} from "../../redux/products/products.slice"
import './index.css'


export function LoginPage() {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.product)
    const toggleLog = () =>  {
        const userNameInput = document.getElementById('username')
        const passwordInput = document.getElementById('password')
        if(userNameInput.value === user.username && passwordInput === user.password) {
            dispatch(toggleLogin(true))
        }else {
            alert('don true')
        }
    }

    return (
        <div className="login-page text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/private">
                <p>
                    <label>Username or email address</label><br/>
                    <input className='shadow-md' id='username' type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input className='shadow-md' id='password' type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" onClick={toggleLog}>Login</button>
                </p>
            </form>
            <footer>
                <p >First time? <Link to="/register" className='font-semibold shadow-md'>Create an account</Link>.</p>
                <p><Link className='font-semibold shadow-md' to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
