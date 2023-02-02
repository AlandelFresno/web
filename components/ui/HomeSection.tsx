import { Box, Text } from '@chakra-ui/react';
import React, { FC } from 'react';

const HomeSection: FC = () => {
  return (
    <Box minHeight={'65vh'} display={'flex'} flexDir={'column'} justifyContent={'center'} maxWidth={'45%'} marginInline={'auto'} textAlign={'center'}>
      <Text color={'gray.600'} fontSize={'6xl'} fontWeight={'bold'}>
        Grow your brand
      </Text>
      <Text color={'gray.600'} fontSize={'5xl'} fontWeight={'medium'}>
        Transform your online presence
      </Text>
      <Text fontSize={'3xl'}>Leave the hard work to us and see your social media reach grow exponentially with our tailored strategies</Text>
    </Box>
  );
};

export default HomeSection;
