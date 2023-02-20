import React from 'react';
import { Box } from '@chakra-ui/react';
import CalendlyCall from '../contact/CalendlyCall';
import Formulary from '../contact/Formulary';

const ContactSection = () => {
  return (
    <Box id={'contact'} marginTop={'100px'}>
      <CalendlyCall />
      <Formulary />
    </Box>
  );
};

export default ContactSection;

