import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { defaultResponsive } from '../../utils/responsive-styles';
import DosAndDontsList from '../approach/DosAndDontsList';
import Approach from '../approach/Approach';

const ApproachSection = () => {
  return (
    <Box id={'approach'} paddingBlock={'50px'} {...defaultResponsive} marginInline={'auto'} display={'flex'} flexDir={'column'} alignItems={'center'}>
      <Heading textAlign={'center'} size={'3xl'} fontWeight={'medium'}>
        The{' '}
        <Heading as="span" size={'3xl'} color="#f89820">
          Boolers{' '}
        </Heading>
        approach
      </Heading>
      <Text mt={'25px'} width={{ base: '95%', md: '65%' }} textAlign={'center'} fontWeight={'medium'} fontSize={'lg'}>
        Do you want to increase the visibility of your business and make your sales soar? Let us take care of it.
      </Text>
      <Box marginTop={'45px'} display={'flex'} flexDir={'column'} gap={{ base: '40px' }}>
        <Approach imageAlt="An illustration of a rocket going to a target" heading="Customized Business Solution" imagePath="/assets/goal.svg" scale={1.1}>
          We believe in the power of a personalized approach. That's why our team of experts takes the time to get to know your business, creating custom
          strategies that are tailored to meet your unique goals
        </Approach>
        <Approach imageAlt="A man showing a graph" heading="Dedicated Support for Partner Success" imagePath="/assets/presentation.svg" orderReverse>
          You're not just a client, you are a valued partner. We'll be by your side every step of the way, providing regular updates and progress reports to
          ensure your campaigns are on track.
        </Approach>
        <Approach imageAlt="A man and a woman holding a golden key" heading="Marketing Made Easy" imagePath="/assets/secret.svg">
          Let us handle the entire marketing process, from strategy to execution, so you can relax and see the results. For those seeking more guidance, we
          offer consulting services to help your team grasp the fundamentals of successful social media advertising.
        </Approach>
        <Approach
          imageAlt="A cell phone with a magnifying glass indicating that its applications are being tested"
          heading="Your Brand, Our Priority"
          imagePath="/assets/quality-assurance.svg"
          orderReverse>
          We treat your brand as our own and only recommend what we believe is best for your business. Prior to advertising your product, we always test it to
          ensure quality and to gain a customer's perspective.
        </Approach>
        <Approach
          imageAlt="A cell phone from which protrudes a man with a megaphone."
          heading="Exclusive Focus"
          imagePath="/assets/marketing-guy.svg"
          scale={1.12}>
          We prioritize our clients and always direct our best resources towards achieving success for them, rather than pursuing new clients. Let's work
          together to bring customers to your business through social media marketing.
        </Approach>
      </Box>
      <DosAndDontsList />
    </Box>
  );
};

export default ApproachSection;

