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
    Spinner,
  } from '@chakra-ui/react';
  import logo from "../Images/Achievers_Avenue__1_-removebg-preview.png"
import { useContext, useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { AuthContext } from '../Context/AuthContextProvider';


  const initialState={
    email:"",
    password:""

  }
  const getInitialState = () => {
    const token = localStorage.getItem("token");
    return {
      email: "",
      password: "",
      isLoggedIn: !!token, // Set isLoggedIn to true if a token is present
    };
  };

  const reducer=(state,action)=>{
    let {type,payload}=action
    switch(type){
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
  export default function Login() {
    const [state, dispatch]=useReducer(reducer,getInitialState())
    const [loading,setLoading]=useState(false)
    const [data,setData]=useState([])
    const navigate=useNavigate()
    const toast =useToast()
    const {loginUser,isAuthState}=useContext(AuthContext)
    const result =localStorage.getItem("token")



    const handleLogin=()=>{
      setLoading(true)
      axios.get("https://jsonserverrct101.onrender.com/users").then(res=>{
        setData(res.data)
        checkloginData()
        setLoading(false)
        localStorage.setItem("token",generateRandomString())
        
      })
    
      .catch(err=>console.log(err))
    }

    function generateRandomString(length = 10) {
      const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
      let randomString = '';
    
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
      }
    
      return randomString;
    }
    const checkloginData=()=>{
      let loginSuccessfull=false
      for(let keys of data){
        if(keys.email==state.email && keys.password==state.password){
           loginSuccessfull=true
          break;
        }
      }
      if(loginSuccessfull){
        loginUser(result)
          toast({
            title: 'Login Successfull.',
            status: 'success',
            duration: 3000,
            position:"top-right",
            isClosable: true,
          }) 
          
        }else{
          toast({
            title: 'Login Failed.',
            description: "Please Check your Credentials",
            status: 'error',
            duration: 3000,
            position:"top-right",
            isClosable: true,
          }) 
        }
       
      
    }

 

   




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
                <Input type="email" value={state.email} name="email" onChange={(e)=>dispatch({type:"email",payload:e.target.value})} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password"  value={state.password} name="password" onChange={(e)=>dispatch({type:"password",payload:e.target.value})}/>
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
                  }}
                  onClick={handleLogin}>
                  {loading?<Spinner color="skyblue" zIndex={100}  />:"Sign in"}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }