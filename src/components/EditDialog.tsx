import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Dialog, Flex, Select, TextArea, TextField } from "@radix-ui/themes"
import { Item } from "../entities/Item"

interface EditDialogProps {
   attributes: Omit<Item, "id">
}

export const EditDialog: React.FC<EditDialogProps> = ({attributes}) => {
   return(
      <Dialog.Root>
         <Dialog.Trigger>
         <Button >
            <FontAwesomeIcon icon={faPenToSquare} />
         </Button>
         </Dialog.Trigger>
         <Dialog.Content>
            <Dialog.Title>Edit {attributes.name}</Dialog.Title>
            <Flex direction={"column"} gap={"3"}>
               <div>
                  <label htmlFor="name">Name</label>
                  <TextField.Root type="text" name="name" defaultValue={attributes.name} required></TextField.Root>
               </div>
               <div>
                  <label htmlFor="quantity">Quantity</label>
                  <TextField.Root type="number" name="quantity" defaultValue={attributes.quantity} required></TextField.Root>
               </div>
               <div>
                  <label htmlFor="price">Price</label>
                  <TextField.Root type="text" name="price" defaultValue={attributes.price} required></TextField.Root>
               </div>
               <Flex direction={"column"}>
                  <label htmlFor="name">Category</label>
                  <Select.Root name="category" defaultValue={attributes.category} required>
                     <Select.Trigger/>
                     <Select.Content>
                        <Select.Group>
                           <Select.Item value="accessories">Accessories</Select.Item>
                           <Select.Item value="books">Books</Select.Item>
                           <Select.Item value="games">Games</Select.Item>
                           <Select.Item value="object">Object</Select.Item>
                           <Select.Item value="toys">Toys</Select.Item>
                        </Select.Group>
                     </Select.Content>
                  </Select.Root>
               </Flex>
               <div>
                  <label htmlFor="description">Description</label>
                  <TextArea name="description" defaultValue={attributes.description}></TextArea>
               </div>
            </Flex>
            
         </Dialog.Content>
      </Dialog.Root>
   )
}