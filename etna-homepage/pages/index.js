import { Container, Box, Heading } from '@chakra-ui/react'
const Page = () => {
    return (
        <Container>
            <Box borderRadius='lg' bg="red" p={6} align="center">
            Hello, I&apos;m a data analyst based in Japan!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                     Nguyen Minh Quan   
                    </Heading>
        <p>Tech Ethusiast ( Manga-reader / Programmer / Data Analyst )</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page