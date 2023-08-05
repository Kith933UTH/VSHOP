import React from "react"
import {useSelector} from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { CartItemPayment } from "../payment/CartItemPayment"

export function User() {
    const navigate = useNavigate() 
    const {cart, order} = useSelector(state => state.product)
    const totalPrice = () => {
        let price = 0
        cart.forEach(item => price += item.price * item.quantity)
        return Math.round(price * 100) / 100
    }

    return (
        <>
        <Link to="/">Back to HomePage</Link>
        <div className={`min-w-[400px] border-l-2 border-b-2 px-4 pb-4 ${cart.length > 2 ? 'box-item' : ''}`}>
            {order.map((items) => items.map(item => <CartItemPayment key={item.id} item={item}/>))}
            <div className='flex justify-center sm:justify-end pt-4'>
                <div className='w-fit rounded-xl flex flex-col justify-between items-center sm:flex-row'>
                    <div className='mr-0 sm:mr-4 font-semibold'>
                        <span className='mr-2 text-base sm:text-xl'>Order total:</span>
                        <span className='text-base sm:text-xl'>{totalPrice()} $</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
