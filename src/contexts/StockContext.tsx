import { createContext, ReactNode } from "react";

export interface StockContextData {

}

export const StockContext = createContext({} as StockContextData)

interface StockContextProviderProps {
   children: ReactNode
}

export const StockContextProvider: React.FC<StockContextProviderProps> = ({children}) => {

   
   return(
      <StockContext.Provider value={{}}>{children}</StockContext.Provider>
   )
}