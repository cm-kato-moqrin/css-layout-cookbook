import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

function GridWrapper() {
  return (
    <Grid templateColumns='repeat(7, 1fr)' gap='10px'>
      <GridItem
        colStart={3}
        colEnd={6}
        colSpan={3}
        border='2px'
        borderColor='black'
        rounded='lg'
        p='20px'
      >
        This item aligns to a central “wrapper” – columns that have a maximum
        width.
      </GridItem>
      <GridItem
        colSpan={7}
        border='2px'
        borderColor='black'
        rounded='lg'
        p='20px'
      >
        This item aligns to the edge of the grid container.
      </GridItem>
      <GridItem
        colSpan={6}
        border='2px'
        borderColor='black'
        rounded='lg'
        p='20px'
      >
        This item aligns to the left edge of the grid container and the right
        edge of the wrapper.
      </GridItem>
      <GridItem
        colStart={5}
        colEnd={7}
        colSpan={2}
        border='2px'
        borderColor='black'
        rounded='lg'
        p='20px'
      >
        This item aligns to the right edge of the “wrapper” columns.
      </GridItem>
    </Grid>
  );
}

export default GridWrapper;
