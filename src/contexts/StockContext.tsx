import { createContext, ReactNode, useEffect, useState } from "react";
import { Item } from "../entities/Item";
import { itemsService } from "../services/api";

export interface StockContextData {
   items: Item[],
   createItem: (atrributes: Omit<Item, "id">) => Promise<void>
   // updateItem: (id: string, atrributes: Partial<Omit<Item, "id">>) => Promise<void>
   deleteItem: (id: string) => Promise<void>
   getItem: (id: string) => Item
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

   const createItem = async(atrributes: Omit<Item, 'id'>) => {
      const newItem = await itemsService.createItem(atrributes)

      setItems((currentState) => {
         const updatedState = [...currentState, newItem]

         return updatedState
      })
   }

   const deleteItem = async(id: string) => {
      await itemsService.deleteItem(id)
      
      setItems((currentState) => currentState.filter((item) => item.id !== id))
   }

   const getItem = (id: string) => {
      const item = items.find((item) => item.id === id)
      if (!item) {
         throw new Error(`Item with id ${id} not found`)
      }
      return item
   }
   
   return(
      <StockContext.Provider value={{items, createItem, deleteItem, getItem}}>{children}</StockContext.Provider>
   )
}