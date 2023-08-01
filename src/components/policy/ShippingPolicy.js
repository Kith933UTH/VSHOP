import React from "react"
import { Link } from "react-router-dom"
import { Header } from "../header/Header"
import { Policy } from "./Policy"
export function ShippingPolicy() {
    return (
        <>
            <Header />

            <div className='bg-white in-h-fit mx-auto py-2 text-sm sm:text-base min-h-screen fixed z-10 inset-x-0 inset-y-0 mt-[50px] flex justify-center'>
            <div className="max-w-[1240px] mt-4"> 
                <div className="flex justify-around ">
                <Link className='text-lg font-medium ' to='/return-policy'>
                    RETURN POLICIES
                </Link>
                <Link className='text-lg font-medium' to='/warranty-policy'>
                    WARRANTY POLICIES
                </Link>
                <Link className='text-lg font-medium rounded p-1 bg-black text-white' to='/shipping-policy'>
                    SHIPPING POLICIES
                </Link>
                </div>
                <div className="font-medium text-xl mt-[16px]">
                    Applicable customers:
                </div>
                    - Shipping policy is applied to all customers who buy VShop products through VShop's official online shopping channels.
                <br />
                <br />

                <div className="font-medium text-xl">
                    Scope of application:
                </div>
                    - Applies to all orders nationwide.
                <br />
                <br />

                <div className="font-medium text-xl">
                Delivery fee:
                </div>
                - Free delivery for bills over 1.5 million VND already transferred in advance.
                <br />
                - Delivery fee applies to invoices under VND 1.5 million:
                <br />
                    + In Ho Chi Minh City: Apply shipping fee of 20,000 VND/order for orders under 1.5 million VND by advance transfer.
                <br />
                    + In the provinces: Apply shipping fee of 30,000 VND/order for orders under 1.5 million VND by advance transfer.
                <br />
                - Apply to receive payment goods for customers in Ho Chi Minh City. The customer pays the shipping cost to the carrier when receiving the goods.
                <br />
                <br />

                <div className="font-medium text-xl">
                Delivery time:
                </div>
                - In Ho Chi Minh City: 1-2 days since the order is confirmed.
                <br />
                - In major cities: 2-4 days since the order is confirmed.
                <br />
                - At district, commune, remote areas: 3 - 6 days since the order is confirmed.
                <br />
            </div>
            </div>
        </>
    )
}
