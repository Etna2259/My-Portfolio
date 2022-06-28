import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import { Paragraph } from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="My First Webpage">
    <Container>
      <Title>
        My First Webpage <Badge>2021/6</Badge>
      </Title>
      <Paragraph>
        This is a Clinic webpage redesigned in a group project in a course work
        back in 2021/6. Features of this page includes:
      </Paragraph>
      <UnorderedList ml={6} my={4}>
        <ListItem>
          Interactive in-page map showing the clinic's location
        </ListItem>
        <ListItem>
          Multiple redirected pages describing the clinic's services
        </ListItem>
        <ListItem>
          Available in 2 languages both in English and Japanese via a drop down
          menu for language swap (Not website wide unfortunately)
        </ListItem>
        <ListItem>
          Optimizied for both Desktop and Mobile devices viewing experience
        </ListItem>
      </UnorderedList>
      <Paragraph>
        This page is special because it is my first independent project working
        with web development
      </Paragraph>
    </Container>
  </Layout>
);

export default Work;
