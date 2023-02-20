import React from 'react';
import { Alert, AlertIcon, Box, Button, FormControl, FormLabel, Heading, Input, SlideFade, Text, Textarea } from '@chakra-ui/react';
import { FieldValues, useForm } from 'react-hook-form';
import { defaultResponsive } from '../../utils/responsive-styles';
import { useState } from 'react';

const Formulary = () => {
  const defaultValues = {
    name: '',
    emailAddress: '',
    companyWebite: '',
    phoneNumber: '',
    howCanWeHelp: '',
  };

  const [mailStatus, setMailStatus] = useState('none');

  const { register, handleSubmit, reset } = useForm({ defaultValues });
  const onSubmit = (data: FieldValues) => {
    handleSendEmail(data);
  };
  const handleSendEmail = (data: FieldValues) => {
    setMailStatus('none');
    fetch('/api/send_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          setMailStatus('success');
          reset(defaultValues);
        } else {
          setMailStatus('error');
        }
      })
      .catch((error) => {
        console.error(error);
        setMailStatus('error');
      });
  };

  return (
    <Box boxShadow={'0px -15px 8px -9px #0d12185e'} width={'100% !important'} marginTop={'220px'} marginInline={'auto'} backgroundColor={'blackAlpha.800'}>
      <Box {...defaultResponsive} paddingTop={'60px'} marginInline={'auto'}>
        <Box textAlign={'center'} display={'flex'} flexDir={'column'} alignItems={'center'} gap={'10px'}>
          <Heading>Do you have any questions?</Heading>
          <Text width={'80%'} fontSize={'xl'} textAlign={'center'}>
            We are here to help you. If you have a specific question, feel free to write us an email and we will be happy to answer you.
          </Text>
        </Box>
        <Box
          display={'flex'}
          flexDir={'column'}
          gap={'20px'}
          marginTop={'50px'}
          marginBottom={'100px'}
          width={'85%'}
          marginInline={'auto'}
          as="form"
          onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel>Name*</FormLabel>
            <Input color={'black'} _focus={{ color: 'white' }} variant={'filled'} required {...register('name')} />
          </FormControl>
          <FormControl>
            <FormLabel>Email address*</FormLabel>
            <Input color={'black'} _focus={{ color: 'white' }} variant={'filled'} required {...register('emailAddress')} />
          </FormControl>
          <FormControl>
            <FormLabel>Company website*</FormLabel>
            <Input color={'black'} _focus={{ color: 'white' }} variant={'filled'} required {...register('companyWebite')} />
          </FormControl>
          <FormControl>
            <FormLabel>Phone number*</FormLabel>
            <Input color={'black'} _focus={{ color: 'white' }} variant={'filled'} required {...register('phoneNumber')} />
          </FormControl>
          <FormControl>
            <FormLabel>How can we help?*</FormLabel>
            <Textarea color={'black'} _focus={{ color: 'white' }} variant={'filled'} required {...register('howCanWeHelp')} />
          </FormControl>
          <Button marginRight={'auto'} colorScheme="twitter" type="submit">
            Talk to an expert
          </Button>
          <SlideFade in={mailStatus !== 'none'} offsetY="20px">
            <Alert color={'black'} status={mailStatus == 'success' ? 'success' : 'error'}>
              <AlertIcon />
              {mailStatus == 'success' ? 'The e-mail has been sent successfully' : 'There was a problem sending the e-mail'}
            </Alert>
          </SlideFade>
        </Box>
      </Box>
    </Box>
  );
};

export default Formulary;

