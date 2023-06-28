import { Button, Center, Container, Heading, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <Center h="100vh">
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          404 | Not Found
        </Heading>
        <Button onClick={handleBackClick} data-testid="back">
          Back
        </Button>
      </VStack>
    </Center>
  );
};

export default NotFound;
