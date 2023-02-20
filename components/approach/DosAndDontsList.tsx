import { Box, Heading, SimpleGrid, UnorderedList, ListItem, ListIcon } from '@chakra-ui/react';
import React from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';

const DosAndDontsList = () => {
  return (
    <Box marginTop={'200px'} display={'flex'}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 20, md: 10 }}>
        <Box gridArea={{ md: '1 / 1' }} display={'flex'} flexDir={'column'} gap={{ base: '25px', md: '60px' }}>
          <Heading textAlign={'center'} marginInline={'auto'} size={'xl'}>
            How We Operate
          </Heading>
          <UnorderedList fontSize={'lg'} listStyleType={'none'} display={'flex'} flexDir={'column'} gap={'15px'}>
            <ListItem display={'flex'} gap={'10px'}>
              <ListIcon as={AiFillCheckCircle} width={'30px'} height={'100%'} color="green.300" />
              We analyze your brand journey.
            </ListItem>
            <ListItem display={'flex'} gap={'10px'}>
              <ListIcon as={AiFillCheckCircle} width={'30px'} height={'100%'} color="green.300" /> We develop a customized strategy that is in tune with your
              brand vision.
            </ListItem>
            <ListItem display={'flex'} gap={'10px'}>
              <ListIcon as={AiFillCheckCircle} width={'30px'} height={'100%'} color="green.300" /> We generate and manage campaigns that effectively drive the
              sale of your product.
            </ListItem>
            <ListItem display={'flex'} gap={'10px'}>
              <ListIcon as={AiFillCheckCircle} width={'30px'} height={'100%'} color="green.300" />
              We collect and use information to continuously improve and expand your campaigns.
            </ListItem>
            <ListItem display={'flex'} gap={'10px'}>
              <ListIcon as={AiFillCheckCircle} width={'30px'} height={'100%'} color="green.300" />
              We always seek to achieve more than a four-fold return for our clients.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box gridArea={{ md: '1 / 2' }} display={'flex'} flexDir={'column'} gap={{ base: '25px', md: '60px' }}>
          <Heading textAlign={'center'} marginInline={'auto'} size={'xl'}>
            How We Don't Operate
          </Heading>
          <UnorderedList fontSize={'lg'} listStyleType={'none'} display={'flex'} flexDir={'column'} gap={'15px'}>
            <ListItem display={'flex'} gap={'10px'}>
              <ListIcon as={AiFillCloseCircle} width={'30px'} height={'100%'} color="red.300" /> We do not charge for the registration process on our platform.
            </ListItem>
            <ListItem display={'flex'} gap={'10px'}>
              <ListIcon as={AiFillCloseCircle} width={'30px'} height={'100%'} color="red.300" />
              We do not provide free trials.
            </ListItem>
          </UnorderedList>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default DosAndDontsList;

