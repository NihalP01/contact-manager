import { Box } from "@chakra-ui/react";
import React from "react";
import { Pages } from "./components/pages/Pages";

const App: React.FC = () => {
  return (
    <Box>
      <Pages.HomePage />
    </Box>
  );
};

export default App;
