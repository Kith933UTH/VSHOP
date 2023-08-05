import React from "react"

export function OrderItem({item}) {

    const sum = Math.round(item.price * item.quantity  * 100) / 100
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
                <div className=' text-lg sm:absolute sm:right-[300px]'>${item.price}</div>
                <div className=' sm:right-[140px] sm:absolute'>
                    <span className='mx-2 px-2 py-1 rounded-md sm:px-4 sm:py-2'>x {item.quantity}</span>
                </div>
                <span className='text-lg'>${sum}</span>
            </div>
        </div>
    )
}
