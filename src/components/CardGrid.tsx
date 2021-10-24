import { SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import CardItem from './CardItem';
import { Card } from '../app/types';
import { dummyData } from '../app/data';

const items: Card[] = dummyData;

function CardItems(cardProperties: Card[]) {
  let cardItems;
  cardItems = cardProperties.map((cardProperty: Card, index) => (
    <CardItem key={index} cardProperty={cardProperty} />
  ));
  return cardItems;
}

function CardGrid() {
  return (
    <SimpleGrid w='1200px' mt={3} columns={3} spacing={8}>
      {CardItems(items)}
    </SimpleGrid>
  );
}

export default CardGrid;
