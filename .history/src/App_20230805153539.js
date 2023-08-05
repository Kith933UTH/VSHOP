import React from "react"
// import { useState } from "react"
import {Context} from "./context/context"
import {Route, Routes} from "react-router-dom"
import {HomePage} from "./pages/HomePage"
import {ProductOverView} from "./pages/ProductOverView"
// import {Header} from "./components/header/Header"
import {Footer} from "./components/footer/Footer"
import {BtnScroll} from "./components/btn-scroll/BtnScroll"
import { LoginPage } from "./components/login/LoginPage"
import { RegisterPage } from "./components/login/RegisterPage"
import { PrivatePage } from "./pages/PrivatePage"
import { ProductOverViewPrivate } from "./pages/ProductOverViewPrivate"
import { ReturnPolicy } from "./components/policy/ReturnPolicy"
import { WarrantyPolicy } from "./components/policy/WarrantyPolicy"
import { ShippingPolicy } from "./components/policy/ShippingPolicy"
import { AdminPage } from "./pages/AdminPage"
import { Payment } from "./components/payment/Payment"
import { Success } from "./components/payment/Success"
export default function App() {
    const productId = {id: 0}
    return (
        <main>
            <Context.Provider value={productId}>
                {/* <Header /> */}
                <Routes>
                    {/* <Route path='/private' element={ <PrivatePage /> }/> */}
                    <Route index element={ <HomePage /> }/>
                    <Route path='/products/:id' element={ <ProductOverView /> }/>
                    {/* <Route path='/private/private/products/:id' element={ <ProductOverViewPrivate /> }/> */}
                    <Route path="/login" element={ <LoginPage /> } />
                    <Route path="/register" element={ <RegisterPage /> } />
                    <Route path="/return-policy" element={ <ReturnPolicy /> } />
                    <Route path="/warranty-policy" element={ <WarrantyPolicy /> } />
                    <Route path="/shipping-policy" element={ <ShippingPolicy /> } />
                    <Route path="/admin" element={ <AdminPage /> } />
                    <Route path="/payment" element={ <Payment /> } />
                    {/* <Route path="/private/payment" element={ <Payment /> } /> */}
                    <Route path="/products/:id/payment" element={ <Payment /> } />
                    {/* <Route path="/private/private/products/:id/payment" element={ <Payment /> } /> */}
                    <Route path="/success" element={ <Success /> } />
                </Routes>
                <BtnScroll />
                <Footer/>
            </Context.Provider>
        </main>
    )
}
