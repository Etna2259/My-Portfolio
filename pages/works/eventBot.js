import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { GrGithub } from "react-icons/gr";
import {
  Button,
  List,
  ListItem,
  UnorderedList,
  Text,
  Link,
  Badge,
  Container,
  OrderedList,
} from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import { Paragraph } from "../../components/paragraph";
import Layout from "../../components/layouts/article";

import { useContext } from "react";
import AppContext from "../../AppContext";

const Work = () => {
  const value = useContext(AppContext);
  let {
    ebTitle,
    ebParagraph1,
    ebParagraph2,
    ebList1,
    ebList2,
    ebList3,
    ebList4,
    ebList5,
    ebList6,
    ebParagraph3,
  } = value.state.languages;

  return (
    <Layout title="Lost Ark Event Bot">
      <Container>
        <Text fontSize={{ base: "15px", md: "21px" }}>
          <Title>
            {ebTitle}
            <Badge>2022/2</Badge>
          </Title>
          <Paragraph>{ebParagraph1}</Paragraph>
          <Paragraph>{ebParagraph2}</Paragraph>

          <UnorderedList ml={10} my={4}>
            <ListItem>
              {ebList1}
              <OrderedList ml={8}>
                <ListItem>{ebList2}</ListItem>
                <ListItem>{ebList3}</ListItem>
                <ListItem>{ebList4}</ListItem>
                <ListItem>{ebList5}</ListItem>
              </OrderedList>
            </ListItem>
            <ListItem>{ebList6}</ListItem>
          </UnorderedList>

          <Paragraph>{ebParagraph3}</Paragraph>

          <List ml={8} my={4}>
            <ListItem>
              <Meta>Author</Meta>
              <Link href="https://github.com/soulden1202">
                soulden1202@Github
                <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Node.js, dotenv TypeScript, Discord.js</span>
            </ListItem>
            <ListItem>
              <Meta>Source Code</Meta>
              <NextLink href={"https://github.com/Etna2259/LA-Event-Bot"}>
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

          <WorkImage src="/images/works/EventBot01.png" alt="eventBot" />
          <WorkImage src="/images/works/EventBot02.png" alt="eventBot" />
        </Text>
      </Container>
    </Layout>
  );
};

export default Work;
