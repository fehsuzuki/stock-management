import { Box, Flex, Grid, Heading, ScrollArea, Text } from "@radix-ui/themes";
import { ItemCard } from "./components/ItemCard";

export default function App() {
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
      <ScrollArea scrollbars="horizontal">
        <Grid columns={"4"} gap={"5"} minWidth={"1024px"} mt={"5"}>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </Grid>
      </ScrollArea>
    </Box>
  )
}