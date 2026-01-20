import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <Box bgImage="url('/image/font2.jpeg')" bgPosition={"center"} bgRepeat={"no-repeat"} bgSize={{ base: "contain", lg: "cover" }} h={"100vh"}>
      <App />
    </Box>
  </ChakraProvider>
);
