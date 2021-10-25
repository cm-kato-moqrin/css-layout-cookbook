import React from 'react';
import { Box } from '@chakra-ui/layout';
import {
  Grid,
  GridItem,
  Image,
  StackDivider,
  VStack,
} from '@chakra-ui/react';

import balloonSq2 from '../assets/balloon-sq2.jpg';
import sharpAccountBox from '../assets/sharp-account_box-24px.svg';

function MediaObjects() {
  return (
    <VStack spacing={8} divider={<StackDivider borderColor='gray.200' />}>
      <Grid
        templateColumns='repeat(5, 1fr)'
        templateRows='repeat(6, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={6} colSpan={1}>
          <Box>
            <Image w='100%' borderRadius='lg' src={balloonSq2} alt='Balloons' />
          </Box>
        </GridItem>
        <GridItem rowSpan={5} colSpan={4}>
          <Box textStyle='p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac
            porttitor elit lobortis ac. Vivamus ultrices sodales tellus et
            aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent
            quis risus id dolor venenatis condimentum.
          </Box>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          <Box textStyle='p'>An optional footer goes here.</Box>
        </GridItem>
      </Grid>

      <Grid
        templateColumns='repeat(5, 1fr)'
        templateRows='repeat(6, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={6} colSpan={1}>
          <Box>
            <Image
              w='80px'
              borderRadius='lg'
              src={sharpAccountBox}
              alt='sharpAccountBox'
            />
          </Box>
        </GridItem>
        <GridItem rowSpan={5} colSpan={4}>
          <Box textStyle='p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac
            porttitor elit lobortis ac. Vivamus ultrices sodales tellus et
            aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent
            quis risus id dolor venenatis condimentum.
          </Box>
        </GridItem>
      </Grid>
      {/* Flip */}
      <Grid
        templateColumns='repeat(5, 1fr)'
        templateRows='repeat(6, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={5} colSpan={4}>
          <Box textStyle='p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac
            porttitor elit lobortis ac. Vivamus ultrices sodales tellus et
            aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent
            quis risus id dolor venenatis condimentum.
          </Box>
        </GridItem>
        <GridItem rowSpan={6} colSpan={1}>
          <Box>
            <Image w='100%' borderRadius='lg' src={balloonSq2} alt='Balloons' />
          </Box>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          <Box textStyle='p'>An optional footer goes here.</Box>
        </GridItem>
      </Grid>
      {/* Nested */}
      <Grid
        templateColumns='repeat(5, 1fr)'
        templateRows='repeat(6, 1fr)'
        gap={4}
      >
        <GridItem rowSpan={6} colSpan={1}>
          <Box>
            <Image w='100%' borderRadius='lg' src={balloonSq2} alt='Balloons' />
          </Box>
          <Grid
            templateColumns='repeat(5, 1fr)'
            templateRows='repeat(6, 1fr)'
            mt={4}
            gap={4}
          >
            <GridItem rowSpan={6} colSpan={1}>
              <Box>
                <Image
                  w='100%'
                  borderRadius='lg'
                  src={balloonSq2}
                  alt='Balloons'
                />
              </Box>
            </GridItem>
            <GridItem rowSpan={5} colSpan={4}>
              <Box textStyle='p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                vehicula vitae ligula sit amet maximus.
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem rowSpan={5} colSpan={4}>
          <Box textStyle='p'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac
            porttitor elit lobortis ac. Vivamus ultrices sodales tellus et
            aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent
            quis risus id dolor venenatis condimentum.
          </Box>
        </GridItem>
      </Grid>
    </VStack>
  );
}

export default MediaObjects;
