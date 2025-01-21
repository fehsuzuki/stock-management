import {Button, Table} from '@radix-ui/themes'
import styles from './styles.module.css'

export const RecentItemsTable: React.FC = () => {
   return(
      <Table.Root mt={"9"} size={"3"}>
         <Table.Header>
            <Table.Row className={styles.header} align={"center"}>
               <Table.ColumnHeaderCell justify={"center"} width={"300px"}>Recent Items</Table.ColumnHeaderCell>
               <Table.ColumnHeaderCell justify={"center"} width={"300px"}>Actions</Table.ColumnHeaderCell>
            </Table.Row>
         </Table.Header>

         <Table.Body>
            <Table.Row align={"center"}>
               <Table.RowHeaderCell justify={"center"}>Danilo Sousa</Table.RowHeaderCell>
               <Table.Cell justify={"center"}>
                  <Button color="gray" variant='solid'>See</Button>
               </Table.Cell>
            </Table.Row>

            <Table.Row align={"center"}>
               <Table.RowHeaderCell justify={"center"}>Zahra Ambessa</Table.RowHeaderCell>
               <Table.Cell justify={"center"}>
                  <Button color="gray" variant='solid'>See</Button>
               </Table.Cell>
            </Table.Row>
         </Table.Body>
      </Table.Root>
   )
}