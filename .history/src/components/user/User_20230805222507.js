import React from "react"
import {useSelector} from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { OrderItem } from "./OrderItem"

export function User() {
    const navigate = useNavigate() 
    const {cart, order} = useSelector(state => state.product)
    const totalPrice = (items) => {
        let price = 0
        items.forEach(item => price += item.price * item.quantity)
        return Math.round(price * 100) / 100
    }

    return (
        <>
        <div className="text-2xl font-medium text-center py-4">ALL ORDER</div>
        <div className={`min-w-[400px] min-h-screen flex flex-col items-center ${cart.length > 2 ? 'box-item' : ''}`}>
            {!order
            ? 'No order yet'
            : order.map((items, index) => 
            <div key={index} className="border-2 rounded border-black mb-10 w-4/5">
                <div className="text-2xl font-medium"> Order {index + 1} </div>
                {items.map(item => <OrderItem key={item.id} item={item}/>)}
                <div className='mr-0 sm:mr-4 font-semibold'>
                    <span className='mr-2 text-base sm:text-xl'>Total:</span>
                    <span className='text-base sm:text-xl'>{totalPrice(items)} $</span>
                </div>
            </div>
            )}
        </div>
        <Link to="/">Back to HomePage</Link>
        </>
    )
}
