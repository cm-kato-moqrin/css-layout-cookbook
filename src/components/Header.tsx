import { Button } from '@chakra-ui/button';
import { Box, Stack } from '@chakra-ui/layout';
import React from 'react';

function Header() {
  return (
    <Stack>
      <Box bg='#2D3748' p={4} color='white'>
        This is the header
      </Box>
      <nav>
        <Box
          d='flex'
          alignItems='center'
          justifyContent='space-between'
          ml={6}
          mr={6}
        >
          <Box>
            <Button pr={5} colorScheme='Gray.700' fontSize='lg' variant='link'>
              About
            </Button>
            <Button pr={5} colorScheme='Gray.700' fontSize='lg' variant='link'>
              Products
            </Button>
            <Button pr={5} colorScheme='Gray.700' fontSize='lg' variant='link'>
              Our Team
            </Button>
          </Box>
          <Box>
            <Button pr={5} colorScheme='Gray.700' fontSize='lg' variant='link'>
              Contact
            </Button>
          </Box>
        </Box>
      </nav>
    </Stack>
  );
}

export default Header;
