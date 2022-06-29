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

import { useContext } from "react";
import AppContext from "../../AppContext";

const Work = () => {
  const value = useContext(AppContext);
  let {
    fpTitle,
    fpParagraph1,
    fpList1,
    fpList2,
    fpList3,
    fpList4,
    fpParagraph2,
  } = value.state.languages;

  return (
    <Layout title="My First Webpage">
      <Container>
        <Text fontSize={{ base: "15px", md: "21px" }}>
          <Title>
            {fpTitle} <Badge>2021/6</Badge>
          </Title>
          <Paragraph>{fpParagraph1}</Paragraph>

          <UnorderedList ml={8} my={4}>
            <ListItem>{fpList1}</ListItem>
            <ListItem>{fpList2}</ListItem>
            <ListItem>{fpList3}</ListItem>
            <ListItem>{fpList4}</ListItem>
          </UnorderedList>

          <Paragraph>{fpParagraph2}</Paragraph>

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
};

export default Work;
