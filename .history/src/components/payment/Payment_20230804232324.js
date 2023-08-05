import React from "react"
import {useDispatch, useSelector} from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { CartItemPayment } from "./CartItemPayment"
import './index.css'
export function Payment({login}) {
    const navigate = useNavigate() 
    const {cart, btnCart} = useSelector(state => state.product)
    const totalPrice = () => {
        let price = 0
        cart.forEach(item => price += item.price * item.quantity)
        return Math.round(price * 0.9 * 100) / 100
    }
    return (
        <div className="payment-page text-center m-5-auto flex justify-center">
            <div className="border-2 rounded-lg border-black w-max h-fit">
            <h2 className="p-2">Your Order</h2>
            <div className="flex flex-row justify-center border-y-2">
                <form className="border-none bg-none m-0" action="/success">
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
                    <p className='flex justify-start pt-2'>
                        <input className='' type="radio" name="checkbox" defaultChecked/> <span>Cash On Delivery</span>
                    </p>
                    <p className='flex justify-start py-2'>
                        <input className='' type="radio" name="checkbox" /> <span>Card</span>
                    </p>

                    <p>
                        <button id="sub_btn" type="submit">Buy</button>
                    </p>
                </form>
                <div className={`border-l-2 px-4 ${cart.length > 2 ? 'box-item' : ''}`}>
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
                <button className="text-lg p-2" onClick={() => navigate(-1)}>Back</button>
            </footer>
            </div>
        </div>
    )
}
