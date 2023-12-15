import { CartProduct } from "../interfaces/interfaces"

const isCart = window.localStorage.getItem('cart')
export const initial_state: CartProduct[] = isCart ? JSON.parse(isCart) : []
// export const initial_state: CartProduct[] = JSON.parse(window.localStorage.getItem('cart') || '[]') 
// export const initial_state: CartProduct[] = JSON.parse(window.localStorage.getItem('cart')!) ?? [] 
// export const initial_state: CartProduct[] = JSON.parse(window.localStorage.getItem('cart')!) || [] 

export type ActionType = 
{ type: 'ADD_PRODUCT', payload: { product: CartProduct } } |
{ type: 'CLEAR_CART'} |
{ type: 'DELETE_ITEM_CART', payload: { product: CartProduct } }

const updateLocalStorage = (state: CartProduct[]) => {
    window.localStorage.setItem('cart', JSON.stringify(state))
  }

export const cartReducer = (   state: CartProduct[], action: ActionType  ) =>{
    const {type} = action
    switch (type) {
        case 'ADD_PRODUCT':{
            const { product } = action.payload
            const productIndex = state.findIndex( element => element.id === product.id)
            if( productIndex >= 0){
                const newProduct = structuredClone(state)
                newProduct[productIndex].quantity += 1
                updateLocalStorage(newProduct)
                return newProduct

                // 👶 usando el map
                // const newState = state.map(item => {
                //   if (item.id === id) {
                //     return {
                //       ...item,
                //       quantity: item.quantity + 1
                //     }
                //   }

                //   return item
                // })

                // ⚡ usando el spread operator y slice
                // const newState = [
                //     ...state.slice(0, productInCartIndex),
                //     { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1 },
                //     ...state.slice(productInCartIndex + 1)
                // ]
            }

            const newProduct = [
                ...state, {
                    ...product,
                    quantity: 1
                }
            ]
            updateLocalStorage(newProduct)
            return  newProduct
        }
        case 'DELETE_ITEM_CART':{
            const { product } = action.payload
            const newProducts = state.filter( element => element.id !== product.id )
            updateLocalStorage(newProducts)
            return newProducts
        }
        case 'CLEAR_CART':
            updateLocalStorage([])
            return []
        default:
            return state
    }
}