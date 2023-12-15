import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"
import './Cart.css'
import useCart from "../hooks/useCart";

interface CartProductProps {
    thumbnail: string;
    price: number;
    title: string;
    quantity: number;
    addToCart: () => void
}

function CartItem ({ thumbnail, price, title, quantity, addToCart }: CartProductProps) {
    return (
      <li>
        <img
          src={thumbnail}
          alt={title}
        />
        <div>
          <strong>{title}</strong> - ${price}
        </div>
  
        <footer>
          <small>
            Qty: {quantity}
          </small>
          <button onClick={addToCart} style={{color: 'white'}}>+</button>
        </footer>
      </li>
    )
  }


const Cart = () => {

    const cartCheckboxId = useId()
    const { cart, addToCart, clearCart } = useCart()

  return (
    <>
    <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button style={{color: 'white'}} onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
      </>
  )
}

export default Cart
