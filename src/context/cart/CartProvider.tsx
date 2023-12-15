import { useReducer } from "react"
import { CartContext } from "./CartContext"
import { CartProduct } from '../../interfaces/interfaces';
import { cartReducer, initial_state } from "../../reducer/cartReducer"

interface CartChildrenProps {
    children: JSX.Element | JSX.Element[]
}



const CartProvider = ( { children }: CartChildrenProps ) => {

    const [state, dispatch] = useReducer(cartReducer, initial_state)

    const addToCart = (product: CartProduct) => {
        dispatch({
        type: 'ADD_PRODUCT',
        payload: { product }
    })}

    const clearToCart = (product: CartProduct) => {
      dispatch({
      type: 'DELETE_ITEM_CART',
      payload: { product }
  })}

    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART'
        })
    }

  return (
    <CartContext.Provider value={{cart: state, addToCart, clearCart, clearToCart}} >
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider
