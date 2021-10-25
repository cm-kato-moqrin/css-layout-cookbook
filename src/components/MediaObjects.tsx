import React from 'react';
import { Box } from '@chakra-ui/layout';
import { Grid, Image, StackDivider, VStack } from '@chakra-ui/react';

import balloonSq2 from '../assets/balloon-sq2.jpg';
import sharpAccountBox from '../assets/sharp-account_box-24px.svg';

function MediaObjects() {
  return (
    <VStack spacing={6} divider={<StackDivider borderColor='gray.200' />}>
      <Grid
        templateColumns='fit-content(200px) 1fr'
        templateRows='1fr auto'
        templateAreas={`'image content' 'image footer'`}
        gap={3}
      >
        <Box gridArea='image'>
          <Image w='100%' borderRadius='lg' src={balloonSq2} alt='Balloons' />
        </Box>
        <Box textStyle='p' gridArea='content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
          vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor
          elit lobortis ac. Vivamus ultrices sodales tellus et aliquam.
          Pellentesque porta sit amet nulla vitae luctus. Praesent quis risus id
          dolor venenatis condimentum.
        </Box>
        <Box textStyle='p' gridArea='footer'>
          An optional footer goes here.
        </Box>
      </Grid>

      <Grid
        templateColumns='fit-content(200px) 1fr'
        templateRows='1fr auto'
        templateAreas={`'image content' 'image footer'`}
        gap={3}
      >
        <Box gridArea='image'>
          <Image
            w='80px'
            borderRadius='lg'
            src={sharpAccountBox}
            alt='Account'
          />
        </Box>
        <Box textStyle='p' gridArea='content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
          vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor
          elit lobortis ac. Vivamus ultrices sodales tellus et aliquam.
          Pellentesque porta sit amet nulla vitae luctus. Praesent quis risus id
          dolor venenatis condimentum.
        </Box>
        <Box gridArea='footer'></Box>
      </Grid>

      {/* Flip */}
      <Grid
        templateColumns='1fr fit-content(250px)'
        templateRows='1fr auto'
        templateAreas={`'content image' 'footer image'`}
        gap={3}
      >
        <Box gridArea='image'>
          <Image w='100%' borderRadius='lg' src={balloonSq2} alt='Balloons' />
        </Box>
        <Box textStyle='p' gridArea='content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
          vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor
          elit lobortis ac. Vivamus ultrices sodales tellus et aliquam.
          Pellentesque porta sit amet nulla vitae luctus. Praesent quis risus id
          dolor venenatis condimentum.
        </Box>
        <Box textStyle='p' gridArea='footer'>
          An optional footer goes here.
        </Box>
      </Grid>

      {/* Nested */}
      <Grid
        templateColumns='fit-content(200px) 1fr'
        templateRows='1fr auto'
        templateAreas={`'image content' 'image footer'`}
        gap={3}
      >
        <Box gridArea='image'>
          <Image w='100%' borderRadius='lg' src={balloonSq2} alt='Balloons' />
        </Box>

        <Box gridArea='content' textStyle='p'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
          vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor
          elit lobortis ac. Vivamus ultrices sodales tellus et aliquam.
          Pellentesque porta sit amet nulla vitae luctus. Praesent quis risus id
          dolor venenatis condimentum.
        </Box>
        <Box gridArea='footer'></Box>
        <Grid
          templateColumns='fit-content(200px) 1fr'
          templateRows='1fr auto'
          templateAreas={`'image content' 'image footer'`}
          gap={3}
        >
          <Box gridArea='image'>
            <Image w='100%' borderRadius='lg' src={balloonSq2} alt='Balloons' />
          </Box>

          <Box gridArea='content' textStyle='p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula vitae ligula sit amet maximus.
          </Box>
          <Box gridArea='footer'></Box>
        </Grid>
      </Grid>
    </VStack>
  );
}

export default MediaObjects;
