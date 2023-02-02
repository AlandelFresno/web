import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { MainLayout } from '../components/layouts/mainLayout';
import Contact from '../components/ui/Contact';
import HomeSection from '../components/ui/HomeSection';
import ServicesSection from '../components/ui/ServicesSection';
import WhyUsSection from '../components/ui/WhyUsSection';

const Home: NextPage = () => {
  return (
    <MainLayout title="Home">
      <HomeSection />
      <Box borderTopRadius={'12%'} paddingBlock={'50px'} bgColor={'gray.700'} minHeight={'100vh'}>
        <WhyUsSection />
        <ServicesSection />
        <Contact />
      </Box>
    </MainLayout>
  );
};

export default Home;
