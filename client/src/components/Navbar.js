import React, { useContext } from 'react';
import { Box, Button, Center, Flex, Heading, Link } from '@chakra-ui/react';
import { ThemeContext } from '../contexts/ThemeContext';

import { FaMoon, FaSun, FaGithub, FaGithubAlt } from 'react-icons/fa';

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
        <Center>
          <Flex
            direction="row"
            align="center"
            justify="space-between"
            w={{ base: '95%', md: '80%' }}
          >
            <Heading as="h1" size="2xl">
              Hello Ryan
            </Heading>
            <Button
              rightIcon={lightMode === 'light' ? <FaSun /> : <FaMoon />}
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
        </Center>
      </Box>
      <Box
        w="100%"
        pb="2"
        color={lightMode === 'light' ? 'black' : 'white'}
        bg={lightMode === 'light' ? 'white' : 'gray.800'}
      >
        <Center>
          <Flex
            direction="row"
            align="center"
            justify="space-between"
            w={{ base: '95%', md: '80%' }}
          >
            <div>
              <Button
                border="0"
                as={Link}
                href="https://github.com/Sporego/hello-ryan"
                rightIcon={<FaGithub />}
                variant="outline"
                _hover={
                  lightMode === 'light'
                    ? { background: 'gray.200' }
                    : { background: 'gray.600' }
                }
              >
                Github Repo
              </Button>
              <Button
                border="0"
                as={Link}
                href="https://github.com/Sporego/"
                rightIcon={<FaGithubAlt />}
                variant="outline"
                _hover={
                  lightMode === 'light'
                    ? { background: 'gray.200' }
                    : { background: 'gray.600' }
                }
              >
                Github Profile
              </Button>
            </div>
          </Flex>
        </Center>
      </Box>
    </>
  );
}

export default Navbar;
