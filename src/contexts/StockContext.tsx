import { createContext, ReactNode, useEffect, useState } from "react";
import { Item } from "../entities/Item";
import { itemsService } from "../services/api";

export interface StockContextData {
   items: Item[],
   createItem: (atrributes: Omit<Item, "id">) => Promise<Item>
   // updateItem: (id: string, atrributes: Partial<Omit<Item, "id">>) => Promise<void>
   // deleteItem: (id: string) => Promise<void>
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

   const createItem = async () => {
      const newItem: Item = {id: "300", name: "Teclado Logitech", quantity: 23, price: 199.90, category: "objects", description: "Teclado para uso casual"}
      return newItem
   }
   
   return(
      <StockContext.Provider value={{items, createItem}}>{children}</StockContext.Provider>
   )
}