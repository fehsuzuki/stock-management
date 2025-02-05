import { Flex, Table } from "@radix-ui/themes";
import styles from "./styles.module.css";
import { useContext } from "react";
import { StockContext } from "../../contexts/StockContext";
import { EditDialog } from "../EditDialog";
import { DeleteDialog } from "../DeleteDialog";
import { SearchBar } from "../SearchBar";

export const RunningOutItemsTable: React.FC = () => {
  const { items, searchValue } = useContext(StockContext);

  return (
    <Flex direction={"column"} mt={"9"} gap={"3"}>
      <Flex justify={"end"}>
        <SearchBar />
      </Flex>
      <Table.Root size={"3"}>
        <Table.Header>
          <Table.Row className={styles.header} align={"center"}>
            <Table.ColumnHeaderCell justify={"center"} width={"300px"}>
              Running out items
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify={"center"} width={"300px"}>
              Quantity
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell justify={"center"} width={"300px"}>
              Actions
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {items
            .filter((item) => {
              return searchValue.toLowerCase() === ""
                ? item
                : item.name.toLowerCase().includes(searchValue);
            })
            .map((item) => {
              if (item.quantity < 5) {
                return (
                  <Table.Row align={"center"} key={item.id}>
                    <Table.Cell justify={"center"}>{item.name}</Table.Cell>
                    <Table.Cell justify={"center"}>{item.quantity}</Table.Cell>
                    <Table.Cell justify={"center"}>
                      <Flex justify={"center"} gap={"3"}>
                        <EditDialog id={item.id} attributes={item} />
                        <DeleteDialog id={item.id} name={item.name} />
                      </Flex>
                    </Table.Cell>
                  </Table.Row>
                );
              }
            })}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
};
