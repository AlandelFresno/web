import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { InlineWidget } from 'react-calendly';

const Contact = () => {
  return (
    <Box width={'100%'} marginInline={'auto'} maxWidth={'65%'} display={'grid'} gridGap={'50px'} gridTemplateColumns={'1fr 1fr'}>
      <InlineWidget styles={{ width: 'inherit', height: '850px', marginInline: 'auto' }} url="https://calendly.com/fvmijael/50min" />
      <Box color={'white'} display={'flex'} flexDir={'column'} gap={'15px'}>
        <Text fontSize={'4xl'}>Book A Free Strategy Call</Text>
        <Text fontSize={'xl'}>
          This is a free, and non-binding strategy call with Stage Digital. In this call we will elaborate on social media marketing strategies we could tailor
          and implement for your particular business, in order to heavily boost the growth of your business and online sales.
        </Text>
        <Text fontSize={'xl'}>
          Simply locate a time-slot that would suit your calendar, and lock it in. We’re looking forward to talking to you. This Strategy Call Is Particularly
          For:
        </Text>
      </Box>
    </Box>
  );
};

export default Contact;
