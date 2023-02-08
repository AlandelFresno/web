import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';
import { defaultResponsive } from '../../utils/responsive-styles';

const HomeSection: FC = () => {
  return (
    <SimpleGrid minHeight={'65vh'} {...defaultResponsive} marginInline={'auto'} columns={2}>
      <Box gap={'30px'} display={'flex'} flexDir={'column'} justifyContent={'center'}>
        <Box>
          <Heading color={'gray.900'} size={'3xl'} fontWeight={'bold'}>
            Grow your brand
          </Heading>
          <Heading color={'#1A7791'} size={'3xl'} fontWeight={'medium'}>
            Transform your
          </Heading>
          <Heading color={'#F89820'} size={'3xl'} fontWeight={'medium'}>
            online presence
          </Heading>
        </Box>
        <Text color={'gray.600'} fontSize={'lg'} width={'80%'}>
          Leave the hard work to us and see your social media reach grow exponentially with our tailored strategies
        </Text>
      </Box>
      <Box marginBlock={'auto'}>
        <Image id={'wave-vector-top'} alt={'wave design'} src={'/assets/graphstock.jpg'} width={900} height={900} />
      </Box>
    </SimpleGrid>
  );
};

export default HomeSection;

