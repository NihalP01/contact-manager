import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Controls } from "../components/controls/Controls";

import {
  Popover,
  PopoverTrigger as OrigPopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Forms } from "../components/forms/Forms";

export const PopoverTrigger: React.FC<{ children: React.ReactNode }> =
  OrigPopoverTrigger;

const HomePage = () => {
  const addContact = () => {};

  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      shadow={"md"}
      backgroundColor=""
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

        {/* //POP UP Implementation */}
        <Popover
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          placement="bottom"
          closeOnBlur={false}
        >
          <PopoverTrigger>
            <Box>
              <Controls.InputButton
                text="Add Contact"
                onClick={addContact}
                colorScheme="cyan"
                size="sm"
              />
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader fontWeight="semibold">
              Enter contact details
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <Forms.UserForm />
          </PopoverContent>
        </Popover>
      </Box>
      <Box>
        <Controls.SearchSection />
      </Box>

      <Box pl="4" pr="4" pb="4" mt="0.2rem">
        {/* FIXME:For Testing  */}
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
