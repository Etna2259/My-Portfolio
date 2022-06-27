import NextLink from "next/link";
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Paragraph } from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";

import { GrLinkedin, GrGithub, GrFacebook } from "react-icons/gr";

const Page = () => {
  return (
    <Layout>
      <Container maxW="2xl">
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a data analyst based in Japan!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Nguyen Minh Quan
            </Heading>
            <p>Tech Ethusiast ( Digital Consultant / Programmer )</p>
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
            University majoring in Digital Business and Innovations. I am
            building my skillset aiming to become a Data Analyst or Data
            Scientist position. I have been learning Python, R and Tableau for
            close to 2 years with experience in Data Visualizations and
            Statistics. Aside from that, I am also interested in HTML/CSS and
            Javascript as well.
          </Paragraph>
          <Paragraph>
            I wish to get more internships with relates to the IT fields in
            general or Analytical positions.
          </Paragraph>
          <Paragraph>
            Thank you so much for reading my profile! <br></br>
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href={"/works"}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>

          <BioSection>
            <BioYear>2001</BioYear>
            Born in Ho Chi Minh City, Viet Nam.
          </BioSection>
          <BioSection>
            <BioYear>2019</BioYear>
            Entered Tokyo International University with the goal of a
            Bachelor&apos;s Degree in Business Economics at Saitama, Japan.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Finished a 4-month Internship at Adam Innovations working as a
            Digital Consultant (DX) helping to solve problems for other
            businesses.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            My hobbies
          </Heading>
          <Paragraph>
            Manga, Music, Light Novels, Anime, Video Games, Taking pictures of
            Food
          </Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            My contacts
          </Heading>
          <Box align="center" my={1}>
            <NextLink
              href={"https://www.linkedin.com/in/nguyen-minh-quan-041332242/"}
            >
              <Button
                leftIcon={<GrLinkedin />}
                variant="ghost"
                colorScheme="teal"
              >
                Linkedin
              </Button>
            </NextLink>
            <NextLink href={"https://github.com/canconan123"}>
              <Button
                leftIcon={<GrGithub />}
                variant="ghost"
                colorScheme="teal"
              >
                Github
              </Button>
            </NextLink>
            <NextLink href={"https://www.facebook.com/minhquanlaw"}>
              <Button
                leftIcon={<GrFacebook />}
                variant="ghost"
                colorScheme="teal"
              >
                Facebook
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
