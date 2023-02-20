import React, { FC, useEffect, useState } from 'react';
import { Box, Button, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import OptionButton from '../navbar/OptionButton';
import { defaultResponsive } from '../../utils/responsive-styles';
import Link from 'next/link';
import HamburgerMenu from '../navbar/HamburgerMenu';

const Navbar: FC = () => {
  const [showNav, setShowNav] = useState(true);
  const [showBg, setShowBg] = useState(false);

  const getBackgroundCheckpoint = () => {
    const checkpoint = document.querySelector('#home')?.firstElementChild as HTMLElement;
    const topPosition = checkpoint.offsetTop * 3;
    return topPosition;
  };

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener('scroll', function () {
      // Get the new Value
      currentScrollPosition = window.pageYOffset;
      const bgCheckpoint = getBackgroundCheckpoint();
      bgCheckpoint < this.window.scrollY ? setShowBg(true) : setShowBg(false);

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShowNav(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShowNav(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  return (
    <Box
      position={'fixed'}
      zIndex={'2'}
      width={'100%'}
      bgColor={!showBg ? 'transparent' : 'white'}
      visibility={showNav ? 'visible' : 'hidden'}
      opacity={showNav ? 1 : 0}
      transition={'all ease 200ms'}
      top={showNav ? '0' : '-90'}>
      <Box
        {...defaultResponsive}
        left={0}
        right={0}
        marginInline={'auto'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        height={'70px'}>
        <Box marginBottom={'7px'} pos={'relative'} width={'150px'} height={'70px'} maxHeight={'70px'}>
          <Image src="/assets/logo-transparent.png" alt="Boolers company logo" style={{ objectFit: 'contain' }} fill sizes={'150px'} />
        </Box>
        <UnorderedList display={{ base: 'none', md: 'flex' }} listStyleType={'none'} gap={'25px'} fontSize={'md'}>
          <OptionButton text="Home" href="#home" />
          <OptionButton text="Approach" href="#approach" />
          <OptionButton text="Services" href="#services" />
          <OptionButton text="About" href="#about" />
        </UnorderedList>
        <Box display={{ base: 'none', md: 'flex' }} as={Link} href={'#contact'}>
          <Button transition={'all 200ms linear'} _hover={{ bgColor: '#3eadcd', transform: 'scale(1.03)' }} bgColor={'#1a7791'}>
            <Text color={'white'} fontSize={'md'} fontWeight={'bold'}>
              Contact
            </Text>
          </Button>
        </Box>
        <Box display={{ md: 'none' }}>
          <HamburgerMenu />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

