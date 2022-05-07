import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Controls } from "./Controls";

const SearchSection = () => {
  const [search, setSearch] = useState<string>("");

  //TODO:Implement later!
  const handleSearch = () => {};

  return (
    <Box p="2" display={"flex"} justifyContent="center">
      <Box>
        <Controls.InputField
          placeHolder="Search a number"
          type="outline"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Box ml={"0.5rem"} display="flex" alignItems="center">
        <Controls.InputButton text="Search" size="sm" onClick={handleSearch} colorScheme={"green"} />
      </Box>
    </Box>
  );
};

export default SearchSection;
