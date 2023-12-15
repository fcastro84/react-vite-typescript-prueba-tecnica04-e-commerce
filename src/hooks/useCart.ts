import { useContext } from "react"
import { CartContext, CartContextProps } from "../context/cart/CartContext"


const useCart = () => {
    
    const { cart, addToCart, clearCart, clearToCart } = useContext<CartContextProps>(CartContext)

      return { cart, addToCart, clearCart, clearToCart }
}

export default useCart