import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const UserList = () => {
  return (
    <Box mt={"0.2rem"}>
      <Box
        borderWidth={"1px"}
        borderColor="black"
        borderRadius="lg"
        display={"flex"}
        p="1"
      >
        <Avatar></Avatar>
        <Box display={"flex"} flexDirection={"column"} marginLeft="0.7rem">
          <Text fontWeight={"bold"}>Name</Text>
          <Text fontSize={"sm"}>Email</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default UserList;
