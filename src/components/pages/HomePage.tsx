import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { Controls } from "../controls/Controls";

const HomePage = () => {
  const handleClick = () => {};

  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow={"md"}
    >
      <Box
        p="4"
        display={"flex"}
        alignItems="flexStart"
        justifyContent={"space-between"}
      >
        <Box display={"flex"} alignItems="center">
          <Text textAlign={"left"} fontWeight="bold" fontSize={"xl"}>
            Contact List
          </Text>
        </Box>
        <Box>
          <Controls.InputButton
            text="Add Contact"
            onClick={handleClick}
            colorScheme="green"
            size="sm"
          />
        </Box>
      </Box>
      <Box>
        <Controls.SearchSection />
      </Box>

      <Box p="3" mt="0.2rem">
        {/* FIXME:For testing only */}
        <Controls.UserList />
        <Controls.UserList />
        <Controls.UserList />
        <Controls.UserList />
        <Controls.UserList />
        <Controls.UserList />
      </Box>
    </Box>
  );
};

export default HomePage;
