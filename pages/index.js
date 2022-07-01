import {
  Link,
  Button,
  Container,
  Box,
  Text,
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
import NextLink from "next/link";
import React from "react";

import { useContext } from "react";
import AppContext from "../AppContext";

const Page = () => {
  const value = useContext(AppContext);
  let {
    indexIntro,
    indexTitle,
    indexHeading1,
    indexWork1,
    indexWork2,
    indexWork3,
    indexButton,
    indexHeading2,
    indexYear2001,
    indexYear2019,
    indexYear2022,
    indexHeading3,
    indexHobbies,
    indexHeading4,
  } = value.state.languages;

  return (
    <Layout>
      <Container maxW="2xl">
        <Text fontSize={{ base: "15px", md: "21px" }}>
          <Box
            borderRadius="lg"
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            p={3}
            mb={6}
            align="center"
          >
            {indexIntro}
          </Box>

          <Box display={{ md: "flex" }}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title">
                Nguyen Minh Quan
              </Heading>
              <p>{indexTitle}</p>
            </Box>

            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
              align="center"
            >
              <Link href="https://twitter.com/zo3mie/status/1537721734480424962?s=20&t=NkZxgPzXh_j9A8lTejDMfg">
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
              </Link>
            </Box>
          </Box>

          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              {indexHeading1}
            </Heading>

            <Paragraph>{indexWork1}</Paragraph>
            <Paragraph>{indexWork2}</Paragraph>
            <Paragraph>{indexWork3}</Paragraph>

            <Box align="center" my={4}>
              <NextLink href={"/works"}>
                <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                  {indexButton}
                </Button>
              </NextLink>
            </Box>
          </Section>
          <Section delay={0.2}>
            <Heading as="h3" variant="section-title">
              {indexHeading2}
            </Heading>

            <BioSection>
              <BioYear>2001</BioYear>
              {indexYear2001}
            </BioSection>
            <BioSection>
              <BioYear>2019</BioYear>
              {indexYear2019}
            </BioSection>
            <BioSection>
              <BioYear>2022</BioYear>
              {indexYear2022}
            </BioSection>
          </Section>

          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              {indexHeading3}
            </Heading>
            <Paragraph>{indexHobbies}</Paragraph>
          </Section>

          <Section delay={0.4}>
            <Heading as="h3" variant="section-title">
              {indexHeading4}
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
                  LinkedIn
                </Button>
              </NextLink>
              <NextLink href={"https://github.com/etna2259"}>
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
        </Text>
      </Container>
    </Layout>
  );
};

export default Page;
