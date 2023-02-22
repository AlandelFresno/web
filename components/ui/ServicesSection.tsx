import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { defaultResponsive } from '../../utils/responsive-styles';
import Service from '../services/Service';

const ServicesSection = () => {
  return (
    <Box id={'services'} paddingBlock={'50px'} {...defaultResponsive} marginInline={'auto'} display={'flex'} flexDir={'column'} alignItems={'center'}>
      <Heading size={'3xl'} fontWeight={'medium'}>
        Our{' '}
        <Text as={'span'} color={'#1A7791'}>
          Services
        </Text>
      </Heading>
      <Text mt={'25px'} width={{ base: '95%', md: '65%' }} textAlign={'center'} fontWeight={'medium'} fontSize={'lg'}>
        We specialize in utilizing the data and targeting capabilities of social media platforms to reach your desired audience.
      </Text>
      <Box marginTop={'40px'} display={'flex'} flexDir={'column'} gap={'70px'}>
        <Service
          imageAlt="A cell phone with a woman with a megaphone protruding from it, with many emojies around it representing interactions"
          heading="Social Media Advertising"
          imagePath="/assets/viral.svg"
          scale={1.2}
          topOffset={-2}>
          Our social media advertising services can help increase brand awareness, drive sales, and target the right audience with compelling ad content. We
          offer customized strategies, effective campaign execution, and ongoing optimization to help you achieve a high return on investment (ROI).
        </Service>
        <Service
          imageAlt="A table with 3 people around it, cell phones, computers and emojis representing interactions."
          heading="Community Management"
          imagePath="/assets/online-community.svg"
          scale={1.2}
          topOffset={0}
          orderReverse>
          Our community management services help you build a loyal and engaged following, create a sense of community around your brand, increase brand
          recognition, and drive traffic to your website with the help of Social Media. We offer custom strategies to fit your brand's unique voice, values, and
          goals, and our experienced team is dedicated to helping you achieve your business objectives.
        </Service>
        <Service
          imageAlt="A man with a notebook programming in JS, with code in background"
          heading="Web Developing"
          imagePath="/assets/web-developing.svg"
          scale={1.3}
          topOffset={0}>
          Our team of web development experts create customized and personalized websites that fit your business goals. Whether you're looking for a basic page
          or a more advanced user experience, we can help you achieve it. We offer design, development, and maintenance. We ensure your website runs smoothly
          and complies with the latest web trends and technologies.
        </Service>
      </Box>
    </Box>
  );
};

export default ServicesSection;

