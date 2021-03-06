import {
  IconButton,
  Menu,
  MenuItem,
  Link,
  Box,
  MenuList,
  Button,
  MenuButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { MdTranslate } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { React } from "react";
import AppContext from "../AppContext";
import { useContext } from "react";

const LanguageToggleButton = () => {
  const value = useContext(AppContext);

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
        <Box display={{ base: "inline-block"}}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Toggle Language"
              colorScheme={useColorModeValue("purple", "orange")}
              icon={<MdTranslate />}
              mr={2}
            >
              {" "}
            </MenuButton>
            <MenuList>
              <Button onClick={() => value.setLanguageSelected("en")}>
                <MenuItem as={Link}>English</MenuItem>
              </Button>
              <Button ml={1} onClick={() => value.setLanguageSelected("jp")}>
                <MenuItem as={Link}>日本語</MenuItem>
              </Button>
            </MenuList>
          </Menu>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default LanguageToggleButton;
