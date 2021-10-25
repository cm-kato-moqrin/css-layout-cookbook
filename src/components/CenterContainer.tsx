import { VStack } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import React from 'react';

function CenterContainer() {
  return (
    <VStack border='2px' h='100px' borderColor='black' rounded='lg'>
      <Center
        mt={3}
        border='2px'
        borderColor='black'
        w='10em'
        rounded='lg'
        p='20px'
        textStyle='p'
      >
        I am centered!
      </Center>
    </VStack>
  );
}

export default CenterContainer;
