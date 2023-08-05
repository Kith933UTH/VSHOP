import React, {useContext} from "react"
import { useSelector } from "react-redux"
import {Context} from "../context/context"
import {useGetProductByIdQuery} from "../redux/products/products.api"
import {Loader} from "../components/loader/Loader"
import {ProductDetailItem} from "../components/product-detail-item/ProductDetailItem"
import { Header } from "../components/header/Header"
export function ProductOverView() {
    const {logged} = useSelector(state => state.product)
    const {id} = useContext(Context)
    const {data:oldProduct, error, isLoading, refetch, status} = useGetProductByIdQuery(id)
    let product
    if (oldProduct) {
        product = {...oldProduct, discout: 0.1, oldPrice : oldProduct.price, price: Math.round(oldProduct.price * 0.9 * 100) / 100 }
    }
    return (
        <>
        <Header login={logged}/>
        <div className='container max-w-[1240px] mx-auto mt-[70px] flex-auto '>
            { error && <p className='text-center pt-4'>{error.error}</p> }
            { isLoading && <Loader/> }
            {
                product && <ProductDetailItem product={product} refetch={refetch} status={status}/>
            }
        </div>
        </>
    )
}
