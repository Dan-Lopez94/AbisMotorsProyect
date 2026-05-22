import { Box, Text } from "@chakra-ui/react"


export default function CategoryCard() {

    return <>
        <Box maxW={"250px"} maxH={"300px"} backgroundColor={"skyblue"} overflow={"hidden"}>
            <Box h={"100%"}>
                {Array.from({ length: 20 }).map((_, i) => (
                    <Text key={i}>Contenido</Text>))}
            </Box>
        </Box>
    </>
}