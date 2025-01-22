import { Box, Flex, Text } from "@radix-ui/themes"
import { NavBar } from "../components/NavBar/NavBar"
import { Link, Outlet } from "react-router-dom"


export const StockItems: React.FC = () => {
   return(
      <>
         <NavBar/>
         <Flex mx={"5"} mt={"9"} gap={"7"}>
            <Text>
               <Link to="/items">All items</Link>
            </Text>
            <Text>
               <Link to="/items/new">New item</Link>
            </Text>
         </Flex>
         <Box mx={"5"}>
            <hr></hr>
         </Box>
         <Outlet/>
      </>
   )
}