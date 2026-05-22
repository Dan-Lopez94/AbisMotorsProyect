import { Box } from "@chakra-ui/react"
/* import CategoryCard from "./CardComponents/CategoryCard" */

export default function Home() {

    return (<Box bgImage={"url('/image/font.jpg')"} bgRepeat={"no-repeat"} bgSize={"cover"}>
        <Box bgImage="url('/image/font2.jpeg')" bgPosition={"center"} bgRepeat={"no-repeat"} bgSize={"contain"} h={"100vh"}>
            <Box align="center">
                {/* <CategoryCard /> */}
            </Box>
        </Box>
    </Box>
    )
}