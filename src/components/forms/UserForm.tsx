import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { Controls } from "../controls/Controls";

const UserForm = () => {
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");

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
        shadow="md"
      >
        <Box p={"6"}>
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
              text="Save"
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
