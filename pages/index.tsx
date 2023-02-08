import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { MainLayout } from '../components/layouts/MainLayout';
import ContactSection from '../components/ui/ContactSection';
import HomeSection from '../components/ui/HomeSection';
import ServicesSection from '../components/ui/ServicesSection';
import WhyUsSection from '../components/ui/WhyUsSection';
import ApproachSection from '../components/ui/ApproachSection';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <MainLayout title="Home">
      <Box height={'70px'} />
      <HomeSection />
      <Image id={'wave-vector-top'} alt={'wave design'} src={'/assets/wavev2.svg'} width={100} height={100} />
      <Box
        className="wapa"
        position={'relative'}
        display={'flex'}
        flexDir={'column'}
        gap={'100px'}
        zIndex={'1'}
        bgColor={'black'}
        color={'white'}
        paddingBottom={'50px'}
        minHeight={'100vh'}>
        <Box
          className="svg-shadow"
          pos={'absolute'}
          bgPos={'center'}
          bgSize={'cover'}
          zIndex={'-1'}
          opacity={'0.40'}
          bgImage={'./assets/moon2.svg'}
          height={'100%'}
          width={'100%'}
        />
        <ApproachSection />
        <WhyUsSection />
        <ServicesSection />
        <ContactSection />
      </Box>
      <Image id={'wave-vector-bottom'} alt={'wave design'} src={'/assets/wavebottom.svg'} width={100} height={100} />
    </MainLayout>
  );
};

export default Home;

