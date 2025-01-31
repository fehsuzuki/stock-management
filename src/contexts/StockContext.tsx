import { createContext, ReactNode, useEffect, useState } from "react";
import { Item } from "../entities/Item";
import { itemsService } from "../services/api";

export interface StockContextData {
   items: Item[],
   createItem: (atrributes: Omit<Item, "id">) => Promise<void>
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

   const createItem = async (atrributes: Omit<Item, 'id'>) => {
      const newItem = await itemsService.createTask(atrributes)

      setItems((currentState) => {
         const updatedState = [...currentState, newItem] 
         return updatedState
      })
   }
   
   return(
      <StockContext.Provider value={{items, createItem}}>{children}</StockContext.Provider>
   )
}