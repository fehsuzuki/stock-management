import { createContext, ReactNode, useEffect, useState } from "react";
import { Item } from "../entities/Item";
import { itemsService } from "../services/api";

export interface StockContextData {
  items: Item[];
  recentItems: Item[];
  createItem: (attributes: Omit<Item, "id">) => Promise<void>;
  deleteItem: (id: string) => Promise<void>;
  getItem: (id: string) => Item;
  //Usando o Partial<Omit<>> porque nem sempre vamos alterar todas as propriedades de um item
  editItem: (
    id: string,
    attributes: Partial<Omit<Item, "id">>
  ) => Promise<void>;
}

export const StockContext = createContext({} as StockContextData);

interface StockContextProviderProps {
  children: ReactNode;
}

export const StockContextProvider: React.FC<StockContextProviderProps> = ({
  children,
}) => {
  const [items, setItems] = useState<Item[]>([]);
  const [recentItems, setRecentItems] = useState<Item[]>([]);

  useEffect(() => {
    itemsService.fetchItems().then((storedItems) => {
      setItems(storedItems);
    });
  }, []);

  useEffect(() => {
    const limitDate = new Date();

    limitDate.setDate(limitDate.getDate() - 5);

    setRecentItems(items.filter((item) => new Date(item.createdAt) > limitDate));
  }, [items]);

  const createItem = async (attributes: Omit<Item, "id">) => {
    const newItem = await itemsService.createItem(attributes);

    setItems((currentState) => {
      const updatedState = [...currentState, newItem];

      return updatedState;
    });
  };

  const deleteItem = async (id: string) => {
    await itemsService.deleteItem(id);

    setItems((currentState) => currentState.filter((item) => item.id !== id));
  };

  const getItem = (id: string) => {
    const item = items.find((item) => item.id === id);

    if (!item) {
      throw new Error(`Item with id ${id} not found`);
    }
    return item;
  };

  const editItem = async (
    id: string,
    attributes: Partial<Omit<Item, "id">>
  ) => {
    await itemsService.editItem(id, attributes);

    setItems((currentState) => {
      const updatedState = [...currentState];

      const itemIndex = updatedState.findIndex((item) => item.id === id);

      Object.assign(updatedState[itemIndex], attributes);

      return updatedState;
    });
  };

  return (
    <StockContext.Provider
      value={{ items, recentItems, createItem, deleteItem, getItem, editItem }}
    >
      {children}
    </StockContext.Provider>
  );
};
