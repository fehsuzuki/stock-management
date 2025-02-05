import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AlertDialog,
  Button,
  Flex,
  Select,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { Item } from "../entities/Item";
import { StockContext } from "../contexts/StockContext";
import { FormEventHandler, useContext } from "react";
import { z } from "zod";

interface EditDialogProps {
  id: string;
  attributes: Omit<Item, "id">;
}

const CreateItemSchema = z.object({
  name: z.string(),
  quantity: z.number(),
  price: z.number(),
  category: z.enum(["accessories", "books", "games", "objects", "toys"]),
  description: z.string(),
  createdAt: z.string(),
  updatedAt: z.string()
});

export const EditDialog: React.FC<EditDialogProps> = ({ id, attributes }) => {
  const { editItem } = useContext(StockContext);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    //Talvez colocar o handleSubmit no StockContext
    const name = formData.get("name");
    const quantity = Number(formData.get("quantity"));
    const price = Number(formData.get("price"));
    const category = formData.get("category");
    const description = formData.get("description");
    const createdAt = new Date(attributes.createdAt).toLocaleString()
    const updatedAt = new Date().toLocaleString()

    const itemData = CreateItemSchema.parse({
      name,
      quantity,
      price,
      category,
      description,
      createdAt,
      updatedAt
    });

    await editItem(id, itemData);
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <form onSubmit={handleSubmit}>
          <AlertDialog.Title align={"center"} mb={"5"}>
            Edit {attributes.name}
          </AlertDialog.Title>
          <AlertDialog.Description></AlertDialog.Description>
          <Flex direction={"column"} gap={"3"}>
            <div>
              <label htmlFor="name">Name</label>
              <TextField.Root
                type="text"
                name="name"
                defaultValue={attributes.name}
                required
              ></TextField.Root>
            </div>
            <div>
              <label htmlFor="quantity">Quantity</label>
              <TextField.Root
                type="number"
                name="quantity"
                defaultValue={attributes.quantity}
                required
              ></TextField.Root>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <TextField.Root
                type="text"
                name="price"
                defaultValue={attributes.price}
                required
              ></TextField.Root>
            </div>
            <Flex direction={"column"}>
              <label htmlFor="name">Category</label>
              <Select.Root
                name="category"
                defaultValue={attributes.category}
                required
              >
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
            <div>
              <label htmlFor="description">Description</label>
              <TextArea
                name="description"
                defaultValue={attributes.description}
              ></TextArea>
            </div>
          </Flex>
          <Flex justify={"end"} mt={"5"} gap={"3"}>
            <AlertDialog.Cancel>
              <Button color="red">Cancel</Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button type="submit">Save</Button>
            </AlertDialog.Action>
          </Flex>
        </form>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};
