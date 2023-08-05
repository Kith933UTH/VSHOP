import React from "react"
import { useNavigate } from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"
export function Success({login}) {
    const navigate = useNavigate() 

    return (
        <div className="payment-page text-center m-5-auto flex justify-center">
            <div className="border-2 rounded-lg border-black w-max h-fit">
            <FontAwesomeIcon icon={faCircleCheck} className='text-xl red'/>
            <h2 className="p-2">Chúng tôi sẽ liên hệ bạn sớm nhất</h2>
            <div className="flex flex-row justify-center border-y-2">
            </div>
            <footer>
                <button className="text-lg p-2" onClick={() => navigate(-2)}>Back</button>
            </footer>
            </div>
        </div>
    )
}
