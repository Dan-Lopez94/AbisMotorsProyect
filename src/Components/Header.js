import { Box, Grid, GridItem, Heading } from "@chakra-ui/react"
import MenuHamburguer from "./MenuHamburguer"
import "../css/style.css"

export default function Header() {
    return <>
        <Box className="no-select" borderBottomColor={"black"} padding={"5px 0px"} borderBottomWidth={"2px"}>
            <Box display={{ base: "none", sm: "block", md: "block", lg: "block" }}>
                <Grid templateColumns={"repeat(3, 1fr)"} gap={2}>
                    <GridItem colSpan={2} justifyItems={"end"} >
                        <Heading color={"white"} textShadow="2px 2px 2px rgba(0, 0, 0, 0.7)">
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
                <Box >
                    <Grid templateColumns={"repeat(3, 1fr)"} gap={2}>
                        <GridItem colSpan={2} justifyItems={"end"} >
                            <Heading color={"white"} textShadow="2px 2px 2px rgba(0, 0, 0, 0.7)">
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
            </Box>
        </Box>
    </>
}