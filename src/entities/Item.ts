export type ItemCategory =
  | "accessories"
  | "books"
  | "games"
  | "objects"
  | "toys";

export interface Item {
  id: string;
  name: string;
  quantity: number;
  price: number;
  category: ItemCategory;
  description: string;
  createdAt: string;
  updatedAt: string;
}
