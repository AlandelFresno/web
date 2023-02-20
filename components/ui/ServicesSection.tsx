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
        <Service heading="Social Media Advertising" imagePath="/assets/viral.svg" scale={1.2} topOffset={-2}>
          Our social media advertising services can help increase brand awareness, drive sales, and target the right audience with compelling ad content. We
          offer customized strategies, effective campaign execution, and ongoing optimization to help you achieve a high return on investment (ROI).
        </Service>
        <Service heading="Community Management" imagePath="/assets/online-community.svg" scale={1.2} topOffset={0} orderReverse>
          Our community management services help you build a loyal and engaged following, create a sense of community around your brand, increase brand
          recognition, and drive traffic to your website with the help of Social Media. We offer custom strategies to fit your brand's unique voice, values, and
          goals, and our experienced team is dedicated to helping you achieve your business objectives.
        </Service>
        {/* <Service
          heading="Content strategy"
          text="Essential for any business that wants to attract and retain its target audience. Boolers can help companies create a customized content strategy
          that includes content creation, blog management and content distribution across multiple platforms"
          imagePath="/assets/content-manager.svg.svg"
          orderReverse
        /> */}
      </Box>
    </Box>
  );
};

export default ServicesSection;

