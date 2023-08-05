import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { useNavigate} from "react-router-dom"
import { OrderItem } from "./OrderItem"
import { toggleLogin } from "../../redux/products/products.slice"

export function User() {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.getElementById('main-footer').style.display = 'none'
      }, [])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {order} = useSelector(state => state.product)
    const totalPrice = (items) => {
        let price = 0
        items.forEach(item => price += item.price * item.quantity)
        return Math.round(price * 100) / 100
    }
    const handleLogOut = () => {
        dispatch(toggleLogin(false))
        document.getElementById('main-footer').style.display = 'block'
        navigate('/')
    } 
    const handleBack = () => {
        document.getElementById('main-footer').style.display = 'block'
        navigate('/')
    }
    console.log(order)

    return (
        <div>
        <div className="text-2xl font-medium text-center py-4">ALL ORDER</div>
        <div className={`min-w-[400px] min-h-screen flex flex-col items-center`}>
            {!(order === [])
            ? <div className="pb-4">No order yet</div>
            : order.map((items, index) => 
            <div key={index} className="border-2 rounded border-black mb-10 w-4/5">
                <div className="text-2xl font-medium pl-2 border-b-2"> Order {index + 1} </div>
                {items.map(item => <OrderItem key={item.id} item={item}/>)}
                <div className='mr-0 sm:mr-4 font-semibold flex justify-end'>
                    <span className='text-base sm:text-xl my-2'>Total:  </span>
                    <span className='text-base sm:text-xl my-2 ml-4'>{totalPrice(items)} $</span>
                </div>
            </div>
            )}
            <div className="flex pb-8">
                <button  className="w-24 mr-8" onClick={handleBack}>Back to HomePage</button>
                <button id="sub_btn" onClick={handleLogOut}>Log out</button>
            </div>
        </div>
        </div>
    )
}
