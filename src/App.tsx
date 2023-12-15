import {products as initialProducts } from './mocks/products.json'
import Products from "./components/Products"
import Header from "./components/Header"
import useFilters from "./hooks/useFilters"
import Cart from './components/Cart'
import CartProvider from './context/cart/CartProvider'
 

function App() {
  const { filtersProducts } = useFilters()

  const productFilters = filtersProducts(initialProducts)
  
  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={productFilters} />
    </CartProvider>
  )
}

export default App
