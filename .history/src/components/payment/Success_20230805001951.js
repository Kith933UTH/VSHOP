import React from "react"
import { useNavigate } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
export function Success({login}) {
    const navigate = useNavigate() 

    return (
        <div className="payment-page text-center m-5-auto flex justify-center">
            <div className="border-black w-max h-fit">
            <FontAwesomeIcon icon={faCircleCheck} className='text-7xl text-green-400'/>
            <h2 className="p-2">We will contact you as soon as possible to confirm your order.</h2>
            <div className="flex flex-row justify-center">
            </div>
            <footer>
                <button className="text-2xl p-2" onClick={() => navigate(-2)}>Finish</button>
            </footer>
            </div>
        </div>
    )
}
