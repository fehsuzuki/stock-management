export type ItemCategory = 'accessories' | 'books' | 'games' | 'objects' | 'other'

export interface Item {
   name: string,
   quantity: number,
   price: number,
   category: ItemCategory,
   description: string
}