import { Box, Flex, Stack } from '@chakra-ui/layout';
import { HStack, Link } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

const links = ['About', 'Products', 'Our Team'];

function NavLinks(tabs: string[]) {
  let navLinks;
  navLinks = tabs.map((tab) => (
    <Link
      _hover={{
        color: 'purple.500',
      }}
      href={'#'}
      key={tab}
    >
      {tab}
    </Link>
  ));
  return navLinks;
}

function Header() {
  return (
    <Stack>
      <Box bg='#2D3748' p={4} color='white'>
        This is the header
      </Box>
      <nav>
        <Box px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <HStack spacing={4}>{NavLinks(links)}</HStack>
            <Flex alignItems={'center'}>
              <HStack spacing={8} alignItems={'center'}>
                <Link
                  _hover={{
                    color: 'purple.500',
                  }}
                  href={'#'}
                >
                  Contact
                </Link>
                <ColorModeSwitcher />
              </HStack>
            </Flex>
          </Flex>
        </Box>
      </nav>
    </Stack>
  );
}

export default Header;
