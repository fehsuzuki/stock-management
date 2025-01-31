import { AlertDialog, Button } from "@radix-ui/themes"
import { useContext } from "react"
import { StockContext } from "../contexts/StockContext"

interface DeleteDialogProps {
   id: string
}

export const DeleteDialog: React.FC<DeleteDialogProps> = ({id}) => {
   const {deleteItem} = useContext(StockContext)

   return(
      <AlertDialog.Root>   
         <AlertDialog.Trigger>
            <Button color='red'>Delete</Button>
         </AlertDialog.Trigger>
         <AlertDialog.Content className="AlertDialogContent">
				<AlertDialog.Title className="AlertDialogTitle">
					Are you absolutely sure?
				</AlertDialog.Title>
				<AlertDialog.Description className="AlertDialogDescription">
					This action cannot be undone. This will permanently delete your
					account and remove your data from our servers.
				</AlertDialog.Description>
				<div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
					<AlertDialog.Cancel>
						<Button>Cancel</Button>
					</AlertDialog.Cancel>
					<AlertDialog.Action>
						<Button color="red" onClick={() => deleteItem(id)}>Yes, delete account</Button>
					</AlertDialog.Action>
				</div>
			</AlertDialog.Content>
      </AlertDialog.Root>
   )
}