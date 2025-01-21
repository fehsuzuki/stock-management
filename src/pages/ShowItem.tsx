import { Button, Flex, Heading, Text } from "@radix-ui/themes"

export const ShowItem: React.FC = () => {
   return(
      <Flex direction={"column"} mt={"9"} mx={"5"} gap={"5"}>
         <Flex gap={"7"}>
            <Heading as="h4" weight={"light"}>Pokémon Platinum</Heading>
            <Flex gap={"3"}>
               <Button>Update</Button>
               <Button>Delete</Button>
            </Flex>
         </Flex>
         <Flex mt={"5"} gap={"5"}>
            <Button>Category: Games</Button>
            <Button>Quantity in stock: 6</Button>
            <Button>Price: U$ 19,99</Button>
         </Flex>
         <Text>Videogame for Nintendo DS</Text>
         <Flex mt={"5"} gap={"7"}>
            <Text>Created in: Fri Jun 16 2024</Text>
            <Text>Updated in Fri Jun 17 2024</Text>
         </Flex>
      </Flex>
   )
}