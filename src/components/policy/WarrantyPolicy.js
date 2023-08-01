import React from "react"
import { Link } from "react-router-dom"
import { Header } from "../header/Header"
import { Policy } from "./Policy"
export function WarrantyPolicy() {
    return (
        <>
            <Header />

            <div className='bg-white in-h-fit mx-auto py-2 text-sm sm:text-base min-h-screen fixed z-10 inset-x-0 inset-y-0 mt-[50px] flex justify-center'>
            <div className="max-w-[1240px] mt-4"> 
                <div className="flex justify-around ">
                <Link className='text-lg font-medium ' to='/return-policy'>
                    RETURN POLICIES
                </Link>
                <Link className='text-lg font-medium rounded p-1 bg-black text-white' to='/warranty-policy'>
                    WARRANTY POLICIES
                </Link>
                <Link className='text-lg font-medium' to='/shipping-policy'>
                    SHIPPING POLICIES
                </Link>
                </div>
                <div className="font-medium text-xl mt-[16px]">
                Conditions ARE warranted, maintenance free:
                </div>
                - All products purchased at VShop have a discount value of less than 50%
                <br />
                - For products with a discount of 50% or more, KShop still accepts repairs, but the customer bears the cost, the staff will notify the customer based on the "Repair quotation" provided by the Accounting department. The cashier collects the repair fee and enters the correct software.
                <br />
                - Product purchase time is less than or equal to 12 months from the date of purchase for defects caused by manufacturers, raw materials.
                <br />
                - Products you want to design, add more details (charges apply).
                <br />
                <br />

                <div className="font-medium text-xl">
                Conditions AREN'T warranted, maintenance free:
                </div>
                - Errors due to time, the process of using, if corrected, will be charged.
                <br />
                - Requirements to change the original design of the product
                <br />
                - Using the product not according to the instructions.
                <br />
                - The product has an invoice for payment.
                <br />

                <div className="font-medium text-xl">
                For example:
                </div>
                + Soaking in water for too long causes the fabric to fade.
                <br />
                + Common washing, fading from other products.
                <br />
                + Wool, fleece wash with water but not dry cleaning according to the instructions for use.
                <br />
                + Natural silk, tensene must not be machine washed, must not be exposed to the sun, otherwise the fabric will be discolored, causing brittleness and easy tearing.
                <br />
                + Products that are damaged during use such as dirty, broken ......
                <br />
                
                <div className="font-medium text-xl">
                Note:
                </div>
                - Warranty period for common defects in 3 days. In other complicated cases, the staff will work with the relevant department and then notify the customer of the exact time
                <br />
                - All shipping costs incurred are borne by the customer.
            </div>
            </div>
        </>
    )
}
