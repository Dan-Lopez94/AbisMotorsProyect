import { Box, Heading, Image, Text } from "@chakra-ui/react"


export default function CategoryCard() {

    return <>
        <Box maxW={"250px"} h={"300px"} bgColor={"white"} borderRadius={10} border={"1px"}>
            <Box h={"70%"} padding={"10px 0px"}>
                <Image borderRadius={10} w={"90%"} h={"100%"} objectFit={"cover"} src="/image/transmission.jpeg" alt="not found" />
            </Box>
            <Box spacing="2" textAlign={"left"} pl={2}>
                <Heading size={"md"}>Transmisión</Heading>
                <Text>Se hace cambio de transmisión a una moto</Text>
            </Box>
        </Box>
    </>
}