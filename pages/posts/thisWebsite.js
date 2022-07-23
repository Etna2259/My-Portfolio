import {
  Container,
  Text,
  Badge,
  Link,
  Box,
} from "@chakra-ui/react";
import { Title3, WorkImage} from "../../components/work";
import { Paragraph, Conclusion } from "../../components/paragraph";
import Layout from "../../components/layouts/article";

import { useContext } from "react";
import AppContext from "../../AppContext";

const Work = () => {
  const value = useContext(AppContext);
  let {
    twTitle,
    twParagraph1,
    twParagraph2,
    twParagraph3,
    twParagraph4,
    twParagraph5,
    twParagraph6,
    twParagraph7,
  } = value.state.languages;

  return (
    <Layout title="My First Webpage">
      <Container maxW="3xl">
        <Text fontSize={{ base: "15px", md: "20px" }}>
          <Title3>
            {twTitle} <Badge>2022/7/1</Badge>
          </Title3>
          <Paragraph>{twParagraph1}</Paragraph>

          <Paragraph>{twParagraph2}</Paragraph>
          <Box padding={4}>
            <Link href={"https://youtu.be/bSMZgXzC9AA"}>
              <WorkImage src="/images/posts/YouTube.png" alt="thisWebsite" />
            </Link>
          </Box>

          <Paragraph>{twParagraph3}</Paragraph>
          <Box padding={4}>
            <WorkImage src="/images/posts/Coding.png" alt="thisWebsite" />
          </Box>

          <Paragraph>{twParagraph4}</Paragraph>
          <Box padding={4}>
            <WorkImage src="/images/posts/ChakraUI.png" alt="thisWebsite" />
          </Box>

          <Paragraph>{twParagraph5}</Paragraph>
          <Box padding={4}>
            <WorkImage
              src="/images/posts/LanguageButton.png"
              alt="thisWebsite"
            />
          </Box>

          <Paragraph>{twParagraph6}</Paragraph>
          <Paragraph>{twParagraph7}</Paragraph>

          <Box paddingTop={4} paddingBottom={4}>
            <Conclusion>Quan - 2022/7/23</Conclusion>
          </Box>
        </Text>
      </Container>
    </Layout>
  );
};

export default Work;
