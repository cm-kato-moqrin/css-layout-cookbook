import { SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import CardItem from './CardItem';
import { Card } from '../app/types';

const items: Card[] = [
  {
    imageUrl: 'balloons',
    imageAlt: 'Hot air balloons',
    balloonCount: 'so many',
    header: 'A short heading',
    content:
      'The idea of reaching the North Pole by means of balloons appears to' +
      'have been entertained many years ago.',
    badgeColor: 'gray',
    badgeStatus: 'Default',
    isFooter: true,
    footerContent: 'I have a footer!',
  },
  {
    imageUrl: 'balloons2',
    imageAlt: 'Hot air balloons',
    balloonCount: 1,
    header: 'A short heading',
    content: 'Short content.',
    badgeColor: 'green',
    badgeStatus: 'New',
    isFooter: true,
    footerContent: 'I have a footer!',
  },
  {
    imageUrl: 'balloons',
    imageAlt: 'Hot air balloons',
    balloonCount: 'so many',
    header: 'A longer heading in this card',
    content:
      'In a curious work, published in Paris in 1863 by Delaville Dedreux,' +
      'there is a suggestion for reaching the North Pole by an aerostat.',
    badgeColor: 'green',
    badgeStatus: 'New',
    isFooter: true,
    footerContent: 'I have a footer!',
  },
  {
    imageUrl: 'balloons2',
    imageAlt: 'Hot air balloons',
    balloonCount: 1,
    header: 'A short heading',
    content:
      'The idea of reaching the North Pole by means of balloons appears to' +
      'have been entertained many years ago.',
    badgeColor: 'red',
    badgeStatus: 'Removed',
    isFooter: false,
  },
];

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
