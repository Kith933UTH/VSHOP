import React from "react"
import { useNavigate } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
export function Success() {
    const navigate = useNavigate() 

    return (
        <div className="payment-page text-center m-5-auto flex justify-center">
            <div className="border-black w-max h-fit">
            <FontAwesomeIcon icon={faCircleCheck} className='text-7xl text-green-400'/>
            <h2 className="py-6">We will contact you as soon as possible to confirm your order.</h2>
            <footer>
                <button className="text-2xl p-2 border-4 rounded-lg font-semibold" onClick={() => navigate(-2)}>Finish</button>
            </footer>
            </div>
        </div>
    )
}
