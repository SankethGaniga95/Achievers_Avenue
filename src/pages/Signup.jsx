import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image,
    Spinner,
  } from '@chakra-ui/react';
  import { useReducer, useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import logo from "../Images/Achievers_Avenue__1_-removebg-preview.png"
  import {Link, useNavigate} from "react-router-dom"
import axios from 'axios';
import { useToast } from '@chakra-ui/react'

   
  const initialState={
    firstName:"",
    lastName:"",
    email:"",
    password:""

  }

  const reducer=(state,action)=>{
    let {type,payload}=action
    switch(type){
      case "firstName":
        return {...state,firstName:payload}
        case "lastName":
        return {...state,lastName:payload}
        case "email":
        return {...state,email:payload}
        case "password":
          return {...state,password:payload}
        case "reset":
          return initialState
        default :
        return state
    }

  }
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
    const [state, dispatch]=useReducer(reducer,initialState)
    const [loading,setLoading]=useState(false)
    const toast=useToast()
    const navigate=useNavigate()

    const handleSignin=()=>{
      setLoading(true)
      axios.post("https://jsonserverrct101.onrender.com/users",state)
      .then(res=>{
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        }) 
        setLoading(false)
        navigate("/login")})
      .catch(err=>{
        console.log(err)
      })
      dispatch({type:"reset"})
    }
  
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('#f3f8fa')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
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
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
          </Stack>
          <Box 
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" value={state.firstName} name="firstName" onChange={(e)=>dispatch({type:"firstName",payload:e.target.value})} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" value={state.lastName} name="lastName" onChange={(e)=>dispatch({type:"lastName",payload:e.target.value})} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={state.email} name="email" onChange={(e)=>dispatch({type:"email",payload:e.target.value})} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} value={state.password} name="password" onChange={(e)=>dispatch({type:"password",payload:e.target.value})} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'#376ed5'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={handleSignin}>
                  {loading?<Spinner color="skyblue" zIndex={100}  />:"Sign up"}
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link style={{color:"blue"}} to="/login" >Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }