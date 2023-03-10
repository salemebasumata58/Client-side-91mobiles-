import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Container,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
   <Box boxShadow="rgba(0, 0, 0, 0.24)" margin="auto" >
      <Container minW={"99%"} bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box><Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSxzPQ1e47_nIo9IUJSfeaNYSN0mQ4aqzDRKhGEwE&s" w={"20px"}/></Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link to={"/"}>Register</Link>
              <Link to={"/login"}>Login</Link>
              <Link to={"/dashboard"}>Dashboard</Link>
              <Link to={"/lists"}>FilePage</Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Welcome</MenuItem>
                
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link to={"/"}>Register</Link>
              <Link to={"/login"}>Login</Link>
              <Link to={"/dashboard"}>Dashboard</Link>
            </Stack>
          </Box>
        ) : null}
      </Container>
      </Box>
  );
};

export default Navbar;
