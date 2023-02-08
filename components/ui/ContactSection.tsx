import { Box, Button, FormControl, FormLabel, Heading, Input, Text, Textarea } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { InlineWidget } from 'react-calendly';
import { FieldValues, useForm } from 'react-hook-form';
import { defaultResponsive } from '../../utils/responsive-styles';

const ContactSection = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <Box id={'contact'}>
      <Box
        {...defaultResponsive}
        marginInline={'auto'}
        display={{ base: 'flex', md: 'grid' }}
        flexDir={'column'}
        gridGap={'50px'}
        gridTemplateColumns={'1fr 1fr'}>
        <Box display={'flex'} flexDir={'column'} gap={'20px'}>
          <Heading size={'2xl'} marginInline={'auto'} textAlign={'center'}>
            Let's Talk
          </Heading>
          <Box overflow={'hidden'} borderRadius={'20px'} width={{ md: 'inherit' }}>
            <InlineWidget styles={{ height: '800px', marginInline: 'auto' }} url="https://calendly.com/fvmijael/50min" />
          </Box>
        </Box>
        <Box display={'flex'} flexDir={'column'} gap={'15px'}>
          <Box borderRadius={'100%'} overflow={'hidden'} width={'250px'} height={'250px'} border={'10px solid white'}>
            <Image src={'/assets/martin.jpg'} alt={'a photo of Martin Farres, our sales representative'} width={250} height={100} />
          </Box>
          <Heading marginBlock={'20px'} size={'lg'}>
            Book A Free Strategy Call
          </Heading>
          <Text fontSize={'xl'}>
            Schedule a complimentary and obligation-free strategy session with Boolers - Discuss customized social media marketing plans to drive your business
            growth and online sales success.
          </Text>
          <Text fontSize={'xl'}>Find a convenient time slot and secure it. We look forward to speaking with you</Text>
        </Box>
      </Box>
      <Box boxShadow={'0px -15px 8px -9px #0d12185e'} width={'100% !important'} marginTop={'120px'} marginInline={'auto'} backgroundColor={'blackAlpha.800'}>
        <Box {...defaultResponsive} paddingTop={'60px'} marginInline={'auto'}>
          <Box display={'flex'} flexDir={'column'} alignItems={'center'} gap={'10px'}>
            <Heading>Ready to get started?</Heading>
            <Text fontSize={'xl'} textAlign={'center'}>
              Schedule a complimentary and obligation-free strategy session with Boolers - Discuss customized social media marketing plans to drive your
              business growth and online sales success.
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
              <FormLabel>Company Website*</FormLabel>
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;

