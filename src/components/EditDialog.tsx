import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AlertDialog, Button, Dialog, Flex, Select, TextArea, TextField } from "@radix-ui/themes"
import { Item } from "../entities/Item"
import { StockContext } from "../contexts/StockContext"
import { FormEventHandler, useContext } from "react"

interface EditDialogProps {
   id: string
   attributes: Omit<Item, "id">
}

export const EditDialog: React.FC<EditDialogProps> = ({id, attributes}) => {
   const {editItem} = useContext(StockContext)

   const handleSubmit:FormEventHandler<HTMLFormElement> = async(ev) => {
      ev.preventDefault()

      const formData = new FormData(ev.currentTarget)

      //Talvez colocar o handleSubmit no StockContext
   }

   return(
      <form onSubmit={handleSubmit}>
         <AlertDialog.Root>
            <AlertDialog.Trigger>
            <Button >
               <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
               <AlertDialog.Title align={"center"} mb={"5"}>Edit {attributes.name}</AlertDialog.Title>
               <AlertDialog.Description></AlertDialog.Description>
               <Flex direction={"column"} gap={"3"}>
                  <div>
                     <label htmlFor="name">Name</label>
                     <TextField.Root type="text" name="name" defaultValue={attributes.name} required></TextField.Root>
                  </div>
                  <div>
                     <label htmlFor="quantity">Quantity</label>
                     <TextField.Root 
                     type="number" 
                     name="quantity" 
                     defaultValue={attributes.quantity} 
                     required></TextField.Root>
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
                              <Select.Item value="objects">Objects</Select.Item>
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
               <Flex justify={"end"} mt={"5"} gap={"3"}>
                  <AlertDialog.Cancel>
                     <Button color="red">Cancel</Button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action>
                     <Button type="submit">Save</Button>
                  </AlertDialog.Action>
               </Flex>
            </AlertDialog.Content>
         </AlertDialog.Root>
      </form>
   )
}