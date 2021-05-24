import React, { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import DatabaseInterface from './components/DatabaseInterface';

import { ThemeContext } from './contexts/ThemeContext';
import { ApplicantsContext} from './contexts/ApplicantsContext'

function App() {
  const [lightMode, setLightMode] = useState('light');
  const [applicantsArray, setApplicantsArray] = useState([])

  return (
    <ChakraProvider>
      <ThemeContext.Provider value={{ lightMode, setLightMode }}>
        <Navbar />
        <ApplicantsContext.Provider value={{applicantsArray, setApplicantsArray}}>
        <DatabaseInterface />
        </ApplicantsContext.Provider>
      </ThemeContext.Provider>
    </ChakraProvider>
  );
}

export default App;
