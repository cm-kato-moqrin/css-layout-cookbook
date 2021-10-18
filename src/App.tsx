import * as React from 'react';
import { ChakraProvider, Box, VStack, Flex, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import customTheme from './extendTheme';

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Box fontSize='xl'>
      <Header />
      <Flex w='100%'>
        <Spacer />
        <ColorModeSwitcher />
      </Flex>
      <VStack spacing={8}></VStack>
    </Box>
  </ChakraProvider>
);
