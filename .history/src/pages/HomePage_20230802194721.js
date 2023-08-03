import React from "react"
import {useGetProductsAllQuery} from "../redux/products/products.api"
import {ProductItem} from "../components/product-item/ProductItem"
import {Loader} from "../components/loader/Loader"
import {ProductFilters} from "../components/product-filters/ProductFilters"
import {useSelector} from "react-redux"
import { Header } from "../components/header/Header"
export function HomePage() {
    const { data, error, isLoading, status } = useGetProductsAllQuery()
    const {filters, searchFilterProducts} = useSelector(state => state.product)
    const newData = (data?.map((item) => ({...item, discout: 0.1, oldPrice : item.price, price: Math.round(item.price * 0.9 * 100) / 100 })))
    const filterByCategory = (category) => {
        return newData?.filter(product => product.category === category)
            .map(product => <ProductItem product={product} key={product.id} />)
    }

    console.log(newData)

    const filterByPrice = price => {
        const products = newData?.filter(item => item.price >= price[0] && item.price <= price[1])
            .map(product => <ProductItem product={product} key={product.id} />)
        if (products.length === 0) {
            return <div className='text-center m-auto'>
                <p className='font-medium'>Products not found...</p>
                <p>Minimum value 7$ - Maximum value 1000$</p>
            </div>
        }
        return products
    }

    const filterByRating = rating => {
        return newData?.filter(item => rating === 'above' ? item.rating.rate >= 3 : item.rating.rate <= 3)
            .map(product => <ProductItem product={product} key={product.id} />)
    }

    const filterSearch = newData => {
        if (newData.length > 0) {
            return newData.map(product => <ProductItem product={product} key={product.id}/>)
        } else {
            return <p className='mt-[30px] mx-auto'>Products not found...</p>
        }
    }

    const renderProducts = () => {
        if (filters.category) return filterByCategory(filters.category)
        if (filters.price) return filterByPrice(filters.price)
        if (filters.rating) return filterByRating(filters.rating)
        if (searchFilterProducts) return filterSearch(searchFilterProducts)

        return newData?.map(product => <ProductItem product={product} key={product.id}/>)
    }

    return (
        <>
        <Header />
            <div className='container mb-[20px] mt-[60px] max-w-[1240px] flex flex-col justify-center items-center xl:flex xl:justify-center xl:flex-row xl:items-start mx-auto transition-all flex-auto'>
                {isLoading && <Loader />}
                {error && <p className='text-center mt-4'>{error.error}</p>}
                {status === 'fulfilled' &&
                    <>
                        <div className='lg:w-3/5 xl:w-1/5 flex flex-col items-center mt-[10px]'>
                            <ProductFilters/>
                        </div>
                        <div className='w-4/5 flex flex-wrap justify-center md:w-full xl:justify-start xl:ml-[20px]'>
                            {renderProducts()}
                        </div>
                    </>
                }
            </div>
        </>
    )
}
