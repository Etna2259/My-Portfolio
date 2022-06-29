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

const Work = () => (
  <Layout title="Lost Ark Event Bot">
    <Container maxW="container.md">
      <Title>
        Lost Ark Event Bot <Badge>2022/2</Badge>
      </Title>
      <Paragraph>
        I assisted my friend @soulden1202 in making an Event Bot designed for
        Discord announcement about in-game events occuring in Lost Ark. Lost Ark
        is a MMORPG online game that has many "World Activites" that occurs
        during specific in-game time which is cumbersome to keep track of. In
        order to solve that, he decided to make a bot that would notify everyone
        in the server automatically.
      </Paragraph>
      <Paragraph>Features of it includes:</Paragraph>

      <UnorderedList ml={10} my={4}>
        <ListItem>
          Notifications on
          <OrderedList ml={8}>
            <ListItem>Merchants locations and time</ListItem>
            <ListItem>Field Boss events</ListItem>
            <ListItem>Chaos Gate</ListItem>
            <ListItem>Special in-game events</ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          Allows for automatic tagging of Event Tags to notify users before X
          period of time
        </ListItem>
      </UnorderedList>

      <Paragraph>Deployment requires dedicated server hosting</Paragraph>

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
            <Button leftIcon={<GrGithub />} variant="ghost" colorScheme="teal">
              Github
            </Button>
          </NextLink>
        </ListItem>
      </List>

      <WorkImage src="/images/works/EventBot01.png" alt="eventBot" />
      <WorkImage src="/images/works/EventBot02.png" alt="eventBot" />
    </Container>
  </Layout>
);

export default Work;
