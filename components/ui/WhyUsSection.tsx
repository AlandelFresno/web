import { Box, Heading, ListIcon, ListItem, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';
import { defaultResponsive } from '../../utils/responsive-styles';
import { BsCheckSquareFill } from 'react-icons/bs';
import Image from 'next/image';

const WhyUsSection = () => {
  return (
    <Box paddingBlock={'50px'} {...defaultResponsive} marginInline={'auto'} display={'flex'} flexDir={'column'} alignItems={'center'}>
      <Heading size={'3xl'} fontWeight={'medium'}>
        Why{' '}
        <Heading as="span" size={'3xl'} color="#f89820">
          Boolers?
        </Heading>
      </Heading>
      <Text mt={'25px'} width={'65%'} textAlign={'center'} fontWeight={'medium'} fontSize={'lg'}>
        We generate customers through online solutions tailored for your business with a incredible ROI
      </Text>
      <Box marginTop={'120px'} display={'flex'} gap={'90px'}>
        <SimpleGrid columns={2} spacing={10}>
          <Image alt={'wave design'} src={'/assets/chart.svg'} width={400} height={100} />
          <Box gridArea={'1 / 2'} display={'flex'} flexDir={'column'} gap={'20px'}>
            <UnorderedList listStyleType={'none'} display={'flex'} flexDir={'column'} gap={'15px'}>
              <ListItem display={'flex'} gap={'10px'}>
                <ListIcon as={BsCheckSquareFill} height={'100%'} color="green.300" />
                Personalized and effective online visibility solutions.
              </ListItem>
              <ListItem display={'flex'} gap={'10px'}>
                <ListIcon as={BsCheckSquareFill} height={'100%'} color="green.300" /> Team of digital marketing experts.
              </ListItem>
              <ListItem display={'flex'} gap={'10px'}>
                <ListIcon as={BsCheckSquareFill} height={'100%'} color="green.300" /> Results-focused approach to maximize ROI.
              </ListItem>
              <ListItem display={'flex'} gap={'10px'}>
                <ListIcon as={BsCheckSquareFill} height={'100%'} color="green.300" />
                Customized marketing campaigns to connect with audience.
              </ListItem>
              <ListItem display={'flex'} gap={'10px'}>
                <ListIcon as={BsCheckSquareFill} height={'100%'} color="green.300" />
                Comprehensive online presence solutions.
              </ListItem>
              <ListItem display={'flex'} gap={'10px'}>
                <ListIcon as={BsCheckSquareFill} height={'100%'} color="green.300" />
                Collaborative work with ambitious clients.
              </ListItem>
            </UnorderedList>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default WhyUsSection;

