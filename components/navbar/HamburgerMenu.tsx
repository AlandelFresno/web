import { Menu, MenuButton, MenuItem, MenuList, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const HamburgerMenu = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Options" icon={<GiHamburgerMenu />} variant="outline" />
      <MenuList>
        <MenuItem>
          <Link href="#home">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#approach">Approach</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#services">Services</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#contact">Contact</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu;

