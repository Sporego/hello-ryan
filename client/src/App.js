import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import DatabaseInterface from './components/DatabaseInterface';

import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const [lightMode, setLightMode] = useState('light');
  return (
    <ChakraProvider>
      <ThemeContext.Provider value={{ lightMode, setLightMode }}>
        <Navbar />
        <DatabaseInterface/>
      </ThemeContext.Provider>
    </ChakraProvider>
  );
}

export default App;
