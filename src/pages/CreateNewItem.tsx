import {
  Box,
  Button,
  Flex,
  Select,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { FormEventHandler, useContext } from "react";
import { StockContext } from "../contexts/StockContext";
import { z } from "zod";

const CreateItemSchema = z.object({
  name: z.string(),
  quantity: z.number(),
  price: z.number(),
  category: z.enum(["accessories", "books", "games", "objects", "toys"]),
  description: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const CreateNewItem: React.FC = () => {
  const { createItem } = useContext(StockContext);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const name = formData.get("name");
    const quantity = Number(formData.get("quantity"));
    const price = Number(formData.get("price"));
    const category = formData.get("category");
    const description = formData.get("description");
    const createdAt = new Date()
    const updatedAt = new Date()

    ev.currentTarget.reset();

    const itemData = CreateItemSchema.parse({
      name,
      quantity,
      price,
      category,
      description,
      createdAt,
      updatedAt
    });

    await createItem(itemData);
  };

  return (
    <Flex m={"9"} justify={"center"}>
      <form onSubmit={handleSubmit}>
        <Flex direction={"column"} gap={"5"}>
          <Flex gap={"7"}>
            <Box>
              <Text>Name</Text>
              <TextField.Root type="text" name="name" required></TextField.Root>
            </Box>
            <Box>
              <Text>Quantity</Text>
              <TextField.Root
                type="number"
                name="quantity"
                required
              ></TextField.Root>
            </Box>
            <Box>
              <Text>Price</Text>
              <TextField.Root
                type="number"
                name="price"
                required
              ></TextField.Root>
            </Box>
            <Flex direction={"column"}>
              <Text>Category</Text>
              <Select.Root name="category" required>
                <Select.Trigger />
                <Select.Content>
                  <Select.Group>
                    <Select.Item value="accessories">Accessories</Select.Item>
                    <Select.Item value="books">Books</Select.Item>
                    <Select.Item value="games">Games</Select.Item>
                    <Select.Item value="objects">Objects</Select.Item>
                    <Select.Item value="toys">Toys</Select.Item>
                  </Select.Group>
                </Select.Content>
              </Select.Root>
            </Flex>
          </Flex>
          <Box>
            <Text>Description</Text>
            <TextArea name="description"></TextArea>
          </Box>
          <Flex justify={"end"}>
            <Button type="submit">Create</Button>
          </Flex>
        </Flex>
      </form>
    </Flex>
  );
};
