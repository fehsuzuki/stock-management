import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes"

interface ItemCardProps {
   title: string,
   value: number
}

export const ItemCard: React.FC<ItemCardProps> = ({title, value}) => {
   return(
      <Box>
         <Card size={"4"}>
            <Heading as="h2" weight={"light"} size={"5"} mt={"-2"}>{title}</Heading>
            <Flex justify={"center"} mt={"6"}>
               <Text weight={"bold"} size={"8"}>{value}</Text>
            </Flex>
         </Card>
      </Box>
   )
}