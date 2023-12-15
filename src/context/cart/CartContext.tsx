import {  createContext } from "react";
import { CartProduct } from "../../interfaces/interfaces";

export interface CartContextProps {
    cart: CartProduct[],
    addToCart: (product: CartProduct) => void
    clearToCart: (product: CartProduct) => void
    clearCart: () => void
}

export const CartContext = createContext({} as CartContextProps)