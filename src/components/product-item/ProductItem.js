import React, {useContext} from "react"
import {useDispatch, useSelector} from "react-redux"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {addProductToCart} from "../../redux/products/products.slice"
import {faCartShopping,faCircleCheck,faCheck, faStar} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom"
import {Context} from "../../context/context"



export function ProductItem({product, login}) {
    const {cart} = useSelector(state => state.product)
    const contextId = useContext(Context)
    const isCart = !!cart.find(el => el.id === product.id)
    const dispatch = useDispatch()

    const addToCart = (event) => {
        event.preventDefault()
        dispatch(addProductToCart(product))
    }

    const clickHandler = (productId) => {
        contextId.id = productId
    }

    const countStar = rating => {
        const arr = []
        const ratingRound = Math.round(rating)
        for (let i = 0; i < ratingRound; i++) {
            arr.push(i)
        }
        return arr.map(star => <FontAwesomeIcon key={star} className='text-yellow-500' icon={faStar} />)
    }

    return (
        <>
        {login ? 
            <Link to={`private/products/${product.id}`} onClick={() => clickHandler(product.id)} className='w-[300px] h-[400px] shadow-md mt-[10px] border relative rounded-lg productItem transition-all duration-300 sm:mr-[5px] sm:ml-[5px] items-center '>
            <img className='w-[100px] m-auto mt-[50px]' src={product.image} alt={product.title}/>
            <div className='absolute left-0 right-0 top-[250px] text-center'>{product.title}</div>
            <div className='absolute left-0 right-0 bottom-[30px] flex justify-between items-center'>
                {/* <span className='ml-4 text-xl'>${product.price}</span> */}
                <div className="flex ml-4">
                    <p className='my-4 text-xl line-through mr-4'>${product.oldPrice}</p>
                    <p className='my-4 text-xl'>${product.price}</p>
                </div>
                <button onClick={addToCart} disabled={isCart}>
                    {isCart
                        ? <div className='relative'>
                            <FontAwesomeIcon icon={faCartShopping} className='text-2xl mr-6'/>
                            <sup><FontAwesomeIcon icon={faCircleCheck} className='absolute right-[18px] text-[#00a046] bg-white rounded-full'/></sup>
                        </div>
                        : <FontAwesomeIcon icon={faCartShopping} className='mr-6 text-2xl'/>
                    }
                </button>
            </div>
            <div className='flex justify-start absolute left-0 right-0 bottom-2 text-center justify-around items-center'>
                <div className='mr-4'>
                    <span className='mr-2 text-base font-semibold'>{product.rating.rate}</span>
                    {countStar(product.rating.rate)}
                </div>
                <span className='cursor-pointer text-indigo-600 text-base font-medium hover:text-indigo-500 transition'>{product.rating.count} reviews</span>
            </div>
        </Link>
        : 
        <Link to={`/products/${product.id}`} onClick={() => clickHandler(product.id)} className='w-[300px] h-[400px] shadow-md mt-[10px] border relative rounded-lg productItem transition-all duration-300 sm:mr-[5px] sm:ml-[5px] items-center '>
        <img className='w-[100px] m-auto mt-[50px]' src={product.image} alt={product.title}/>
        <div className='absolute left-0 right-0 top-[250px] text-center'>{product.title}</div>
        <div className='absolute left-0 right-0 bottom-[30px] flex justify-between items-center'>
            {/* <span className='ml-4 text-xl'>${product.price}</span> */}
            <div className="flex ml-4">
                <p className='my-4 text-xl line-through mr-4'>${product.oldPrice}</p>
                <p className='my-4 text-xl'>${product.price}</p>
            </div>
            <button onClick={addToCart} disabled={isCart}>
                {isCart
                    ? <div className='relative'>
                        <FontAwesomeIcon icon={faCartShopping} className='text-2xl mr-6'/>
                        <sup><FontAwesomeIcon icon={faCircleCheck} className='absolute right-[18px] text-[#00a046] bg-white rounded-full'/></sup>
                    </div>
                    : <FontAwesomeIcon icon={faCartShopping} className='mr-6 text-2xl'/>
                }
            </button>
        </div>
        <div className='flex justify-start absolute left-0 right-0 bottom-2 text-center justify-around items-center'>
            <div className='mr-4'>
                <span className='mr-2 text-base font-semibold'>{product.rating.rate}</span>
                {countStar(product.rating.rate)}
            </div>
            <span className='cursor-pointer text-indigo-600 text-base font-medium hover:text-indigo-500 transition'>{product.rating.count} reviews</span>
        </div>
    </Link> 
        }
    </>
    )
}
