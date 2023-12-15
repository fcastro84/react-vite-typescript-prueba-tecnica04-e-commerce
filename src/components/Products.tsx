import useCart from "../hooks/useCart"
import { CartProduct, Product } from "../interfaces/interfaces"
import { AddToCartIcon, ClearCartIcon } from "./Icons"

import './Products.css'

interface ProductProps {
    products: Product[]
}

const Products = ({ products}: ProductProps) => {
  const { cart, addToCart, clearToCart } = useCart()

  const handleClick = (product: Product) => {
    const newProduct: CartProduct = {
      title: product.title,
      price: product.price,
      quantity: 1,
      thumbnail: product.thumbnail,
      id: product.id,
    }
    addToCart( newProduct )
  }

  const handleClickClear = (product: Product) => {
    const newProduct: CartProduct = {
      title: product.title,
      price: product.price,
      quantity: 1,
      thumbnail: product.thumbnail,
      id: product.id,
    }
    clearToCart( newProduct )
  }

 const checkProductCart = (product: Product) => {
  return cart.some( element => element.id === product.id )
 }

  return (
    <main className="products">
      <ul>
        {
          products.map( product => {
            const isProductCart = checkProductCart(product)
            return (
            <li key={product.id}>
                <h3>{product.title}</h3>
                <img src={product.thumbnail} alt={product.title} />
                <span>Category: {product.category}</span>
                <span>Price: {product.price}</span>
                <button style={{color: 'white', backgroundColor: isProductCart ? 'red' : 'blue', width: '50%', margin: '0 auto'}} onClick={() =>{ isProductCart ? handleClickClear(product): handleClick(product) } }>
                  { isProductCart ? <ClearCartIcon /> : <AddToCartIcon /> }
                </button>
                
            </li>)
          })
        }

      </ul>
    </main>
  )
}

export default Products
