import React from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Heading,
  Image,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/"> Recipes</NavLink>
          </Heading>
          <Heading
            cursor={"pointer"}
            _hover={{ color: "red", textDecoration: "underline" }}
            size={["md", "lg", "xl"]}
          >
            <NavLink to="/login">Login</NavLink>
          </Heading>
          <Heading
            cursor={"pointer"}
            _hover={{ color: "red", textDecoration: "underline" }}
            size={["md", "lg", "xl"]}
          >
            <NavLink to="/signup"> Signup</NavLink>
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
          <Heading size={"2xl"}>
            {" "}
            <NavLink to="/"> Recipes</NavLink>
          </Heading>
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
                <Heading size={"md"}>
                  <NavLink to="/login">Login</NavLink>
                </Heading>
                <Heading size={"md"}>
                  <NavLink to="/signup">Signup</NavLink>
                </Heading>
                <Heading size={"md"}>
                  <NavLink to="/myrecipes">My Recipes</NavLink>
                </Heading>
                <Heading size={"md"}>
                  <NavLink to="/savedrecipes">Saved Recipes</NavLink>
                </Heading>
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
