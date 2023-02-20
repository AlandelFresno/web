import { Box, Button, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { defaultResponsive } from '../../utils/responsive-styles';

const PersuadeStrategyCall = () => {
  return (
    <Box {...defaultResponsive} marginInline={'auto'} marginBlock={'50px'} display={'flex'} flexDir={'column'} gap={'5px'}>
      <Text fontSize={'xl'} fontWeight={'bold'} textAlign={'center'}>
        Book a free strategy call with us to discuss tailored solutions and how we can help grow your business.
      </Text>
      <Text fontSize={'xl'} textAlign={'center'}>
        Our call is perfect for businesses looking to increase online sales, optimize social media marketing efforts, and take their eCommerce presence to the
        next level.
      </Text>
      <Box marginInline={'auto'}>
        <Link href={'#contact'}>
          <Button marginTop={'15px'} colorScheme="twitter" type="submit">
            Book A Free Strategy Call <BiChevronRight size={'24px'} />
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default PersuadeStrategyCall;

