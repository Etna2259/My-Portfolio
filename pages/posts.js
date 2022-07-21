import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { PostGridItem } from "../components/grid-items";
import { BioSection, BioYear } from "../components/bio";

import { useContext } from "react";
import AppContext from "../AppContext";

import thumbCoding from "../public/images/contents/coding.png";

const Posts = () => {
  const value = useContext(AppContext);
  let { postHeading1, postPost1, postParagraph1 } = value.state.languages;
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={23} mb={4}>
          {postHeading1}
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid gap={6}>
            <Heading variant="timeline">
              <BioSection>
                <BioYear>2022/7</BioYear>
              </BioSection>
            </Heading>

            <PostGridItem
              id="thisWebsite"
              title={postPost1}
              thumbnail={thumbCoding}
            >
              {postParagraph1}
            </PostGridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default Posts;
