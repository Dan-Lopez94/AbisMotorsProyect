import { Box, Grid, GridItem, Heading } from "@chakra-ui/react"
import MenuHamburguer from "./MenuHamburguer"


export default function Home() {

    return (
        <>
            <Box className="no-select" borderBottomColor={"black"} pb={2} borderBottomWidth={"2px"}
                backdropFilter="blur(6px)">
                <Box display={{ base: "none", sm: "block", md: "block", lg: "block" }}>
                    <Grid templateColumns={"repeat(3, 1fr)"} gap={2}>
                        <GridItem colSpan={2} justifyItems={"end"} >
                            <Heading color={"black"} textShadow="2px 2px 4px rgba(245, 241, 241, 0.4)">
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
            </Box>
            <Box bgImage="url('/image/font2.jpeg')" bgPosition={"center"} bgRepeat={"no-repeat"} bgSize={{ base: "contain", lg: "cover" }} h={"100vh"}></Box>
        </>
    )
}