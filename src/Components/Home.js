import { Box } from "@chakra-ui/react"
import CategoryCard from "./CardComponents/CategoryCard"

export default function Home() {

    return (<Box bgImage={"url('/image/font.jpg')"} bgRepeat={"no-repeat"} bgSize={"cover"}>
        <Box bgImage="url('/image/font2.jpeg')" bgPosition={"center"} bgRepeat={"no-repeat"} bgSize={"contain"} h={"100vh"}>
            <Box>
                <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)' }} gap={2} align="center">
                    <GridItem colSpan={1}>
                        <CategoryCard
                            img="/image/transmission.jpeg"
                            title="Transmisión"
                            description="Se hace cambio de transmisión a una moto"
                        />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <CategoryCard
                            img="/image/pastasClutch.jpeg"
                            title="Pastas de clutch"
                            description="Se hacen cambios de pastas de clutch"
                        />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <CategoryCard
                            img="/image/embrague.jpeg"
                            title="Sistema de clutch"
                            description="Se hace mantenimiento al sistema de clutch"
                        />
                    </GridItem>
                </Grid>
            </Box>
        </Box>
    </Box>
    )
}