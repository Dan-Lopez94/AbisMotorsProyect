import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Box bgImage="url('/image/font.jpg')" bgSize={"cover"} h={"100vh"}>
      <App />
    </Box>
  </ChakraProvider>
);
