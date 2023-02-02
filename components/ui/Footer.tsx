import React, { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer: FC = () => {
  return (
    <Box maxWidth={'65%'} marginInline={'auto'} display={'flex'} alignItems={'center'} justifyContent={'center'} height={'70px'}>
      <Text fontSize={'lg'} fontWeight={'medium'}>
        Copyright © 2023 Boolers | Powered by Boolers
      </Text>
    </Box>
  );
};

export default Footer;
