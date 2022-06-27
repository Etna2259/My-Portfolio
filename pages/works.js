import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-items";
import Layout from "../components/layouts/article";
import thumbFirstProject from "../public/images/works/MusashinoENT.png";
import thumbEventBot from "../public/images/works/EventBot.png";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="firstProject"
              title="My First Webpage"
              thumbnail={thumbFirstProject}
            >
              A clinic webpage I made back in 2021 when i started learning about
              HTML/CSS and Javascript
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.1}>
          <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>

        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem
              id="LA-Event-Bot"
              title="Lost Ark Event Bot"
              thumbnail={thumbEventBot}
            >
              I assisted a friend in making an automatic notifier bot for events
              in Lost Ark
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
