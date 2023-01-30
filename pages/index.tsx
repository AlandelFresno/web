import { Box, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { MainLayout } from '../components/layouts/mainLayout';

const Home: NextPage = () => {
  return (
    <MainLayout title="Home">
      <Box display={'flex'} justifyContent={'space-between'} backgroundColor={'blackAlpha.400'} paddingBlock={'15px'} paddingInline={'40px'}>
        <Text fontSize={'2xl'} fontWeight={'bold'}>
          Boolers
        </Text>
        <Box>
          <Text>Contact</Text>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Home;
