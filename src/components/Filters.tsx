import { ChangeEvent, useId} from 'react'
import './Filters.css'
import useFilters from '../hooks/useFilters'

const Filters = () => {

    const inputRangeId = useId()
    const selectId = useId()

    const { filter, setFilter } = useFilters()
    
      const handleChangeFilter = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target
        setFilter (prev => ({
          ...prev,
          [name]: value
        }))
      }
      
  return (
    <section className="filters"> 
        <div>
          <label htmlFor={inputRangeId}>Price:</label>
         <input type="range" name="price"  id={inputRangeId} min={0} max={2000} onChange={handleChangeFilter} value={filter.price} />
         <span>${filter.price}</span>
        </div>

        <div>
          <label htmlFor={selectId}>Category:</label>
          <select name="category" id={selectId} onChange={handleChangeFilter}>
            <option value="All">All</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
            <option value="fragrances">Fragrances</option>
            <option value="laptops">Laptops</option>
            <option value="smartphones">Smartphones</option>
            <option value="home-decoration">Home Decoration</option>
          </select>
        </div>
         
        </section>
  )
}

export default Filters
