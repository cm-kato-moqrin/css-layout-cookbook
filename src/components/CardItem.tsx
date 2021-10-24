import { Box, Heading, SimpleGrid } from '@chakra-ui/layout';
import { Badge, Image } from '@chakra-ui/react';
import React from 'react';
import { Card } from '../app/types';

function CardItem({ cardProperty }: { cardProperty: Card }) {
  return (
    <SimpleGrid
      maxW='sm'
      borderColor='#2D3748'
      borderWidth='1px'
      borderRadius='md'
      overflow='hidden'
      templateRows='max-content 240px 1fr'
    >
      <Box>
        <Heading as='h2' p={3} size='lg' textAlign='center'>
          {cardProperty.header}
        </Heading>
      </Box>

      <Image
        src={`${process.env.PUBLIC_URL}/${cardProperty.imageUrl}.jpg`}
        alt={cardProperty.imageAlt}
        htmlWidth='100%'
        htmlHeight='100%'
      />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge
            borderRadius='sm'
            px='3'
            variant='solid'
            colorScheme={cardProperty.badgeColor}
          >
            {cardProperty.badgeStatus}
          </Badge>

          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            balloon: {cardProperty.balloonCount}
          </Box>
        </Box>

        <Box mt='4' as='h4' lineHeight='tight' p={2}>
          {cardProperty.content}
        </Box>
      </Box>
      <Box bg={cardProperty.isFooter ? '#2D3748' : '#fff'} color='#fff' p={3}>
        {cardProperty.footerContent}
      </Box>
    </SimpleGrid>
  );
}

export default CardItem;
