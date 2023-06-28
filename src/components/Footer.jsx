import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box className="footer" textAlign="center" bg="#FF6B8A" py={4} color="white">
      <p className="studentName" mr={2}>
        Dinda Nurafni
      </p>
      <p className="studentId">FE4573074</p>
    </Box>
  );
};

export default Footer;
