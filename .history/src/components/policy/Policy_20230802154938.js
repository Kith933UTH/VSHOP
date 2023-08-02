import React from "react"
import { Link } from "react-router-dom"
export function Policy() {
    return (
        <div className='text-white in-h-fit max-w-[1240px] mx-auto py-2 text-sm sm:text-base flex justify-around items-cente'>
            <Link className='text-lg font-medium text-center' to='/return-policy'>
                RETURN POLICIES
            </Link>
            <Link className='text-lg font-medium text-center' to='/warranty-policy'>
                WARRANTY POLICIES
            </Link>
            <Link className='text-lg font-medium text-center' to='/shipping-policy'>
                SHIPPING POLICIES
            </Link>
        </div>
    )
}
