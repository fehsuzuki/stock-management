import { Button, Flex, Heading, Text } from "@radix-ui/themes";
import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";
import { useParams } from "react-router-dom";
import { DeleteDialog } from "../components/DeleteDialog";

export const ShowItem: React.FC = () => {
  const { getItem } = useContext(StockContext);

  type IdParams = {
    id: string;
  };

  const { id } = useParams<IdParams>();

  if (!id) {
    return <Text>Item not found</Text>;
  }

  const item = getItem(id);

  return (
    <Flex direction={"column"} mt={"9"} mx={"5"} gap={"5"}>
      <Flex gap={"7"}>
        <Heading as="h4" weight={"light"}>
          {item.name}
        </Heading>
        <Flex gap={"3"}>
          <Button color="bronze">Edit</Button>
          <DeleteDialog id={item.id} name={item.name} />
        </Flex>
      </Flex>
      <Flex mt={"5"} gap={"5"}>
        <Button color="gray">Category: {item.category}</Button>
        <Button color="gray">Quantity in stock: {item.quantity}</Button>
        <Button color="gray">Price: {item.price}</Button>
      </Flex>
      <Text>{item.description}</Text>
      <Flex mt={"5"} gap={"7"}>
        <Text>Created in: Fri Jun 16 2024</Text>
        <Text>Updated in Fri Jun 17 2024</Text>
      </Flex>
    </Flex>
  );
};
