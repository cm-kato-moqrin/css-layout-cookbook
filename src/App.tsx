import * as React from 'react';
import { ChakraProvider, Box, Grid } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import CardGrid from './components/CardGrid';
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
