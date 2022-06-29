import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-items";
import Layout from "../components/layouts/article";
import thumbFirstProject from "../public/images/works/MusashinoENT.png";
import thumbEventBot from "../public/images/works/EventBot.png";

import { useContext } from "react";
import AppContext from "./AppContext";

const Works = () => {
  const value = useContext(AppContext);
  let {
    workHeading1,
    workWork1,
    workParagraph1,
    workHeading2,
    workCollab1,
    collabParagraph1,
  } = value.state.languages;

  return (
    <Layout>
      <Container maxW="2xl">
        <Heading as="h3" fontSize={20} mb={4}>
          {workHeading1}
        </Heading>

        <SimpleGrid gap={6}>
          <Section>
            <WorkGridItem
              id="firstProject"
              title={workWork1}
              thumbnail={thumbFirstProject}
            >
              {workParagraph1}
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.1}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            {workHeading2}
          </Heading>
        </Section>

        <SimpleGrid gap={6}>
          <Section delay={0.2}>
            <WorkGridItem
              id="eventBot"
              title={workCollab1}
              thumbnail={thumbEventBot}
            >
              {collabParagraph1}
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
