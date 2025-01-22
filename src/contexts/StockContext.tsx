import { createContext, ReactNode, useState } from "react";
import { Item } from "../entities/Item";

export interface StockContextData {
   items: Item[]
}

export const StockContext = createContext({} as StockContextData)

interface StockContextProviderProps {
   children: ReactNode
}

export const StockContextProvider: React.FC<StockContextProviderProps> = ({children}) => {
   const [items, setItems] = useState<Item[]>([])
   
   return(
      <StockContext.Provider value={{items}}>{children}</StockContext.Provider>
   )
}