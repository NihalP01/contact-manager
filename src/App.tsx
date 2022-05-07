import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { Pages } from "./components/pages/Pages";

const App: React.FC = () => {
  return (
    <Container>
      <Box mt={"2rem"}>
        <Pages.HomePage />
      </Box>
    </Container>
  );
};

export default App;
