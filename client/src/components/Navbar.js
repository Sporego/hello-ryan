import React, {useContext} from 'react'
import {
  Box,
  Flex,
  Heading
} from '@chakra-ui/react';
import {ThemeContext} from "../contexts/ThemeContext"

function Navbar() {
    const {lightMode,setLightMode} = useContext(ThemeContext)
    
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
