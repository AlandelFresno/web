import { Menu, MenuButton, MenuItem, MenuList, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const HamburgerMenu = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Options" icon={<GiHamburgerMenu />} variant="outline" />
      <MenuList>
        <Link href="#home">
          <MenuItem>Home</MenuItem>
        </Link>
        <Link href="#approach">
          <MenuItem>Approach</MenuItem>
        </Link>
        <Link href="#services">
          <MenuItem>Services</MenuItem>
        </Link>
        <Link href="#about">
          <MenuItem>About</MenuItem>
        </Link>
        <Link href="#contact">
          <MenuItem>Contact</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu;

