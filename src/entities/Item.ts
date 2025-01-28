export type ItemCategory = 'accessories' | 'books' | 'games' | 'objects' | 'other'

export interface Item {
   id: string,
   name: string,
   quantity: number,
   price: number,
   category: ItemCategory,
   description: string
}