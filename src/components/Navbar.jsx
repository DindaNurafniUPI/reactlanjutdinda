import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Box bg="#FF6B8A" py={4}>
      <Flex
        justify="space-between"
        align="center"
        maxW="container.lg"
        mx="auto"
        px={4}
      >
        <Link to="/" data-testid="home-page">
          <Heading as="h2" size="md" color="white">
            Student Portal
          </Heading>
        </Link>
        <Flex>
          <Button variant="ghost" size="md" color="white" mx={2}>
            <Link to="/student" data-testid="student-page" color="white">
              All Student
            </Link>
          </Button>
          <Button variant="ghost" size="md" color="white" mx={2}>
            <Link to="/add" data-testid="add-page" color="white">
              Add Student
            </Link>
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default NavBar;
