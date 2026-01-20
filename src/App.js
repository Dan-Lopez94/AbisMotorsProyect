import { Box, Heading } from "@chakra-ui/react";
import Menu from "./Components/Menu";
import './css/style.css'

function App() {
  return <Box className="no-select" display={"flex"} style={{ justifyContent: "center" }}>

    <Heading color={"white"} align="center" textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)">
      Bienvenidos a Abi's Motor's
    </Heading>
    <Menu />

  </Box>;
}

export default App;
