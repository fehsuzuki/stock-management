import { Box, Flex, Grid, ScrollArea } from "@radix-ui/themes";
import { NavBar } from "../components/NavBar/NavBar";
import { ItemCard } from "../components/ItemCard";
import { RecentItemsTable } from "../components/RecentItemsTable/RecentItemsTable";
import { RunningOutItemsTable } from "../components/RunningOutItemsTable/RunningOutItemsTable";
import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";

export const Dashboard: React.FC = () => {
  const { items, recentItems } = useContext(StockContext);

  let sum: number = 0;

  let runningOutItems: number = 0;

  items.map((item) => {
    sum += +item.quantity;

    if (+item.quantity < 5) {
      runningOutItems++;
    }
  });

  return (
    <Box>
      <NavBar />
      <ScrollArea scrollbars="horizontal" mt={"9"}>
        <Grid columns={"4"} gap={"5"} minWidth={"1024px"}>
          <ItemCard title="Items diversity" value={items.length} />
          <ItemCard title="Total inventory" value={sum} />
          <ItemCard title="Recent items" value={recentItems.length} />
          <ItemCard title="Running out items" value={runningOutItems} />
        </Grid>
        <Flex gap={"9"} justify={"center"}>
          <RecentItemsTable />
          <RunningOutItemsTable />
        </Flex>
      </ScrollArea>
    </Box>
  );
};
