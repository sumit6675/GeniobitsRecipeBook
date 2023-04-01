import React, { useState } from 'react'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import {NavLink, useNavigate} from "react-router-dom"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { backendLink } from '../BackendLink';
const initState = {
  name: "",
  email: "",
  password: ""
}
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState(initState)
  const handleChange = e => {
    const {name, value} = e.target
    setState( { ...state, [name]: value} )
  }
  const toast = useToast();
  const Navigate = useNavigate();
  const HandleSubmit = async() => {
    if (state.email.includes("@") && state.email.includes(".com")) {
     await fetch(`${backendLink}/users/register`, {
        method: "POST",
        body: JSON.stringify(state),
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message === "Email already register") {
            toast({
              title: "Account already register",
              description: "Please Login ",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            setTimeout(() => {
              Navigate("/login");
            }, 2200);
          } else {
            toast({
              title: "Account has been created",
              description: "Welcome to Apna Bazar",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            setTimeout(() => {
              Navigate("/login");
            }, 2200);
          }
        })
        .catch((err) => {
          console.log("err :>> ", err);
          toast({
            title: "Signup  Failed",
            description: "Please Enter All Data",
            status: "error",
            duration: 2000,
            isClosable: true,
          });
        });
    } else {
      toast({
        title: "Invalid Email",
        description: "Please Type correct email format",
        status: "error",
        duration: 1000,
        isClosable: true,
      });
    }
  };
  return (
    <Flex
    minH={"90vh"}
    align={"center"}
    justify={"center"}
    bg={useColorModeValue("gray.50", "gray.800")}
  >
    <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
      <Stack align={"center"}>
        <Heading fontSize={["2xl","2xl","3xl","3xl","3xl","3xl"]} textAlign={"center"}>
        Join The Geniobits Family!
        </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Already have an account? Please
            <NavLink to="/login" color={"blue.400"}> Login</NavLink> ✌️
          </Text>
      </Stack>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
      >
        <Stack spacing={4}>
          <FormControl id="firstName" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={state.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={state.email}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
              <InputRightElement h={"full"}>
                <Button
                  variant={"ghost"}
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack spacing={10} pt={2}>
            <Button
              loadingText="Submitting"
              size="lg"
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              onClick={HandleSubmit}
            >
              Sign up
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={"center"}>
              Already a user?{" "}
                <NavLink to="/login" color={"blue.400"}>Login</NavLink>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  )
}

export default Signup