import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { FC } from 'react';

interface Props {
  heading: string;
  children: React.ReactNode;
  imagePath: string;
  imageAlt?: string;
  scale?: number;
  topOffset?: number;
  orderReverse?: boolean;
}

const Approach: FC<Props> = ({ heading, children, imagePath, imageAlt, scale, topOffset, orderReverse = false }) => {
  return (
    <Grid
      templateRows={{ base: 'minmax(100px, 1fr)', md: 'repeat(1, 1fr)' }}
      templateColumns={{ md: 'repeat(3, 1fr)' }}
      pos={'relative'}
      padding={{ base: '15px', sm: '20px', lg: '25px' }}>
      <Box
        borderRadius={'20px'}
        zIndex={'-1'}
        pos={'absolute'}
        background={`linear-gradient(${orderReverse ? '40deg' : '320deg'},rgb(0 0 0 / 08%) 0,rgb(0 0 0 / 74%) 100%)`}
        width={'100%'}
        height={'100%'}
      />
      <GridItem colSpan={2} marginBlock={'auto'}>
        <Box textAlign={{ base: 'center', md: 'start' }} display={'flex'} justifyContent={'center'} flexDir={'column'} gap={'20px'}>
          <Heading size={'lg'} color={'#f89820'}>
            {heading}
          </Heading>
          <Text fontSize={'large'} fontWeight={'medium'}>
            {children}
          </Text>
        </Box>
      </GridItem>
      <GridItem order={{ base: -1, md: orderReverse ? -1 : 1 }}>
        <Box
          marginBlock={'auto'}
          width={{ base: '90vw', md: '320px' }}
          marginInline={'auto'}
          height={'250px'}
          position={'relative'}
          top={topOffset}
          transform={`scale(${scale})`}>
          <Image alt={imageAlt ?? 'An irrelevant image'} src={imagePath} layout={'fill'} style={{ objectFit: 'contain' }} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Approach;

