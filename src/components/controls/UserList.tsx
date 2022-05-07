import { Avatar, Box, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const UserList = () => {
  return (
    <Box mt={"0.2rem"}>
      <Box
        width={"100%"}
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
        borderWidth={"1px"}
        borderColor="#48BB78"
        borderRadius="lg"
        p="1"
      >
        <Box display={"flex"}>
          <Avatar></Avatar>
          <Box display={"flex"} flexDirection={"column"} marginLeft="0.7rem">
            <Text fontWeight={"bold"}>Name</Text>
            <Text fontSize={"sm"}>Email</Text>
          </Box>
        </Box>
        <Box>
          <IconButton
            aria-label="Edit contact"
            colorScheme={"green"}
            icon={<BiEdit />}
            size="sm"
          />
          <IconButton
          ml={"0.2rem"}
            aria-label="Delete contact"
            colorScheme={"red"}
            size="sm"
            icon={<MdDeleteForever />}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default UserList;
