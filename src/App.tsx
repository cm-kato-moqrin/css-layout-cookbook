import * as React from 'react';
import { ChakraProvider, Box, Flex, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import Footer from './components/Footer';
import customTheme from './extendTheme';

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Box fontSize='xl' mb='auto'>
      <Box display='flex' flexDirection='column' minH='100vh'>
        <Header />
        <Flex w='100%'>
          <Spacer />
          <ColorModeSwitcher />
        </Flex>
        <Box p={4} mb='auto'>
          Main page content here, add more if you want to see the footer push
          down.
        </Box>
        <Footer />
      </Box>
    </Box>
  </ChakraProvider>
);
