import * as React from 'react';
import { ChakraProvider, Box, VStack } from '@chakra-ui/react';
import Header from './components/Header';
import customTheme from './extendTheme';

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Box fontSize='xl'>
      <Header />
      <VStack spacing={8}></VStack>
    </Box>
  </ChakraProvider>
);
