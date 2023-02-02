import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const WhyUsSection = () => {
  return (
    <Box paddingBlock={'50px'} width={'65%'} marginInline={'auto'} display={'flex'} flexDir={'column'} alignItems={'center'}>
      <Text fontSize={'4xl'} fontWeight={'bold'} color={'white'}>
        The Booleans Approach
      </Text>
      <br />
      <Text fontSize={'1xl'} fontWeight={'bold'} color={'white'}>
        At Stage Digital, we believe in providing personalized marketing solutions to drive sales and growth for our clients. Our process starts with analyzing
        your brand's history, crafting a strategy that aligns with your vision, and executing campaigns that sell your product efficiently. We continuously
        optimize and scale your campaigns using data, and our goal is to achieve a ROI of 4 or higher for every client.
      </Text>
      <br />
      <Text fontSize={'1xl'} fontWeight={'bold'} color={'white'}>
        Our team handles all aspects of the marketing process, from strategy development to campaign execution, so you can sit back and enjoy the results. For
        businesses looking for more hands-on support, we offer consulting services to help your team understand the mechanics of profitable social media
        advertising.
      </Text>
      <br />
      <Text fontSize={'1xl'} fontWeight={'bold'} color={'white'}>
        We treat your brand as our own and only recommend what we believe is best for your business. Prior to advertising your product, we always test it to
        ensure quality and to gain a customer's perspective.
      </Text>
      <br />
      <Text fontSize={'1xl'} fontWeight={'bold'} color={'white'}>
        Book a free strategy call with us to discuss tailored solutions and how we can help grow your business. Our call is perfect for businesses looking to
        increase online sales, optimize social media marketing efforts, and take their eCommerce presence to the next level.
      </Text>
      <br />
      <Text fontSize={'1xl'} fontWeight={'bold'} color={'white'}>
        We prioritize our clients and always direct our best resources towards achieving success for them, rather than pursuing new clients. Let's work together
        to bring customers to your business through social media marketing.
      </Text>
    </Box>
  );
};

export default WhyUsSection;
