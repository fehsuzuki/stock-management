import { Flex, Table } from "@radix-ui/themes";
import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";
import { DeleteDialog } from "../components/DeleteDialog";

import { EditDialog } from "../components/EditDialog";

export const StockItemsTable: React.FC = () => {
  const { items } = useContext(StockContext);

  return (
    <Table.Root mt={"9"} mx={"5"} size={"3"}>
      <Table.Header>
        <Table.Row align={"center"}>
          <Table.ColumnHeaderCell justify={"center"} width={"25%"}>
            ID
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify={"center"} width={"25%"}>
            Name
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify={"center"} width={"25%"}>
            In stock
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify={"center"} width={"25%"}>
            Category
          </Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell justify={"center"} width={"25%"}>
            Actions
          </Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {items.map((item) => (
          <Table.Row align={"center"} key={item.id}>
            <Table.Cell justify={"center"}>{item.id}</Table.Cell>
            <Table.Cell justify={"center"}>{item.name}</Table.Cell>
            <Table.Cell justify={"center"}>{item.quantity}</Table.Cell>
            <Table.Cell justify={"center"}>{item.category}</Table.Cell>
            <Table.Cell justify={"center"}>
              <Flex gap={"4"}>
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
