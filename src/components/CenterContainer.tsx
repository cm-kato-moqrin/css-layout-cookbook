import { Center } from '@chakra-ui/react';
import React from 'react';

function CenterContainer() {
  return (
    <Center
      mt={4}
      border='2px'
      borderColor='black'
      w='10em'
      rounded='lg'
      p='20px'
    >
      I am centered!
    </Center>
  );
}

export default CenterContainer;
