import React from "react"
import {useDispatch} from "react-redux"
import {decrementProductInCart, incrementProductInCart} from "../../redux/products/products.slice"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus, faMinus, faTrashCan} from "@fortawesome/free-solid-svg-icons"

export function CartItemPayment({item}) {
    const dispatch = useDispatch()

    const incrementProduct = id => dispatch(incrementProductInCart(id))
    const decrementProduct = id => dispatch(decrementProductInCart(id))

    const sum = Math.round(item.price * item.quantity  * 0.9 * 100) / 100
    const options = [item.brand, item.size, item.color]
    const option = ` (${options.filter(item => item).join(' - ')})`

    return (
        <div className='py-4 px-2 sm:px-4 border-b'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-[60px]' src={item.image} alt={item.title}/>
                    <span className='pl-3 pt-2 text-sm sm:text-lg'>{item.title.concat(option)}</span>
                </div>
            </div>
            <div className='flex justify-between items-center relative mt-4 sm:mt-2 sm:justify-end'>
                <div className='relative bottom-0 right-0 text-lg sm:absolute sm:right-[300px]'>${item.price}</div>
                <div className='relative right-0 bottom-0 sm:right-[140px] sm:absolute'>
                    <span className='mx-2 px-2 py-1 rounded-md sm:px-4 sm:py-2'>x {item.quantity}</span>
                </div>
                <span className='text-lg'>${sum}</span>
            </div>
        </div>
    )
}
