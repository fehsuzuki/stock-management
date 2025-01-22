import { createContext, ReactNode, useEffect, useState } from "react";
import { Item } from "../entities/Item";
import { itemsService } from "../services/api";

export interface StockContextData {
   items: Item[]
}

export const StockContext = createContext({} as StockContextData)

interface StockContextProviderProps {
   children: ReactNode
}

export const StockContextProvider: React.FC<StockContextProviderProps> = ({children}) => {
   const [items, setItems] = useState<Item[]>([])

   useEffect(() => {
      itemsService.fetchItems().then((storedItems) => {
         setItems(storedItems)
      })
   }, [])
   
   return(
      <StockContext.Provider value={{items}}>{children}</StockContext.Provider>
   )
}