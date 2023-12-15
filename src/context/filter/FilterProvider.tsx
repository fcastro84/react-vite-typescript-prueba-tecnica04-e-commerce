import { useState } from "react"
import { FilterContext } from "./FilterContext"
import { Filter } from "../../interfaces/interfaces"


interface ChildrenProps {
    children: JSX.Element| JSX.Element[]
} 

export const FilterProvider = ({ children }: ChildrenProps) => {

    const [filter, setFilter] = useState<Filter>({
        price: 0,
        category: 'All'
      })

    return (
        <FilterContext.Provider value={{filter, setFilter}}>
            { children }
        </FilterContext.Provider>
    )
}