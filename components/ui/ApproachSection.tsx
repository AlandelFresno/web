import { Box, Heading, SimpleGrid, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { defaultResponsive } from '../../utils/responsive-styles';
import { BiChevronRight } from 'react-icons/bi';

const ApproachSection = () => {
  return (
    <Box id={'approach'} paddingBlock={'50px'} {...defaultResponsive} marginInline={'auto'} display={'flex'} flexDir={'column'} alignItems={'center'}>
      <Heading size={'3xl'} fontWeight={'medium'}>
        The{' '}
        <Heading as="span" size={'3xl'} color="#f89820">
          Boolers{' '}
        </Heading>
        approach
      </Heading>
      <Text mt={'25px'} width={'65%'} textAlign={'center'} fontWeight={'medium'} fontSize={'lg'}>
        We generate customers through online solutions tailored for your business with a incredible ROI
      </Text>
      <Box marginTop={'120px'} display={'flex'} flexDir={'column'} gap={'90px'}>
        <SimpleGrid columns={2} spacing={10}>
          <Box display={'flex'} flexDir={'column'} gap={'20px'}>
            <Heading size={'md'}>Customized Business Solution</Heading>
            <Text fontSize={'1xl'} fontWeight={'medium'}>
              We believe in the power of a personalized approach. That's why our team of experts takes the time to get to know your business, creating custom
              strategies that are tailored to meet your unique goals
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={10}>
          <Box gridArea={'1 / 2'} display={'flex'} flexDir={'column'} gap={'20px'}>
            <Heading size={'md'}>Dedicated Support for Partner Success</Heading>
            <Text fontSize={'1xl'} fontWeight={'medium'}>
              You're not just a client, you are a valued partner. We'll be by your side every step of the way, providing regular updates and progress reports to
              ensure your campaigns are on track.
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={10}>
          <Box display={'flex'} flexDir={'column'} gap={'20px'}>
            <Heading size={'md'}>Marketing Made Easy</Heading>
            <Text fontSize={'1xl'} fontWeight={'medium'}>
              Let us handle the entire marketing process, from strategy to execution, so you can relax and see the results. For those seeking more guidance, we
              offer consulting services to help your team grasp the fundamentals of successful social media advertising.
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={10}>
          <Box gridArea={'1 / 2'} display={'flex'} flexDir={'column'} gap={'20px'}>
            <Heading size={'md'}>Your Brand, Our Priority</Heading>
            <Text fontSize={'1xl'} fontWeight={'medium'}>
              We treat your brand as our own and only recommend what we believe is best for your business. Prior to advertising your product, we always test it
              to ensure quality and to gain a customer's perspective.
            </Text>
          </Box>
        </SimpleGrid>
        <SimpleGrid columns={2} spacing={10}>
          <Box display={'flex'} flexDir={'column'} gap={'20px'}>
            <Heading size={'md'}>Exclusive Focus</Heading>
            <Text fontSize={'1xl'} fontWeight={'medium'}>
              We prioritize our clients and always direct our best resources towards achieving success for them, rather than pursuing new clients. Let's work
              together to bring customers to your business through social media marketing.
            </Text>
          </Box>
        </SimpleGrid>
        <Box display={'flex'} flexDir={'column'} gap={'5px'}>
          <Text fontSize={'xl'} fontWeight={'bold'} textAlign={'center'}>
            Book a free strategy call with us to discuss tailored solutions and how we can help grow your business.
          </Text>
          <Text fontSize={'xl'} textAlign={'center'}>
            Our call is perfect for businesses looking to increase online sales, optimize social media marketing efforts, and take their eCommerce presence to
            the next level.
          </Text>
          <Button marginInline={'auto'} marginTop={'15px'} colorScheme="twitter" type="submit">
            Book A Free Strategy Call <BiChevronRight size={'24px'} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ApproachSection;

