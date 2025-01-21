import { Box, Flex, Heading, Text } from "@radix-ui/themes"
import { Link } from "react-router-dom"
import "./nav-bar.css"

export const NavBar: React.FC = () => {
   return(
      <Box>
         <Flex justify={"between"} m={"5"}>
            <Heading  as="h1" weight={"light"}>
               <Link to="/dashboard">STOCK MANAGEMENT</Link>
            </Heading>
               <Flex gap={"5"}>
                  <Text>
                     <Link to="/dashboard">Home</Link>
                  </Text>
                  <Text>
                     <Link to="/items">Items</Link>
                  </Text>
               </Flex>
         </Flex>
      </Box> 
   )
}   