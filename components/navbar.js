import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  Button,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import { AnimatePresence, motion } from "framer-motion";
import { React } from "react";
import LanguageToggleButton from "./LanguageButton";
import { GrGithub } from "react-icons/gr";

import { useContext } from "react";
import AppContext from "../AppContext";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  const activeColor = useColorModeValue("white", "black");
  const bgColor = useColorModeValue("purple", "orange");
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton>
          <NextLink href={href}>
            <Link
              p={2}
              color={active ? activeColor : inactiveColor}
              bg={active ? bgColor : undefined}
            >
              {children}
            </Link>
          </NextLink>
        </IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

const Navbar = (props) => {
  const { path } = props;
  const value = useContext(AppContext);
  let { navHome, navWork, navPost, navSource } = value.state.languages;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={2}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            {navWork}
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            {navPost}
          </LinkItem>
          <NextLink href={"https://github.com/etna2259/My-Portfolio"}>
            <Button leftIcon={<GrGithub />} variant="solid" colorScheme="teal">
              {navSource}
            </Button>
          </NextLink>
        </Stack>

        <Box flex={1} align="right">
          <LanguageToggleButton />
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              ></MenuButton>
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>{navHome}</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>{navWork}</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>{navPost}</MenuItem>
                </NextLink>
                <MenuItem
                  icon={<GrGithub />}
                  as={Link}
                  href="https://github.com/etna2259/My-Portfolio"
                >
                  {navSource}
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
