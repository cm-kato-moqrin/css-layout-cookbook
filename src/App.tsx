import * as React from 'react';
import { ChakraProvider, Box, Grid } from '@chakra-ui/react';
import { CardGrid, Footer, Header } from './components';
import customTheme from './extendTheme';

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Box fontSize='xl' mb='auto'>
      <Grid minH='100vh' templateRows='auto 1fr auto'>
        <Header />
        <Box p={4} mb='auto'>
          <CardGrid />
        </Box>
        <Footer />
      </Grid>
    </Box>
  </ChakraProvider>
);
