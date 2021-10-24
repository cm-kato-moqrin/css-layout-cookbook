import * as React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { CardGrid, Footer, Header, Pagination } from './components';
import customTheme from './extendTheme';

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Box fontSize='xl' mb='auto'>
      <Box display='flex' flexDirection='column' minH='100vh'>
        <Header />
        <Box p={4} mb='auto'>
          <CardGrid />
          <Pagination />
        </Box>
        <Footer />
      </Box>
    </Box>
  </ChakraProvider>
);
