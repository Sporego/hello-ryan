import React, {useState} from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

import Navbar from "./components/Navbar"

import { ThemeContext } from "./contexts/ThemeContext"

function App() {
  const [lightMode,setLightMode] = useState("light")
  return (
    <ChakraProvider theme={theme}>
    <ThemeContext.Provider value={{lightMode,setLightMode}}>
      <Navbar/>
    </ThemeContext.Provider>
    </ChakraProvider>
  );
}

export default App;
