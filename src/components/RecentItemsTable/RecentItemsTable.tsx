import { Flex, Table } from "@radix-ui/themes";
import styles from "./styles.module.css";
import { useContext } from "react";
import { StockContext } from "../../contexts/StockContext";
import { EditDialog } from "../EditDialog";
import { DeleteDialog } from "../DeleteDialog";

export const RecentItemsTable: React.FC = () => {
  const { recentItems } = useContext(StockContext);

  return (
    <Table.Root mt={"9"} size={"3"}>
      <Table.Header>
        <Table.Row className={styles.header} align={"center"}>
          <Table.ColumnHeaderCell justify={"center"} width={"300px"}>
            Recent Items
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify={"center"} width={"300px"}>
            Actions
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {recentItems.map((item) => (
          <Table.Row align={"center"} key={item.id}>
            <Table.RowHeaderCell justify={"center"}>
              {item.name}
            </Table.RowHeaderCell>
            <Table.Cell justify={"center"}>
              <Flex justify={"center"} gap={"3"}>
                <EditDialog id={item.id} attributes={item} />
                <DeleteDialog id={item.id} name={item.name} />
              </Flex>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
