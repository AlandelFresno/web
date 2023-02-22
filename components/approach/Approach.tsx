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
      padding={{ base: '20px', sm: '25px', lg: '30px' }}>
      <Box
        borderRadius={'20px'}
        zIndex={'-1'}
        pos={'absolute'}
        background={`linear-gradient(${orderReverse ? '40deg' : '320deg'},rgb(0 0 0 / 08%) 0,rgb(0 0 0 / 74%) 100%)`}
        width={'100%'}
        height={'100%'}
      />
      <GridItem
        textAlign={{ base: 'start' }}
        overflow={'hidden'}
        rowSpan={{ base: 2, md: 1 }}
        colSpan={{ md: 2 }}
        justifyContent={{ md: 'center' }}
        borderRadius={'2xl'}
        display={'flex'}
        flexDir={'column'}
        gap={'25px'}>
        <Heading size={'xl'} color={'#f89820'}>
          {heading}
        </Heading>
        <Text fontSize={'xl'} fontWeight={'medium'}>
          {children}
        </Text>
      </GridItem>
      <GridItem order={{ base: -1, md: orderReverse ? -1 : 1 }}>
        <Box marginBlock={'auto'} height={'250px'} position={'relative'} top={topOffset} transform={`scale(${scale})`}>
          <Image alt={imageAlt ?? 'An irrelevant icon'} src={imagePath} fill style={{ objectFit: 'contain' }} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Approach;

