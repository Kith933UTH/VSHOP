import React from "react"
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom"
import { CartItem } from "../cart-shopping/CartItem"
export function Payment({login}) {
    const {cart, btnCart} = useSelector(state => state.product)

    return (
        <div className="register-page text-center m-5-auto">
            <h2>Payment</h2>
            <div className="flex flex-row">
                <form action="/success">
                    <p>
                        <label>Name</label><br/>
                        <input className='shadow-md' type="text" name="name" required />
                    </p>
                    <p>
                        <label>Phone number</label><br/>
                        <input className='shadow-md' type="tel" name="tel" required />
                    </p>
                    <p>
                        <label>Email address</label><br/>
                        <input className='shadow-md' type="email" name="email" required />
                    </p>
                    <p>
                        <label>Address</label><br/>
                        <input className='shadow-md'  type="text" name="address" required />
                    </p>
                    <p className='mb-2'>
                        <input className='shadow-md' type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                    </p>
                    <p>
                        <button id="sub_btn" type="submit">Buy</button>
                    </p>
                </form>
                <div className={`px-1 py-2 sm:py-4 sm:px-6 ${cart.length > 2 ? 'box-item' : ''}`}>
                    {cart.map(item => <CartItem key={item.id} item={item}/>)}
                </div>
            </div>
            <footer>
                <p><Link to="/">Back to Cart</Link>.</p>
            </footer>
        </div>
    )
}
