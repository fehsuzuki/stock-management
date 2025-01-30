import {Button, Table} from '@radix-ui/themes'
import styles from './styles.module.css'
import { useContext } from 'react'
import { StockContext } from '../../contexts/StockContext'

export const RunningOutItemsTable: React.FC = () => {
   const {items} = useContext(StockContext)


   return(
      <Table.Root mt={"9"} size={"3"}>
         <Table.Header>
            <Table.Row className={styles.header} align={"center"}>
               <Table.ColumnHeaderCell justify={"center"} width={"300px"}>Running out items</Table.ColumnHeaderCell>
               <Table.ColumnHeaderCell justify={"center"} width={"300px"}>Quantity</Table.ColumnHeaderCell>
               <Table.ColumnHeaderCell justify={"center"} width={"300px"}>Actions</Table.ColumnHeaderCell>
            </Table.Row>
         </Table.Header>

         <Table.Body>
            {items.map((item) => {
               if(item.quantity < 5) {
                  return(
                     <Table.Row align={"center"} key={item.id}>
                        <Table.Cell justify={"center"}>{item.name}</Table.Cell>
                        <Table.Cell justify={"center"}>{item.quantity}</Table.Cell>
                        <Table.Cell justify={"center"}>
                           <Button>See</Button>
                        </Table.Cell>
                     </Table.Row>
                  )
               }
            })}
         </Table.Body>
      </Table.Root>
   )
}