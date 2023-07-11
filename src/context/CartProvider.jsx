import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

const cartInitialState = {
    cartItems: [],
}

const actionTypes = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
    REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
    CLEAR_CART: "CLEAR_CART",
}

function cartReducer(state, action) {
    const payload = action.payload
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            break;
            return {
                ...state,
                cartItems: [...state.cartItems, payload]
            }


    }
}

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    function addToCart(drink) {

        dispatch({ type: actionTypes.ADD_TO_CART, payload: drink })
    }

    function removeOneFromCart(drink) {
        dispatch({ type: actionTypes.ADD_TO_CART, payload: drink })
    }

    function removeAllFromCart(drink) {
        dispatch({ type: actionTypes.ADD_TO_CART, payload: drink })
    }

    function clearCart(drink) {
        dispatch({ type: actionTypes.ADD_TO_CART, payload: drink })
    }

    const CartValues = {
        cart: state,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        clearCart
    }

    return (
        <CartContext.Provider value={CartValues}>
            {children}
        </CartContext.Provider>
    )

}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { CartProvider, CartContext }

