import * as React from 'react';
import { ChakraProvider, Box, Grid } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import customTheme from './extendTheme';

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Box fontSize='xl' mb='auto'>
      <Grid minH='100vh' templateRows='auto 1fr auto'>
        <Header />
        <Box p={4} textStyle='p'>
          Main page content here, add more if you want to see the footer push
          down.
        </Box>
        <Footer />
      </Grid>
    </Box>
  </ChakraProvider>
);
