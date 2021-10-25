import * as React from 'react';
import { ChakraProvider, StackDivider, VStack } from '@chakra-ui/react';
import CenterContainer from './components/CenterContainer';
import ListWithBadge from './components/ListWithBadge';
import GridWrapper from './components/GridWrapper';
import customTheme from './extendTheme';

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <VStack
      divider={<StackDivider borderColor='gray.300' />}
      border='2px'
      h='100px'
      borderColor='black'
      rounded='lg'
      spacing={5}
    >
      <CenterContainer />
      <ListWithBadge />
      <GridWrapper />
    </VStack>
  </ChakraProvider>
);
