import React from 'react';
import { ListItem } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

interface Props {
  text: string;
  href: string;
}

const OptionButton: FC<Props> = ({ text, href }) => {
  return (
    <Link href={href}>
      <ListItem
        color={'#082639'}
        px={'12px'}
        borderRadius={'xl'}
        transition={'all 150ms linear'}
        _hover={{ bgColor: '#1a779114', color: '#1a7791', transform: 'scale(1.02)' }}>
        {text}
      </ListItem>
    </Link>
  );
};

export default OptionButton;

