import React, { FC } from 'react';
import { Box, IconButton, Text, Button } from '@chakra-ui/react';
import { defaultResponsive } from '../../utils/responsive-styles';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai';

const Footer: FC = () => {
  const goToTheTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box {...defaultResponsive} marginInline={'auto'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} height={'70px'}>
      <Text fontSize={'md'}>Copyright © 2023 Boolers | Powered by Boolers</Text>
      <Box display={'flex'} gap={'10px'}>
        <Box display={'flex'} alignItems={'center'}>
          <IconButton size={'sm'} _hover={{ bgColor: '#37a6ff14' }} variant={'ghost'} aria-label="Linkedin Link" icon={<AiOutlineLinkedin size={'25px'} />} />
          <IconButton size={'sm'} _hover={{ bgColor: '#37a6ff14' }} variant={'ghost'} aria-label="Instagram Link" icon={<AiOutlineInstagram size={'25px'} />} />
          <IconButton size={'sm'} _hover={{ bgColor: '#37a6ff14' }} variant={'ghost'} aria-label="Facebook Link" icon={<AiOutlineFacebook size={'25px'} />} />
          <IconButton size={'sm'} _hover={{ bgColor: '#37a6ff14' }} variant={'ghost'} aria-label="Twitter Link" icon={<AiOutlineTwitter size={'25px'} />} />
        </Box>
        <Button onClick={goToTheTop} _hover={{ bgColor: '#37a6ff14' }} variant={'ghost'}>
          <Text fontWeight={'medium'}>To the top</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;

