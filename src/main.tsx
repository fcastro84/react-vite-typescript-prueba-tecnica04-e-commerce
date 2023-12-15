import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { FilterProvider } from './context/filter/FilterProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <FilterProvider>
    <App />
  </FilterProvider>,
)
