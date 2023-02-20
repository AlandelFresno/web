import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { InlineWidget } from 'react-calendly';
import { defaultResponsive } from '../../utils/responsive-styles';

const CalendlyCall = () => {
  return (
    <Box>
      <Heading marginBottom={{ md: '70px' }} size={'2xl'} marginInline={'auto'} textAlign={'center'}>
        Let's Talk
      </Heading>
      <Box
        {...defaultResponsive}
        marginInline={'auto'}
        display={{ base: 'flex', md: 'grid' }}
        flexDir={'column'}
        gridGap={'50px'}
        gridTemplateColumns={'1fr 1fr'}>
        <Box display={'flex'} flexDir={'column'} gap={'20px'}>
          <Box bg={'white'} height={'780px'} overflow={'hidden'} borderRadius={'20px'} width={{ md: 'inherit' }}>
            <InlineWidget styles={{ height: '780px', marginInline: 'auto' }} url="https://calendly.com/boolersagency/30min" />
          </Box>
        </Box>
        <Box order={{ base: -1, md: 1 }} display={'flex'} flexDir={'column'} gap={'15px'}>
          <Box
            marginInline={{ base: 'auto', md: '0' }}
            marginBlock={'40px'}
            borderRadius={'100%'}
            overflow={'hidden'}
            width={'250px'}
            height={'250px'}
            border={'10px solid white'}>
            <Image src={'/assets/martin-profile-photo.jpg'} alt={'a photo of Martin Farres, our sales representative'} width={250} height={100} />
          </Box>
          <Heading marginBlock={'12px'} size={'lg'}>
            Book a{' '}
            <Text as={'span'} color={'#f89820'}>
              free{' '}
            </Text>
            strategy call with our co-founder{' '}
            <Text as={'span'} color={'#1a7791'}>
              Martin{' '}
            </Text>
          </Heading>
          <Text fontSize={'xl'}>
            Schedule a complimentary and obligation-free strategy session with Boolers - Discuss customized social media marketing plans to drive your business
            growth and online sales success.
          </Text>
          <Text fontSize={'xl'}>Find a convenient time slot and secure it. We look forward to speaking with you.</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CalendlyCall;

