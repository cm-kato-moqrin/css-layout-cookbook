import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  colors: {
    brand: {
      100: '#f7fafc',
      // ...
      900: '#1a202c',
    },
  },
  fonts: {
    body: 'Helvetica Neue, Helvetica, Arial, sans-serif;',
  },
  textStyles: {
    p: {
      fontSize: '1.2em',
    },
  },
});

export default customTheme;
