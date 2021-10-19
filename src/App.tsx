import * as React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import customTheme from './extendTheme';

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Box fontSize='xl' mb='auto'>
      <Box display='flex' flexDirection='column' minH='100vh'>
        <Header />
        <Box p={4} mb='auto'>
          Main page content here, add more if you want to see the footer push
          down.
        </Box>
        <Footer />
      </Box>
    </Box>
  </ChakraProvider>
);
