import React, { useContext } from 'react';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { ThemeContext } from '../contexts/ThemeContext';

import {} from 'react-icons/fa';

function DatabaseInterface() {
  const { lightMode, setLightMode } = useContext(ThemeContext);

  return (
    <>
      <Box
        w="100%"
        py="4"
        color={lightMode === 'light' ? 'black' : 'gray.100'}
        bg={lightMode === 'light' ? 'white' : 'gray.700'}
      >
        <Center>
          <Flex
            direction="row"
            align="center"
            justify="space-around"
            w={{ base: '95%', md: '80%' }}
          >
            <Heading>Applicant Tracking Interface</Heading>
          </Flex>
        </Center>
      </Box>
    </>
  );
}

export default DatabaseInterface;
