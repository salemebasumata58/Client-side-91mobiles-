import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { signupRequest } from "../Redux/auth/actions";
import { useNavigate } from "react-router-dom";
import AlertDialogs from "../Components/AlertDialog";
const Signup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const dispatch = useDispatch();
  const navi = useNavigate();
  const { isSigned } = useSelector((store) => store.auth);
  console.log(isSigned);
  const [check, setCheck] = useState(false);
  const [formData, setformData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const { username, password, email, phone, pass } = formData;

  const handleForm = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let p = "";
    p += phone;
    if (p.length < 10 && p.length <= 12) {
      return alert("Enter valid phone number of 10 characters..!");
    }
    if (password.length < 8) {
      return alert("Password should be consist of 8 characters..!");
    }
    if (password === pass) {
      let res = await dispatch(
        signupRequest({ username, email, password, phone })
      )
        .then((e) => e)
        .then((es) => {
          return es;
        });
      console.log(res);
      if (res.user) {
        return onOpen();
      }
    } else {
      return alert("check your password");
    }
  };
  console.log(check);
  return (
    <div className="signup-box">
      <AlertDialogs
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        cancelRef={cancelRef}
      />
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} minW={"lg"} py={2} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            w={"100%"}
            margin="auto"
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="firstName" isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  name="username"
                  value={username || ""}
                  onChange={handleForm}
                />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email || ""}
                  onChange={handleForm}
                />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Phone No</FormLabel>
                <Input
                  type="number"
                  name="phone"
                  value={phone || ""}
                  onChange={handleForm}
                  minLength={10}
                  maxlength={12}
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password || ""}
                    onChange={handleForm}
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
              <FormControl id="pass" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword1 ? "text" : "password"}
                    name="pass"
                    value={pass || ""}
                    onChange={handleForm}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword1((showPassword1) => !showPassword1)
                      }
                    >
                      {showPassword1 ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"teal.400"}
                  color={"white"}
                  _hover={{
                    bg: "teal",
                  }}
                  onClick={handleSubmit}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? click here to{" "}
                  <Link color={"blue.400"} to={"/login"}>
                    <Text color={"blue.400"}>Login</Text>
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
};

export default Signup;
