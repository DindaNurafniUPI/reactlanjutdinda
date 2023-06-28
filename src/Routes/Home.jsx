import { useNavigate } from "react-router-dom";
import { Button, Center, Heading, VStack } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/student");
  };
  return (
    <>
      <Center
        w="100%"
        h="100vh"
        style={{
          background:
            "radial-gradient(circle, #FF6B8A, #FFFF99)",
        }}
      >
        <VStack spacing={6}>
          <Heading as="h5" size="4xl" color="white">
            STUDENT PORTAL
          </Heading>
          <Button
            onClick={handleClick}
            data-testid="student-btn"
            colorScheme="pink"
            size="lg"
            color="white"
            bg="#FF728A"
            border="1px solid pink"
          >
            All Student
          </Button>
        </VStack>
      </Center>
      <Footer />
    </>
  );
};

export default Home;
