import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Controls } from "../controls/Controls";

const UserForm = () => {
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

  console.log(email + userName);

  const handleClick = () => {
    //   TODO:Implement it later
  };

  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Box
        maxW="md"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        backgroundColor={"#a5d6a7"}
        shadow="md"
      >
        <Box p={"6"}>
          <Text textAlign={"center"} fontSize="2xl" mb={"0.5rem"}>
            Contact Manager
          </Text>
          <Box>
            <Controls.InputField
              placeHolder="Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              size="md"
            />
          </Box>
          <Box mt={"0.5rem"}>
            <Controls.InputField
              placeHolder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              size="md"
            />
          </Box>
          <Box
            mt={"0.5rem"}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Controls.InputButton
              text="Add"
              onClick={handleClick}
              colorScheme={"blue"}
              size="sm"
            />
          </Box>
        </Box>
      </Box>
    </form>
  );
};

export default UserForm;
