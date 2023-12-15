import { Dispatch, SetStateAction, createContext } from "react";
import { Filter } from "../../interfaces/interfaces";

export interface FilterContextProps {
    filter: Filter,
    setFilter: Dispatch<SetStateAction<Filter>>
}

export const FilterContext = createContext<FilterContextProps>( {} as FilterContextProps )