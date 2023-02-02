import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const ServicesSection = () => {
  return (
    <Box paddingBlock={'50px'} width={'65%'} marginInline={'auto'} display={'flex'} justifyContent={'center'}>
      <Text fontSize={'4xl'} fontWeight={'bold'} color={'white'}>
        Our Services
      </Text>
    </Box>
  );
};

export default ServicesSection;
