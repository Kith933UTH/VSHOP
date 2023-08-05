import React from "react"

export function OrderItem({item}) {

    const sum = Math.round(item.price * item.quantity  * 100) / 100
    const options = [item.brand, item.size, item.color]
    const option = ` (${options.filter(item => item).join(' - ')})`

    

    return (
            <div className='flex justify-between py-4 px-2 sm:px-4 border-b w-full'>
                <div className='flex w-full justify-between'>
                    <div className="flex"> 
                        <img className='w-[60px]' src={item.image} alt={item.title}/>
                        <div>
                            <span className='pl-3 pt-2 text-sm sm:text-lg block'>{item.title.concat(option)}</span>
                            <div className='inline-block text-lg pl-3'>${item.price}</div>
                            <span className='pl-4'>   x   {item.quantity}</span>
                        </div>
                    </div>
                    <span className='text-lg flex items-end'>${sum}</span>
                </div>
            {/* <div className='flex justify-between items-center relative mt-4 sm:mt-2 sm:justify-end'>
                <span className='text-lg'>${sum}</span>
            </div> */}
        </div>
    )
}
