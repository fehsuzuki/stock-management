import { Flex, Table } from "@radix-ui/themes";
import styles from "./styles.module.css";
import { useContext } from "react";
import { StockContext } from "../../contexts/StockContext";
import { EditDialog } from "../EditDialog";
import { DeleteDialog } from "../DeleteDialog";
import { SearchBar } from "../SearchBar";

export const RecentItemsTable: React.FC = () => {
  const { recentItems, searchValue } = useContext(StockContext);

  return (
    <Flex direction={"column"} mt={"9"} gap={"3"}>
      <Flex justify={"end"}>
        <SearchBar />
      </Flex>
      <Table.Root size={"3"}>
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
          {recentItems
            .filter((item) => {
              return searchValue.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(searchValue);
            })
            .map((item) => (
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
    </Flex>
  );
};
