import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { defaultResponsive } from '../../utils/responsive-styles';

const ServicesSection = () => {
  return (
    <Box id={'services'} paddingBlock={'50px'} {...defaultResponsive} marginInline={'auto'} display={'flex'} flexDir={'column'} alignItems={'center'}>
      <Heading size={'3xl'} fontWeight={'medium'}>
        Social Media{' '}
        <Text as={'span'} color={'#1A7791'}>
          Advertising
        </Text>
      </Heading>
      <Text mt={'25px'} width={'65%'} textAlign={'center'} fontWeight={'medium'} fontSize={'lg'}>
        We specialize in utilizing the data and targeting capabilities of social media platforms to reach your desired audience.
      </Text>
      <Box marginTop={'120px'} display={'flex'} flexDir={'column'} gap={'90px'}>
        <SimpleGrid columns={2} spacing={10}>
          <Box bgColor={'blackAlpha.600'} borderRadius={'2xl'} gridArea={'1 / 2'} display={'flex'} padding={'14px'} flexDir={'column'} gap={'20px'}>
            <Heading size={'md'}>Cost-Effective</Heading>
            <Text fontSize={'1xl'} fontWeight={'medium'}>
              Cost-Effective Social media advertising is a cost-effective way to reach a large, targeted audience and drive results for your business.
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={10}>
          <Box bgColor={'blackAlpha.600'} borderRadius={'2xl'} gridArea={'1 / 2'} display={'flex'} padding={'14px'} flexDir={'column'} gap={'20px'}>
            <Heading size={'md'}>Customized Solutions</Heading>
            <Text fontSize={'1xl'} fontWeight={'medium'}>
              Our team will collaborate with you to define your target audience and business goals, then design a tailored social media advertising plan to
              achieve them. We'll ensure that the ads we create are engaging and reach your target audience effectively.
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={10}>
          <Box bgColor={'blackAlpha.600'} borderRadius={'2xl'} gridArea={'1 / 2'} display={'flex'} padding={'14px'} flexDir={'column'} gap={'20px'}>
            <Heading size={'md'}>Increased Brand Awareness</Heading>
            <Text fontSize={'1xl'} fontWeight={'medium'}>
              By reaching a wider audience and engaging with your target market, our social media advertising services will increase your brand's awareness and
              exposure.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ServicesSection;

