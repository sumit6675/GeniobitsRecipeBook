import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Authentication/Auth.Actions";
const initState = {
  email: "",
  password: "",
};
function Login() {
  const { isAuth, error } = useSelector((store) => store.AuthManager);
  const [state, setState] = useState(initState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = () => {
    dispatch(login(state));
  };
  useEffect(() => {
    if (isAuth) {
      navigate("/");
      toast({
        title: "Login Sucsess",

        description: "We've login to your account for you.",

        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
    if (error) {
      toast({
        title: "Login Failed",
        description: "Please try again.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [isAuth, navigate, toast, error]);
  return (
    <Flex
      w="100%"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={["2xl", "2xl", "3xl", "3xl", "3xl", "3xl"]}>
            Login To Your Account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            New To Website? Please
            <NavLink to="/signup" color={"blue.400"}>
              {" "}
              Signup
            </NavLink>{" "}
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter Email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter Password..."
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default Login;
