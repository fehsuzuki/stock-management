import { Item } from "../entities/Item";

export const itemsService = {
   async fetchItems(): Promise<Item[]> {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/items`)
      const data: Item[] = await response.json()
      return data
   }
}