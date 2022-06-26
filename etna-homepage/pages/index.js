import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a data analyst based in Japan!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nguyen Minh Quan
          </Heading>
          <p>Tech Ethusiast ( Manga-reader / Programmer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="Solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/mayano.png"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          My name is Quan, currently a 3rd year student at Tokyo International
          University majoring in Digital Business and Innovations. I am building
          my skillset aiming to become a Data Analyst or Data Scientist
          position. I have been learning Python, R and Tableau for close to 2
          years with experience in Data Visualizations and Statistics. Aside
          from that, I am also interested in HTML/CSS and Javascript as well.
        </Paragraph>
        <Paragraph>
          I wish to get more internships with relates to the IT fields in
          general or Analytical positions.
        </Paragraph>
        <Paragraph>
          Thank you so much for reading my profile! <br></br>{' '}
          <Link href="https://www.linkedin.com/in/nguyen-minh-quan-041332242/">
            My Linkedin
          </Link>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href={'/works'}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" varian="section-title">
            Bio
        </Heading>
        <BioSection>
            <BioYear>2001</BioYear>
            Born in Ho Chi Minh (ホーチミン), Viet Nam.
        </BioSection>
        <BioSection>
            <BioYear>2019</BioYear>
            Entered Tokyo International University with the goal of a 
            Bachelor&apos;s Degree in Business Economics at Saitama, Japan.
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
