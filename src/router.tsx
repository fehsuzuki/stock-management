import {createBrowserRouter} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { StockItems } from './pages/StockItems'

const router = createBrowserRouter([
   {
      path: "dashboard",
      element: <Dashboard/>
   },
   {
      path: "items",
      element: <StockItems/>
   }
])

export default router