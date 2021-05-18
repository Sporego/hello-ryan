import {
  Box,
  Flex,
  Heading
} from '@chakra-ui/react';

function Navbar() {
  return (
    <Box w="100%">
    <Flex direction="row">
    <Heading as="h1" size="2xl">
    Hello Ryan
    </Heading>
    </Flex>
    </Box>
  );
}

export default Navbar;
