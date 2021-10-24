import { HStack, Link, Square, VisuallyHidden } from '@chakra-ui/react';
import React from 'react';

const pages: number[] = [1, 2, 3, 4];

function PageLinks(pages: number[]) {
  let pageLinks;
  pageLinks = pages.map((page) => (
    <Square borderColor='#2D3748' borderWidth='1px' rounded='md' size='45px'>
      <Link
        _hover={{
          color: 'purple.500',
        }}
        href=''
      >
        <VisuallyHidden>page</VisuallyHidden>
        {page}
      </Link>
    </Square>
  ));
  return pageLinks;
}

function Pagination() {
  return (
    <HStack mt={3} justifyContent={'center'} as={'nav'} aria-label='pagination'>
      <Square borderColor='#2D3748' borderWidth='1px' rounded='md' size='45px'>
        <Link
          _hover={{
            color: 'purple.500',
          }}
          href=''
        >
          <span aria-hidden='true'>&laquo;</span>
          <VisuallyHidden>previous set of pages</VisuallyHidden>
        </Link>
      </Square>
      {PageLinks(pages)}
      <Square borderColor='#2D3748' borderWidth='1px' rounded='md' size='45px'>
        <Link
          _hover={{
            color: 'purple.500',
          }}
          href=''
        >
          <span aria-hidden='true'>&raquo;</span>
          <VisuallyHidden>next set of pages</VisuallyHidden>
        </Link>
      </Square>
    </HStack>
  );
}

export default Pagination;
