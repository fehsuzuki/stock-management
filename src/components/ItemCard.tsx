import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes"

export const ItemCard: React.FC = () => {
   return(
      <Box>
         <Card size={"4"}>
            <Heading as="h2" weight={"light"} size={"5"} mt={"-2"}>Items diversity</Heading>
            <Flex justify={"center"} mt={"6"}>
               <Text weight={"bold"} size={"8"}>2</Text>
            </Flex>
         </Card>
      </Box>
   )
}