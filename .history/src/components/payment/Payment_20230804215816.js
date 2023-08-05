import React from "react"
import {useDispatch, useSelector} from "react-redux"
import { Link } from "react-router-dom"
import { CartItemPayment } from "./CartItemPayment"
export function Payment({login}) {
    const {cart, btnCart} = useSelector(state => state.product)
    const totalPrice = () => {
        let price = 0
        cart.forEach(item => price += item.price * item.quantity)
        return Math.round(price * 0.9 * 100) / 100
    }
    return (
        <div className="register-page text-center m-5-auto flex justify-center">
            <div className="border-2 rounded border-black w-max h-fit">
            <h2>Payment</h2>
            <div className="flex flex-row justify-center">
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
                <div className={`${cart.length > 2 ? 'box-item' : ''}`}>
                    {cart.map(item => <CartItemPayment key={item.id} item={item}/>)}
                    <div className='flex justify-center sm:justify-end pt-4'>
                        <div className='w-fit rounded-xl flex flex-col justify-between items-center sm:flex-row'>
                            <div className='mr-0 sm:mr-4 font-semibold'>
                                <span className='mr-2 text-base sm:text-xl'>Order total:</span>
                                <span className='text-base sm:text-xl'>{totalPrice()} $</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <p><Link to="/">Back to Cart</Link>.</p>
            </footer>
            </div>
        </div>
    )
}
