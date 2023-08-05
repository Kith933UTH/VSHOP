import {createSlice} from "@reduxjs/toolkit"

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        cart: [],
        btnCart: null,
        filters: {},
        search: false,
        searchFilterProducts: null,
        logged: false,
        user: {username: 'username', password: 'password'},
        order: JSON.parse(localStorage.getItem("ORDER")) || []
    },
    reducers: {
        clearCart(state, action) {
            state.cart = state.cart.slice(0, action.payload)
        },
        addProductToCart(state, action) {
            state.cart.push({...action.payload, quantity: 1})
        },
        incrementProductInCart(state, action) {
            const item = state.cart.find(item => item.id === action.payload)
            item.quantity++
        },
        decrementProductInCart(state, action) {
            const item = state.cart.find(item => item.id === action.payload)
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--
            }
        },
        toggleBtnCart(state, action) {
            state.btnCart = action.payload
        },
        removeItemFromCart(state, action) {
            state.cart = state.cart.filter(el => el.id !== action.payload)
        },
        filtersProductsByCategory(state, action) {
            state.filters = action.payload
        },
        toggleSearchForm(state, action) {
            state.search = action.payload
        },
        toggleLogin(state, action) {
            state.logged = action.payload
        },
        setSearchFilterProducts(state, action) {
            state.searchFilterProducts = action.payload
        },
        setLocalStorage(state, action) {
            state.order.push(action.payload)
            localStorage.setItem('ORDER', JSON.stringify(state.order))
        }
    },
})

export const productReducer = productsSlice.reducer
export const {
    clearCart,
    addProductToCart,
    incrementProductInCart,
    decrementProductInCart,
    toggleBtnCart,
    removeItemFromCart,
    filtersProductsByCategory,
    toggleSearchForm,
    toggleLogin,
    setSearchFilterProducts,
    setLocalStorage
} = productsSlice.actions
