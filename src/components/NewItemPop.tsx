import { AlertDialog, Button, Flex } from "@radix-ui/themes"

export const NewItemPop: React.FC = () => {
   return(
      <AlertDialog.Root>
         <AlertDialog.Trigger>
            <Button type="submit">
               Create
            </Button>
         </AlertDialog.Trigger>
         <AlertDialog.Content>
            <AlertDialog.Title>New item created!</AlertDialog.Title>
            <Flex justify={"end"}>
               <AlertDialog.Cancel>
                  <Button color="red">Close</Button>
               </AlertDialog.Cancel>
            </Flex>
         </AlertDialog.Content>
      </AlertDialog.Root>
   )
}