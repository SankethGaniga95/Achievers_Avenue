import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';
  import logo from "../Images/Achievers_Avenue__1_-removebg-preview.png"
  export default function Login() {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('#f3f8fa')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={8} >
          <Stack align={'center'}>
          <Box marginTop="-50px"  >
                <Image
                   width="170px"
                   height="90px"
                   objectFit='contain'
                   src={logo}
                   alt='Dan Abramov'
                  />  
          </Box>
            <Heading fontSize={'4xl'}>Login</Heading>
            
          </Stack>
          <Box 
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            px={14} py={10}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'#376ed5'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }