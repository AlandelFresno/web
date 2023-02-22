import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { MainLayout } from '../components/layouts/MainLayout';
import Terms from '../components/tos/PrivacyPolicy';
import { defaultResponsive } from '../utils/responsive-styles';

const Home: NextPage = () => {
  const pageDescription =
    "Boolers is a digital marketing agency dedicated to helping businesses increase their online presence. We focus on understanding each client's unique needs and goals to create customized strategies that help them achieve online success. With a creative mindset and innovative attitude, ongoing support to help maximize our clients' return on investment. If you're looking for an engaged, professional and creative digital marketing agency, look no further than Boolers - contact us today for a free strategy call!";

  return (
    <MainLayout title="Boolers - Digital Marketing Agency" pageDescription={pageDescription}>
      <Box marginTop={'70px'} paddingBlock={'50px'} {...defaultResponsive} marginInline={'auto'} display={'flex'} flexDir={'column'} alignItems={'center'}>
        <Terms />
      </Box>
    </MainLayout>
  );
};

export default Home;

