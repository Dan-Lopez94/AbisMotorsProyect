import { Box, Heading, Image, Text } from "@chakra-ui/react"


export default function CategoryCard() {

    return <>
        <Box maxW={{ base: "150px", md: "200px", lg: "250px" }} h={{ base: "200px", md: "250px", lg: "300px" }} bgColor={"white"} borderRadius={10} border={"1px"}>
            <Box h={"70%"} padding={"10px 0px"}>
                <Image borderRadius={10} w={"90%"} h={"100%"} objectFit={"cover"} src="/image/transmission.jpeg" alt="not found" />
            </Box>
            <Box spacing="2" textAlign={"left"} pl={2}>
                <Heading size={{ base: "sm", md: "sm", lg: "md" }}>Transmisión</Heading>
                <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>Se hace cambio de transmisión a una moto</Text>
            </Box>
        </Box>
    </>
}