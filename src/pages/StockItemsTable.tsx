import {Button, Flex, Table} from '@radix-ui/themes'

export const StockItemsTable: React.FC = () => {
   return(
      <Table.Root mt={"9"} mx={"5"} size={"3"}>
         <Table.Header>
            <Table.Row align={"center"}>
               <Table.ColumnHeaderCell justify={"center"} width={"25%"}>ID</Table.ColumnHeaderCell>
               <Table.ColumnHeaderCell justify={"center"} width={"25%"}>Name</Table.ColumnHeaderCell>
               <Table.ColumnHeaderCell justify={"center"} width={"25%"}>In stock</Table.ColumnHeaderCell>
               <Table.ColumnHeaderCell justify={"center"} width={"25%"}>Category</Table.ColumnHeaderCell>
               <Table.ColumnHeaderCell justify={"center"} width={"25%"}>Actions</Table.ColumnHeaderCell>
            </Table.Row>
         </Table.Header>

         <Table.Body>
            <Table.Row align={"center"}>
               <Table.RowHeaderCell justify={"center"}>Danilo Sousa</Table.RowHeaderCell>
               <Table.Cell justify={"center"}>danilo@example.com</Table.Cell>
               <Table.Cell justify={"center"}>danilo@example.com</Table.Cell>
               <Table.Cell justify={"center"}>danilo@example.com</Table.Cell>
               <Table.Cell justify={"center"}>
                  <Flex gap={"4"}>
                     <Button>See</Button>
                     <Button>Update</Button>
                     <Button>Delete</Button>
                  </Flex>
               </Table.Cell>
            </Table.Row>

            <Table.Row align={"center"}>
               <Table.RowHeaderCell justify={"center"}>Zahra Ambessa</Table.RowHeaderCell>
               <Table.Cell justify={"center"}>zahra@example.com</Table.Cell>
               <Table.Cell justify={"center"}>danilo@example.com</Table.Cell>
               <Table.Cell justify={"center"}>danilo@example.com</Table.Cell>
               <Table.Cell justify={"center"}>
                  <Flex gap={"4"}>
                     <Button>See</Button>
                     <Button>Update</Button>
                     <Button>Delete</Button>
                  </Flex>
               </Table.Cell>
            </Table.Row>
         </Table.Body>
      </Table.Root>
   )
}