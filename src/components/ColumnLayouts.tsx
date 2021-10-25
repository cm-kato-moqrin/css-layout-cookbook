import React from 'react';
import {
  Container,
  Flex,
  Box,
  VStack,
  StackDivider,
  SimpleGrid,
} from '@chakra-ui/react';

function BoxSentences(sentences: string[], isFlex: boolean) {
  let boxItems;
  isFlex
    ? (boxItems = sentences.map((sentence) => (
        <Box
          flex='1'
          border='1px'
          borderRadius='lg'
          p={2}
          mr='2'
          key={sentence}
        >
          {sentence}
        </Box>
      )))
    : (boxItems = sentences.map((sentence) => (
        <Box border='1px' borderRadius='lg' p={2} mr='2' key={sentence}>
          {sentence}
        </Box>
      )));
  return boxItems;
}

function ColumnLayounts() {
  const sampleSentences1 = [
    'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi ' +
      'welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.',
    'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot ' +
      'courgette tatsoi pea sprouts fava bean collard greens dandelion okra ' +
      'wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.',
    'Turnip greens yarrow ricebean rutabaga endive cauliflower sea ' +
      'lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage ' +
      'asparagus winter purslane kale. Celery potato scallion desert raisin ' +
      'horseradish spinach carrot soko.',
  ];
  const sampleSentences2 = [
    'Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi ' +
      'welsh onion daikon amaranth tatsoi.',
    'Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot ' +
      'courgette tatsoi pea sprouts fava bean collard greens.',
    'Nori grape silver beet broccoli kombu beet greens fava bean potato ' +
      'quandong celery. Bunya nuts black-eyed pea prairie turnip leek ' +
      'lentil turnip greens parsnip. .',
  ];
  return (
    <VStack spacing={8} divider={<StackDivider borderColor='gray.200' />}>
      <Box border='1px' p={2} borderRadius='lg' textStyle='p'>
        <Flex m={2}>{BoxSentences(sampleSentences1, true)}</Flex>
      </Box>
      <Container
        maxW='container.sm'
        border='1px'
        p={2}
        borderRadius='lg'
        textStyle='p'
      >
        <Flex wrap='wrap' m={2}>
          <Flex>{BoxSentences(sampleSentences1.slice(0, 2), true)}</Flex>
          {BoxSentences(sampleSentences1.slice(2), false)}
        </Flex>
      </Container>
      <Container
        maxW='container.sm'
        border='1px'
        p={2}
        borderRadius='lg'
        textStyle='p'
      >
        <SimpleGrid columns={2} spacing={4} m={3}>
          {BoxSentences(sampleSentences2, false)}
        </SimpleGrid>
      </Container>
    </VStack>
  );
}

export default ColumnLayounts;
