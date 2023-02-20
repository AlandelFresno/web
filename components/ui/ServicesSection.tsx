import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { defaultResponsive } from '../../utils/responsive-styles';
import Service from '../services/Service';
import { motion } from 'framer-motion';

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
        <motion.div initial={{ opacity: 0, x: -250 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <Service heading="Social Media Advertising" imagePath="/assets/viral.svg" scale={1.2} topOffset={-2}>
            One of the most effective ways to reach a wider audience and increase brand awareness. Boolers can help companies create social media advertising
            campaigns that are specific to their target audience.
          </Service>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 250 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
          <Service heading="Community Management" imagePath="/assets/online-community.svg" scale={1.2} topOffset={0} orderReverse>
            Professional who is responsible for managing and administering a company's online presence on social networks. The goal of this service is to create
            an active and engaged community with the brand, thus increasing the company's online reach and visibility.
          </Service>
        </motion.div>
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

