import Head from "next/head";
import Navbar from "../navbar.js";
import { Box, Container } from "@chakra-ui/react";
import localization from "../localization";
import Footer from '../footer'

import { useState } from "react";
import AppContext from "../../AppContext.js";

const Main = ({ children, router }) => {
  const [languageSelected, setLanguageSelected] = useState("en");
  const languageObject = localization;

  return (
    <AppContext.Provider
      value={{
        state: {
          languages: languageObject[languageSelected],
          languageSelected: languageSelected,
        },
        setLanguageSelected: setLanguageSelected,
      }}
    >
      <Box as="main" pb={8}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Nguyen Minh Quan - Homepage</title>
        </Head>

        <Navbar path={router.asPath} />

        <Container maxW="container.md" pt={20}>
          {children}
          
          <Footer />
        </Container>
      </Box>
    </AppContext.Provider>
  );
};

export default Main;
