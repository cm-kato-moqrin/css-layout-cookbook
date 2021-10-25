import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

function GridWrapper() {
  return (
    <Grid
      templateColumns='minmax(20px, 1fr) repeat(6, minmax(0, 130px)) minmax(20px,1fr)'
      templateRows='minmax(100px, auto)'
      gap='10px'
    >
      <GridItem
        border='2px'
        borderColor='black'
        rounded='lg'
        p='20px'
        textStyle='p'
        gridColumn='2/-2'
      >
        This item aligns to a central “wrapper” – columns that have a maximum
        width.
      </GridItem>
      <GridItem
        border='2px'
        borderColor='black'
        rounded='lg'
        p='20px'
        textStyle='p'
        gridColumn='1/-1'
      >
        This item aligns to the edge of the grid container.
      </GridItem>
      <GridItem
        border='2px'
        borderColor='black'
        rounded='lg'
        p='20px'
        textStyle='p'
        gridColumn='1 / -2'
      >
        This item aligns to the left edge of the grid container and the right
        edge of the wrapper.
      </GridItem>
      <GridItem
        border='2px'
        borderColor='black'
        rounded='lg'
        p='20px'
        textStyle='p'
        gridColumn='4 / -2'
      >
        This item aligns to the right edge of the “wrapper” columns.
      </GridItem>
    </Grid>
  );
}

export default GridWrapper;
