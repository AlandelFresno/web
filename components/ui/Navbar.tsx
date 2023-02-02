import React, { FC } from 'react';
import { Box, Button, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import Link from 'next/link';

const Navbar: FC = () => {
  return (
    <Box maxWidth={'65%'} marginInline={'auto'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} height={'70px'}>
      <Text fontSize={'4xl'} fontWeight={'bold'}>
        Boolers
      </Text>
      <Box display={'flex'} alignItems={'center'} gap={'35px'}>
        <UnorderedList listStyleType={'none'} color={'gray.600'} display={'flex'} gap={'25px'} fontWeight={'medium'} fontSize={'xl'}>
          <ListItem transition={'transform 200ms linear'} _hover={{ color: 'gray.900', transform: 'scale(1.03)' }}>
            <Link href={'#services'}>Approach</Link>
          </ListItem>
          <ListItem transition={'transform 200ms linear'} _hover={{ color: 'gray.900', transform: 'scale(1.03)' }}>
            <Link href={'#services'}>Services</Link>
          </ListItem>
          <ListItem transition={'transform 200ms linear'} _hover={{ color: 'gray.900', transform: 'scale(1.03)' }}>
            <Link href={'#study-cases'}>Case Studies</Link>
          </ListItem>
          <ListItem transition={'transform 200ms linear'} _hover={{ color: 'gray.900', transform: 'scale(1.03)' }}>
            <Link href={'#about'}>About</Link>
          </ListItem>
        </UnorderedList>
        <Button transition={'all 200ms linear'} _hover={{ bgColor: 'gray.600', transform: 'scale(1.03)' }} bgColor={'gray.700'}>
          <Text color={'white'} fontSize={'lg'} fontWeight={'bold'}>
            Contact
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
