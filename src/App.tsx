import * as React from 'react';
import { ChakraProvider, VStack, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import MediaObjects from './components/MediaObjects';
import customTheme from './extendTheme';

export const App = () => (
  <ChakraProvider theme={customTheme}>
    <Grid minH='100vh' p={3}>
      <ColorModeSwitcher justifySelf='flex-end' />
      <MediaObjects></MediaObjects>
      <VStack spacing={8}></VStack>
    </Grid>
  </ChakraProvider>
);
