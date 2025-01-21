import { Box, Button, Flex, Select, Text, TextArea, TextField } from "@radix-ui/themes"

export const CreateNewItem: React.FC = () => {
   return(
     <Flex m={"9"} justify={"center"}>
      <form>
         <Flex direction={"column"} gap={"5"}>
            <Flex gap={"7"} >
               <Box>
                  <Text>Name</Text>
                  <TextField.Root type="text" name="name" required></TextField.Root>
               </Box>
               <Box>
                  <Text>Quantity</Text>
                  <TextField.Root type="number" name="name" required></TextField.Root>
               </Box>
               <Box>
                  <Text>Price</Text>
                  <TextField.Root type="number" name="name" required></TextField.Root>
               </Box>
               <Flex direction={"column"}>
                  <Text>Category</Text>
                  <Select.Root defaultValue="category" required>
                     <Select.Trigger/>
                     <Select.Content>
                        <Select.Group>
                           <Select.Item value="category" disabled>Select a category</Select.Item>
                           <Select.Item value="accessories">Accessories</Select.Item>
                           <Select.Item value="books">Books</Select.Item>
                           <Select.Item value="games">Games</Select.Item>
                           <Select.Item value="object">Object</Select.Item>
                           <Select.Item value="toys">Toys</Select.Item>
                        </Select.Group>
                     </Select.Content>
                  </Select.Root>
               </Flex>
            </Flex>
            <Box>
               <Text>Description</Text>
               <TextArea></TextArea>
            </Box>
            <Flex justify={"end"}>
               <Button type="submit">Create</Button>
            </Flex>
         </Flex>
      </form>
     </Flex>
   )
}