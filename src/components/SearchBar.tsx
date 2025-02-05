import { Flex, TextField } from "@radix-ui/themes";
import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";

export const SearchBar: React.FC = () => {
  const { setSearchValue } = useContext(StockContext);

  return (
    <Flex>
      <TextField.Root
        type="search"
        name="search"
        placeholder="Search..."
        onChange={(ev) => setSearchValue(ev.target.value)}
      ></TextField.Root>
    </Flex>
  );
};
