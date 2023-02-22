import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { defaultResponsive } from '../../utils/responsive-styles';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <Box id={'about'} paddingTop={'90px'} {...defaultResponsive} marginInline={'auto'} display={'flex'} flexDir={'column'} alignItems={'center'}>
      <Heading textAlign={'center'} size={'3xl'} fontWeight={'medium'}>
        About{' '}
        <Heading as="span" size={'3xl'} color="#f89820">
          Boolers
        </Heading>
      </Heading>
      <Box marginTop={'15px'} display={'flex'} flexDir={{ base: 'column', md: 'row' }} gap={'35px'} alignItems={'center'}>
        <Box width={{ base: '100%', md: '50%' }}>
          <Image
            alt={'Two businessmen shaking hands, with various graphics and illustrations in the background.'}
            src={'/assets/sales-team.svg'}
            width={900}
            height={900}
          />
        </Box>
        <Box width={{ base: '100%', md: '50%' }}>
          <Text mt={'25px'} fontWeight={'medium'} fontSize={'lg'}>
            At Boolers we are a digital marketing agency with a <b>dynamic and creative personality</b> that is always{' '}
            <b>innovating to provide customized and effective solutions</b> to our clients. We are <b>passionate</b> about the world of online marketing and
            work with <b>dedication</b> to help companies achieve their goals.
          </Text>
          <Text mt={'25px'} fontWeight={'medium'} fontSize={'lg'}>
            We believe in <b>transparency, honesty and establishing trusting relationships</b> with our clients, so that together we achieve success in every
            project we undertake. If you are looking for a <b>committed, professional and creative digital marketing agency</b>, we are the perfect choice for
            you!
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;

