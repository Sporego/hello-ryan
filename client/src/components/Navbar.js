import React, { useContext } from 'react';
import { Box, Button, Flex, Heading, LinkBox, Link } from '@chakra-ui/react';
import { ThemeContext } from '../contexts/ThemeContext';

import { FaMoon, FaSun, FaGithub } from 'react-icons/fa';

function Navbar() {
  const { lightMode, setLightMode } = useContext(ThemeContext);

  return (
    <>
    <Box
      w="100%"
      py="4"
      color={lightMode === 'light' ? 'black' : 'white'}
      bg={lightMode === 'light' ? 'white' : 'gray.800'}
    >
      <Flex direction="row" align="center" justify="space-evenly">
        <Heading as="h1" size="2xl">
          Hello Ryan
        </Heading>
        <Button
          rightIcon={lightMode === 'light' ? <FaSun /> : <FaSun />}
          variant="outline"
          onClick={() => {
            setLightMode(lightMode === 'light' ? 'dark' : 'light');
          }}
          _hover={
            lightMode === 'light'
              ? { background: 'gray.200' }
              : { background: 'gray.600' }
          }
        >
          {lightMode === 'light' ? 'Light' : 'Dark'}
        </Button>
      </Flex>
    </Box>
    <Box
      w="100%"
      pb="2"
      color={lightMode === 'light' ? 'black' : 'white'}
      bg={lightMode === 'light' ? 'white' : 'gray.800'}
    >
      <Flex direction="row" align="center" justify="space-around">
        <Button
        as={Link}
        href="https://github.com/Sporego/hello-ryan"
          rightIcon={<FaGithub/>}
          variant="outline"
          _hover={
            lightMode === 'light'
              ? { background: 'gray.200' }
              : { background: 'gray.600' }
          }
        >
          Github Repo
        </Button>
      </Flex>
    </Box>
    </>
  );
}

export default Navbar;
