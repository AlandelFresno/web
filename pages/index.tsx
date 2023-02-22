import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { MainLayout } from '../components/layouts/MainLayout';
import ContactSection from '../components/ui/ContactSection';
import HomeSection from '../components/ui/HomeSection';
import ServicesSection from '../components/ui/ServicesSection';
import AboutSection from '../components/ui/AboutSection';
import ApproachSection from '../components/ui/ApproachSection';
import Image from 'next/image';
import PersuadeStrategyCall from '../components/approach/PersuadeStrategyCall';

const Home: NextPage = () => {
  const pageDescription =
    "Boolers is a digital marketing agency dedicated to helping businesses increase their online presence. We focus on understanding each client's unique needs and goals to create customized strategies that help them achieve online success. With a creative mindset and innovative attitude, ongoing support to help maximize our clients' return on investment. If you're looking for an engaged, professional and creative digital marketing agency, look no further than Boolers - contact us today for a free strategy call!";

  return (
    <MainLayout title="Boolers - Digital Marketing Agency" pageDescription={pageDescription}>
      {/* <Box
        pos={'absolute'}
        bgPos={'center'}
        transform={'scale(-1, 1)'}
        bgSize={'cover'}
        zIndex={'-1'}
        opacity={'0.35'}
        bgImage={'./assets/connected-background.svg'}
        height={'100%'}
        width={'100%'}
      /> */}
      {/* <Box pos={'absolute'} backdropFilter={'blur(4.5px)'} bgSize={'cover'} zIndex={'-1'} height={'100%'} width={'100%'} /> */}
      <HomeSection />
      <Box width={'100%'} position={'relative'} height={'300px'} overflow={'hidden'}>
        <Image id={'wave-vector-top'} alt={'An illustration of a black wave'} src={'/assets/wavetop.svg'} fill />
      </Box>
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
          pos={'absolute'}
          bgPos={'center'}
          bgSize={'cover'}
          zIndex={'-1'}
          // filter={'drop-shadow(0 0 5px #12343b) drop-shadow(0 0 15px #090f20) drop-shadow(0 0 20px #172038)'}
          opacity={'0.40'}
          bgImage={'./assets/moon-background.svg'}
          height={'100%'}
          width={'100%'}
        />
        <ServicesSection />
        <PersuadeStrategyCall />
        <ApproachSection />
        <AboutSection />
        <ContactSection />
      </Box>
      <Box width={'100%'} position={'relative'} height={'70px'} overflow={'hidden'}>
        <Image id={'wave-vector-bottom'} alt={'An illustration of a black wave'} src={'/assets/wavebottom.svg'} fill />
      </Box>
    </MainLayout>
  );
};

export default Home;

