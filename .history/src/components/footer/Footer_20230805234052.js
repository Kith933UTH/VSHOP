import React from "react"
import { Contact } from "../contact/Contact"
import { Policy } from "../policy/Policy"
export function Footer() {
    return (
        <footer id="main-footer" className='bg-black text-white in-h-fit'>
            <Contact />
            <Policy />
            <div className='flex justify-center flex-col items-center my-4'>
                    <p className='text-center'>© Copyright 2023 VShop | All Rights Reserved</p>
                    <a href='#' className='hover:text-gray-300 transition' >
                        Created by VShop
                    </a>
                </div>
        </footer>
    )
}
