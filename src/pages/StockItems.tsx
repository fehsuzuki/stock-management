import { Box, Heading } from "@radix-ui/themes"
import { NavBar } from "../components/NavBar/NavBar"

export const StockItems: React.FC = () => {
   return(
      <>
         <NavBar/>
         <Box>
            <Heading>Stock Items</Heading>
         </Box>
      </>
   )
}