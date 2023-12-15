import { useContext } from "react"
import { FilterContext, FilterContextProps } from "../context/filter/FilterContext"
import { Product } from "../interfaces/interfaces"


const useFilters = () => {
    
    const { filter, setFilter } = useContext<FilterContextProps>(FilterContext)

    const filtersProducts = (products: Product[]) => {
        return products.filter( product => {
            return ( product.price >= filter.price && ( filter.category === 'All' || filter.category === product.category) )
        })
    }


      return { filter, setFilter, filtersProducts }
}

export default useFilters
