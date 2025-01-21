import { Box, Flex, Heading, Text } from "@radix-ui/themes"

export const NavBar: React.FC = () => {
   return(
      <Box>
         <Flex justify={"between"} m={"5"}>
            <Heading 
               as="h1" weight={"light"} style={{cursor:"pointer"}}>STOCK MANAGEMENT</Heading>
               <Flex gap={"5"}>
                  <Text style={{cursor:"pointer"}}>Home</Text>
                  <Text style={{cursor:"pointer"}}>Items</Text>
               </Flex>
         </Flex>
      </Box> 
   )
}   