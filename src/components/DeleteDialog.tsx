import { AlertDialog, Button } from "@radix-ui/themes"
import { useContext } from "react"
import { StockContext } from "../contexts/StockContext"

interface DeleteDialogProps {
   id: string
   name: string
}

export const DeleteDialog: React.FC<DeleteDialogProps> = ({id, name}) => {
   const {deleteItem} = useContext(StockContext)

   return(
      <AlertDialog.Root>   
         <AlertDialog.Trigger>
            <Button color='red'>Delete</Button>
         </AlertDialog.Trigger>
         <AlertDialog.Content className="AlertDialogContent">
				<AlertDialog.Title className="AlertDialogTitle">
					Delete '{name}'?
				</AlertDialog.Title>
				<AlertDialog.Description className="AlertDialogDescription" mb={"3"}>
					This action cannot be undone. This will permanently delete this
					item.
				</AlertDialog.Description>
				<div style={{ display: "flex", gap: 15, justifyContent: "flex-end" }}>
					<AlertDialog.Cancel>
						<Button>Cancel</Button>
					</AlertDialog.Cancel>
					<AlertDialog.Action>
						<Button color="red" onClick={() => deleteItem(id)}>Delete</Button>
					</AlertDialog.Action>
				</div>
			</AlertDialog.Content>
      </AlertDialog.Root>
   )
}