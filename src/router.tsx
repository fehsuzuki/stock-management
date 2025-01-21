import {createBrowserRouter} from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { StockItems } from './pages/StockItems'
import { StockItemsTable } from './pages/StockItemsTable'
import { CreateNewItem } from './pages/CreateNewItem'
import { ShowItem } from './pages/ShowItem'

const router = createBrowserRouter([
   {
      path: "dashboard",
      element: <Dashboard/>
   },
   {
      path: "items",
      element: <StockItems/>,
      children: [
         {index: true, element: <StockItemsTable/>},
         {path: "new", element: <CreateNewItem/>},
         {path: ":id", element: <ShowItem/>}
      ]
   }
])

export default router