import React, { FC } from 'react';
import { Box, IconButton, Text, Button } from '@chakra-ui/react';
import { defaultResponsive } from '../../utils/responsive-styles';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <Box
      {...defaultResponsive}
      marginInline={'auto'}
      display={'flex'}
      flexDir={{ base: 'column-reverse', md: 'row' }}
      marginBottom={'20px'}
      alignItems={'center'}
      justifyContent={'space-between'}
      height={'70px'}>
      <Text textAlign={'center'} fontSize={'md'}>
        Copyright © 2023 Boolers | Powered by Boolers
      </Text>
      <Box display={'flex'} gap={'10px'}>
        <Box display={'flex'} alignItems={'center'}>
          <Link href={'https://www.linkedin.com/company/boolers-smma/'}>
            <IconButton size={'sm'} _hover={{ bgColor: '#37a6ff14' }} variant={'ghost'} aria-label="Linkedin Link" icon={<AiOutlineLinkedin size={'25px'} />} />
          </Link>
          <Link href={'https://www.instagram.com/boolersagency/'}>
            <IconButton
              size={'sm'}
              _hover={{ bgColor: '#37a6ff14' }}
              variant={'ghost'}
              aria-label="Instagram Link"
              icon={<AiOutlineInstagram size={'25px'} />}
            />
          </Link>
          <Link href={'https://www.facebook.com/profile.php?id=100089462474776'}>
            <IconButton size={'sm'} _hover={{ bgColor: '#37a6ff14' }} variant={'ghost'} aria-label="Facebook Link" icon={<AiOutlineFacebook size={'25px'} />} />
          </Link>
        </Box>
        <Link href={'#home'}>
          <Button _hover={{ bgColor: '#37a6ff14' }} variant={'ghost'}>
            <Text fontWeight={'medium'}>To the top</Text>
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;

