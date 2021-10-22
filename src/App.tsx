import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import CenterContainer from './components/CenterContainer';
import customTheme from './extendTheme';

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <CenterContainer />
  </ChakraProvider>
);
