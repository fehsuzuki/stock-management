import {Button, Table} from '@radix-ui/themes'

export const RunningOutItemsTable: React.FC = () => {
   return(
      <Table.Root mt={"9"}>
         <Table.Header>
            <Table.Row align={"center"} style={{backgroundColor: "#000"}}>
               <Table.ColumnHeaderCell justify={"center"}>Running out items</Table.ColumnHeaderCell>
               <Table.ColumnHeaderCell justify={"center"}>Quantity</Table.ColumnHeaderCell>
               <Table.ColumnHeaderCell justify={"center"}>Actions</Table.ColumnHeaderCell>
            </Table.Row>
         </Table.Header>

         <Table.Body>
            <Table.Row align={"center"}>
               <Table.RowHeaderCell justify={"center"}>Danilo Sousa</Table.RowHeaderCell>
               <Table.Cell justify={"center"}>danilo@example.com</Table.Cell>
               <Table.Cell justify={"center"}>
                  <Button/>
               </Table.Cell>
            </Table.Row>

            <Table.Row align={"center"}>
               <Table.RowHeaderCell justify={"center"}>Zahra Ambessa</Table.RowHeaderCell>
               <Table.Cell justify={"center"}>zahra@example.com</Table.Cell>
               <Table.Cell justify={"center"}>
                  <Button/>
               </Table.Cell>
            </Table.Row>

            <Table.Row align={"center"}>
               <Table.RowHeaderCell justify={"center"}>Zahra Ambessa</Table.RowHeaderCell>
               <Table.Cell justify={"center"}>zahra@example.com</Table.Cell>
               <Table.Cell justify={"center"}>
                  <Button/>
               </Table.Cell>
            </Table.Row>
         </Table.Body>
      </Table.Root>
   )
}