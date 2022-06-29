import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { GrGithub } from "react-icons/gr";
import {
  Container,
  Text,
  Badge,
  Link,
  List,
  Button,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import { Paragraph } from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="My First Webpage">
    <Container maxW="container.md">
      <Text fontSize={{ base: "15px", md: "21px" }}>
        <Title>
          My First Webpage <Badge>2021/6</Badge>
        </Title>
        <Paragraph>
          This is a Clinic office webpage redesigned in a group project in a
          university course work back in 2021/6. Features of this page includes:
        </Paragraph>

        <UnorderedList ml={8} my={4}>
          <ListItem>
            Interactive in-page map showing the clinic's location
          </ListItem>
          <ListItem>
            Multiple redirected pages describing the clinic's services
          </ListItem>
          <ListItem>
            Available in 2 languages both in English and Japanese via a drop
            down menu for language swap (Not website wide unfortunately)
          </ListItem>
          <ListItem>
            Optimizied for both Desktop and Mobile devices viewing experience
          </ListItem>
        </UnorderedList>

        <Paragraph>
          This page is special because it is my first project working with web
          development
        </Paragraph>

        <List ml={6} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://etna2259.github.io/First-Web-Project/">
              https://etna2259.github.io/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML5, CSS3, Javascript</span>
          </ListItem>
          <ListItem>
            <Meta>Source Code</Meta>
            <NextLink href={"https://github.com/Etna2259/First-Web-Project"}>
              <Button
                leftIcon={<GrGithub />}
                variant="ghost"
                colorScheme="teal"
              >
                Github
              </Button>
            </NextLink>
          </ListItem>
        </List>

        <WorkImage src="/images/works/Musashino01.png" alt="firstProject" />
        <WorkImage src="/images/works/Musashino02.png" alt="firstProject" />
      </Text>
    </Container>
  </Layout>
);

export default Work;
