import React from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Heading,
  Image,
  Input,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
function Navbar() {
  const [isSmallerThan420px] = useMediaQuery("(max-width: 420px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      {!isSmallerThan420px && (
        <HStack
          px={"8%"}
          py={"20px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          margin={"auto"}
          backgroundColor={"#EA8FEA"}
        >
          <Box>
            <Image
              borderRadius="full"
              boxSize="100px"
              src="https://iili.io/HO2FR1e.gif"
              alt="logo"
            />
          </Box>
          <Heading
            cursor={"pointer"}
            _hover={{ color: "red", textDecoration: "underline" }}
            size={["md", "lg", "xl"]}
          >
            Recipes
          </Heading>
          <Heading
            cursor={"pointer"}
            _hover={{ color: "red", textDecoration: "underline" }}
          >
            Login
          </Heading>
          <Heading
            cursor={"pointer"}
            _hover={{ color: "red", textDecoration: "underline" }}
          >
            Signup
          </Heading>
        </HStack>
      )}
      {isSmallerThan420px && (
        <HStack
          px={"8%"}
          py={"20px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          margin={"auto"}
          backgroundColor={"#EA8FEA"}
        >
          <Box>
            <Image
              borderRadius="full"
              boxSize="70px"
              src="https://iili.io/HO2FR1e.gif"
              alt="logo"
            />
          </Box>
          <Heading size={"2xl"}>Recipes</Heading>
          <GiHamburgerMenu
            cursor={"pointer"}
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
            fontSize={"50px"}
          />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="xs"
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody
                backgroundColor={"#EA8FEA"}
                display={"grid"}
                py={"20vh"}
                justifyContent={"space-evenly"}
                alignItems={"center"}
              >
                <Heading size={"md"}>Account</Heading>
                <Heading size={"md"}>Login</Heading>
                <Heading size={"md"}>Signup</Heading>
                <Heading size={"md"}>My Recipes</Heading>
                <Heading size={"md"}>Saved Recipes</Heading>
                <Heading size={"md"}>Logout</Heading>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </HStack>
      )}
    </>
  );
}

export default Navbar;
