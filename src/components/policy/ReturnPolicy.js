import React from "react"
import { Link } from "react-router-dom"
import { Header } from "../header/Header"
import { Policy } from "./Policy"
export function ReturnPolicy() {
    return (
        <>
            <Header />

            <div className='bg-white in-h-fit mx-auto py-2 text-sm sm:text-base min-h-screen fixed z-10 inset-x-0 inset-y-0 mt-[50px] flex justify-center'>
            <div className="max-w-[1240px] mt-4"> 
                <div className="flex justify-around ">
                <Link className='text-lg font-medium rounded p-1 bg-black text-white' to='/return-policy'>
                    RETURN POLICIES
                </Link>
                <Link className='text-lg font-medium' to='/warranty-policy'>
                    WARRANTY POLICIES
                </Link>
                <Link className='text-lg font-medium' to='/shipping-policy'>
                    SHIPPING POLICIES
                </Link>
                </div>
                <div className="font-medium text-xl mt-[16px]">
                    Applicable policy:
                </div>
                - Exchange / Return at the store of purchase.
                <br />
                - New original price products are exchanged/returned to another product. The total value of the items you want to exchange / return must be of the same or greater value as the returned item.
                <br />
                - Products are not included in the promotion.
                <br />
                - Products not applicable for exchange/return include: underwear, socks, accessories.
                <br />
                - Customers can exchange goods if the product is defective due to the manufacturer. Products eligible for exchange are products that meet the product exchange/return conditions* and are not on the list of non-exchangeable products.
                <br />
                <br />

                <div className="font-medium text-xl">
                    Product exchange/return conditions:
                </div>
                - Exchange / Return within 03 days from the date the customer receives the product
                <br />
                - The product is in its original condition upon receipt, with tags and labels intact.
                <br />
                - The product has not been laundered or dirty, damaged, unused.
                <br />
                - The product has an invoice for payment.
            </div>
            </div>
        </>
    )
}
