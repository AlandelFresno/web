import React, { FC, useEffect, useState } from 'react';
import { Box, Button, Text, UnorderedList } from '@chakra-ui/react';
import Image from 'next/image';
import OptionButton from '../navbar/OptionButton';
import { defaultResponsive } from '../../utils/responsive-styles';

const Navbar: FC = () => {
  const [showNav, setShowNav] = useState(true);
  const [showBorder, setShowBorder] = useState(false);

  const getBorderCheckpoint = () => {
    const checkpoint = document.querySelector('#wave-vector-top') as HTMLElement;
    const topPosition = checkpoint.offsetTop;
    return topPosition;
  };

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener('scroll', function () {
      // Get the new Value
      currentScrollPosition = window.pageYOffset;
      const borderCheckpoint = getBorderCheckpoint();
      borderCheckpoint < this.window.scrollY ? setShowBorder(true) : setShowBorder(false);

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
      zIndex={'1'}
      width={'100%'}
      bgColor={'white'}
      borderBottom={showBorder ? '1px solid #e1e1e1' : ''}
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
        <Image src="/assets/full-logo-white.jpg" alt="Company logo" style={{ marginBottom: '7px' }} width="150" height="200" />
        <UnorderedList listStyleType={'none'} display={'flex'} gap={'25px'} fontSize={'md'}>
          <OptionButton text="Approach" href="#approach" />
          <OptionButton text="Services" href="#services" />
          <OptionButton text="Case Studies" href="#case-studies" />
          <OptionButton text="About" href="#about" />
        </UnorderedList>
        <Button transition={'all 200ms linear'} _hover={{ bgColor: '#3eadcd', transform: 'scale(1.03)' }} bgColor={'#1a7791'}>
          <Text color={'white'} fontSize={'md'} fontWeight={'bold'}>
            Contact
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;

