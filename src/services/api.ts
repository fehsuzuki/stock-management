import { Item } from "../entities/Item";

export const itemsService = {
   async fetchItems(): Promise<Item[]> {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/items`)
      const data: Item[] = await response.json()
      return data
   },

   async createTask(attributes: Omit<Item, "id">): Promise<Item> {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/items`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(attributes)
      })

      const newItem = response.json()
      
      return newItem
   }
}