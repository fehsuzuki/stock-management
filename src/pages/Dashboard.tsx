import { Box, Flex, Grid, ScrollArea } from "@radix-ui/themes"
import { NavBar } from "../components/NavBar/NavBar"
import { ItemCard } from "../components/ItemCard"
import { RecentItemsTable } from "../components/RecentItemsTable/RecentItemsTable"
import { RunningOutItemsTable } from "../components/RunningOutItemsTable/RunningOutItemsTable"

export const Dashboard: React.FC = () => {
   return(
      <Box>
         <NavBar/>
         <ScrollArea scrollbars="horizontal">
            <Grid columns={"4"} gap={"5"} minWidth={"1024px"} mt={"5"}>
               <ItemCard />
               <ItemCard />
               <ItemCard />
               <ItemCard />
            </Grid>
         </ScrollArea>
         <Flex gap={"9"} justify={"center"}>
            <RecentItemsTable/>
            <RunningOutItemsTable/>
         </Flex>
      </Box>
   )
}