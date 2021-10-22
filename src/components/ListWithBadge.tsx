import { Box, Circle, Flex, List, ListItem, Spacer } from '@chakra-ui/react';
import React from 'react';

const items = ['Item One', 'Item Two', 'Item Three', 'Item Four'];

function ListItems(items: string[]) {
  let listItems;
  listItems = items.map((item, index) => (
    <ListItem
      borderTop={index === 0 ? '' : '1px'}
      borderColor='#ccc'
      key={item}
    >
      <Flex>
        <Box p={4}>{item}</Box>
        <Spacer />
        <Circle m={2} size='40px' bg='purple' color='white'>
          <Box fontWeight='bold' fontSize='lg'>
            {index + 1}
          </Box>
        </Circle>
      </Flex>
    </ListItem>
  ));
  return listItems;
}

function ListWithBadge() {
  return (
    <List border='2px' borderColor='#ccc' rounded='lg' w='20em'>
      {ListItems(items)}
    </List>
  );
}

export default ListWithBadge;
