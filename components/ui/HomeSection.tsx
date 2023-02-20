import { Box, Button, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { defaultResponsive } from '../../utils/responsive-styles';

const HomeSection: FC = () => {
  return (
    <SimpleGrid
      id="home"
      paddingTop={'70px'}
      position={'relative'}
      minHeight={'82vh'}
      {...defaultResponsive}
      marginInline={'auto'}
      columns={{ base: 1, lg: 2 }}>
      <Box
        alignItems={{ base: 'center', lg: 'start' }}
        textAlign={{ base: 'center', lg: 'start' }}
        gap={'30px'}
        display={'flex'}
        flexDir={'column'}
        justifyContent={'center'}>
        <Box>
          <Heading color={'#082639'} size={'3xl'} fontWeight={'bold'}>
            Bringing your business
          </Heading>
          <Heading color={'#1A7791'} size={'3xl'} fontWeight={'medium'}>
            the attention
          </Heading>
          <Heading color={'#F89820'} size={'3xl'} fontWeight={'medium'}>
            it deserves.
          </Heading>
        </Box>
        <Text color={'gray.600'} fontSize={'xl'} width={'80%'}>
          Leave the hard work to us and see your business online presence grow with our tailored strategies
        </Text>
        <Link href={'#contact'}>
          <Button
            marginRight={'auto'}
            size={'lg'}
            bgColor={'white'}
            transition={'all 200ms linear'}
            border={'3px solid #F89820'}
            _hover={{ border: '3px solid #f8982052' }}
            _focus={{ bgColor: 'transparent' }}>
            <Text color={'#F89820'} fontSize={'lg'} fontWeight={'medium'}>
              Let's Talk
            </Text>
          </Button>
        </Link>
      </Box>
      <Box display={{ base: 'none', lg: 'block' }} marginBlock={'auto'}>
        <Image alt={'A photo of a team working together to draw a chart'} src={'/assets/collaboration.svg'} width={900} height={900} />
      </Box>
    </SimpleGrid>
  );
};

export default HomeSection;

