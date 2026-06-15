import { Box, Heading, Image, Text } from "@chakra-ui/react"


export default function CategoryCard(props) {

    return <>
        <Box mt={2} maxW={{ base: "150px", md: "200px", lg: "250px" }} h={{ base: "200px", md: "250px", lg: "300px" }} bgColor={"white"} borderRadius={10} border={"1px"} align="center">
            <Box h={"70%"} padding={"10px 0px"}>
                <Image borderRadius={10} w={"90%"} h={"100%"} objectFit={"cover"} src={props.img} alt="not found" />
            </Box>
            <Box spacing="2" textAlign={"left"} pl={2}>
                <Heading size={{ base: "sm", md: "sm", lg: "md" }}>{props.title}</Heading>
                <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>{props.description}</Text>
            </Box>
        </Box>
    </>
}