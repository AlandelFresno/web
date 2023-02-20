import { Menu, MenuButton, MenuItem, MenuList, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const HamburgerMenu = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Options" icon={<GiHamburgerMenu />} variant="outline" />
      <MenuList>
        <MenuItem as={Link} href="#home">
          Home
        </MenuItem>
        <MenuItem as={Link} href="#approach">
          Approach
        </MenuItem>
        <MenuItem as={Link} href="#services">
          Services
        </MenuItem>
        <MenuItem as={Link} href="#about">
          About
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HamburgerMenu;

