import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import './css/style.css'
import MenuHamburguer from "./Components/Menu";

function App() {
  return <Box className="no-select" borderBottomColor={"black"} pb={2} borderBottomWidth={"2px"} bg="whitekAlpha.600"
    backdropFilter="blur(6px)"
    zIndex="1000">
    <Box display={{ base: "none", sm: "block", md: "block", lg: "block" }}>
      <Grid templateColumns={"repeat(3, 1fr)"} gap={2}>
        <GridItem colSpan={2} justifyItems={"end"} >
          <Heading color={"white"} textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)">
            Bienvenidos a Abi's Motor's
          </Heading>
        </GridItem>
        <GridItem colSpan={1}>
          <Box textAlign={"end"} alignContent={"center"} pr={5} h={"100%"}>
            <MenuHamburguer />
          </Box>
        </GridItem>
      </Grid>
    </Box>
    <Box display={{ base: "block", sm: "none", md: "none", lg: "none" }} textAlign={"center"} >
      <Box display={"flex"}>
        <Heading color={"white"} textShadow="2px 2px 4px rgba(0, 0, 0, 0.4)">
          Bienvenidos a Abi's Motor's
        </Heading>
        <Box textAlign={"end"} alignSelf={"center"} pr={5} h={"100%"}>
          <MenuHamburguer />
        </Box>

      </Box>
    </Box>

  </Box>;
}

export default App;
