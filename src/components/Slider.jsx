import React from "react";
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
import { Card, CardFooter,Text,Box,Button,Image,Flex,Stack,Heading, } from '@chakra-ui/react'
import student1 from "../Images/student1.png"
import student2 from "../Images/student2.png"
import student3 from "../Images/student3.png"
import student4 from "../Images/student4.png"
import student5 from "../Images/student5.jpg"
import student6 from "../Images/student6.jpg"
import student7 from "../Images/student7.jpg"
import student8 from "../Images/student8.jpg"


export const MultipleItems=()=> {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
        <Card maxW="210px" maxH="400px" >
    <Image
      src={student1}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="220px" 
      objectFit='fill'
    />
    <Stack mt='3'>
      <Heading fontSize="18px" fontWeight="500">Akash Tiwari</Heading>
      <Text fontSize="14px" fontWeight="500" color='blue.600' lineHeight="2px">
        Bengaluru, Karnataka
      </Text>
      <Flex gap={10}  >
      <Text ml="50px" mt="3">Air</Text>
      <Text mt="3">Score</Text>
      </Flex>
      <Flex gap={5}> 
      <Text color='blue.600' fontSize='2xl' ml="45px" mt="-3">
        02
      </Text>
      <Text fontSize="2xl" mt="-3">|</Text>
      <Text color='blue.600' fontSize='2xl' mt="-3">
        719
      </Text>
      </Flex>
    </Stack>
  <CardFooter>
      <Button variant='solid' colorScheme='blue' width="150px" ml="10px" mt="-10px">
        know more
      </Button>
  </CardFooter>
</Card>
<Card maxW="210px" maxH="400px" >
    <Image
      src={student2}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="220px" 
      objectFit='fill'
    />
    <Stack mt='3'>
      <Heading fontSize="18px" fontWeight="500">Sudeep</Heading>
      <Text fontSize="14px" fontWeight="500" color='blue.600' lineHeight="2px">
        Bengaluru, Karnataka
      </Text>
      <Flex gap={10}  >
      <Text ml="50px" mt="3">Air</Text>
      <Text mt="3">Score</Text>
      </Flex>
      <Flex gap={5}> 
      <Text color='blue.600' fontSize='2xl' ml="45px" mt="-3">
        02
      </Text>
      <Text fontSize="2xl" mt="-3">|</Text>
      <Text color='blue.600' fontSize='2xl' mt="-3">
        717
      </Text>
      </Flex>
    </Stack>
  <CardFooter>
  
      <Button variant='solid' colorScheme='blue' width="150px" ml="10px" mt="-10px">
        know more
      </Button>
  </CardFooter>
</Card> <Card maxW="210px" maxH="400px" >
    <Image
      src={student3}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="220px" 
      objectFit='fill'
    />
    <Stack mt='3'>
      <Heading fontSize="18px" fontWeight="500">Johns</Heading>
      <Text fontSize="14px" fontWeight="500" color='blue.600' lineHeight="2px">
        Kolkata, West Bengal
      </Text>
      <Flex gap={10}  >
      <Text ml="50px" mt="3">Air</Text>
      <Text mt="3">Score</Text>
      </Flex>
      <Flex gap={5}> 
      <Text color='blue.600' fontSize='2xl' ml="45px" mt="-3">
        02
      </Text>
      <Text fontSize="2xl" mt="-3">|</Text>
      <Text color='blue.600' fontSize='2xl' mt="-3">
        719
      </Text>
      </Flex>
    </Stack>
  <CardFooter>
  
      <Button variant='solid' colorScheme='blue' width="150px" ml="10px" mt="-10px">
        know more
      </Button>
  </CardFooter>
</Card> <Card maxW="210px" maxH="400px" >
    <Image
      src={student4}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="220px" 
      objectFit='fill'
    />
    <Stack mt='3'>
      <Heading fontSize="18px" fontWeight="500">Pradeep</Heading>
      <Text fontSize="14px" fontWeight="500" color='blue.600' lineHeight="2px">
        Raichur, Karnataka
      </Text>
      <Flex gap={10}  >
      <Text ml="50px" mt="3">Air</Text>
      <Text mt="3">Score</Text>
      </Flex>
      <Flex gap={5}> 
      <Text color='blue.600' fontSize='2xl' ml="45px" mt="-3">
        02
      </Text>
      <Text fontSize="2xl" mt="-3">|</Text>
      <Text color='blue.600' fontSize='2xl' mt="-3">
        715
      </Text>
      </Flex>
    </Stack>
  <CardFooter>
  
      <Button variant='solid' colorScheme='blue' width="150px" ml="10px" mt="-10px">
        know more
      </Button>
  </CardFooter>
</Card>
<Card maxW="210px" maxH="400px" >
    <Image
      src={student5}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="220px" 
      objectFit='fill'
    />
    <Stack mt='3'>
      <Heading fontSize="18px" fontWeight="500">Akash Tiwari</Heading>
      <Text fontSize="14px" fontWeight="500" color='blue.600' lineHeight="2px">
        Bengaluru, Karnataka
      </Text>
      <Flex gap={10}  >
      <Text ml="50px" mt="3">Air</Text>
      <Text mt="3">Score</Text>
      </Flex>
      <Flex gap={5}> 
      <Text color='blue.600' fontSize='2xl' ml="45px" mt="-3">
        02
      </Text>
      <Text fontSize="2xl" mt="-3">|</Text>
      <Text color='blue.600' fontSize='2xl' mt="-3">
        719
      </Text>
      </Flex>
    </Stack>
  <CardFooter>
  
      <Button variant='solid' colorScheme='blue' width="150px" ml="10px" mt="-10px">
        know more
      </Button>
  </CardFooter>
</Card>
<Card maxW="210px" maxH="400px" >
    <Image
      src={student6}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="220px" 
      objectFit='fill'
    />
    <Stack mt='3'>
      <Heading fontSize="18px" fontWeight="500">Akash Tiwari</Heading>
      <Text fontSize="14px" fontWeight="500" color='blue.600' lineHeight="2px">
        Bengaluru, Karnataka
      </Text>
      <Flex gap={10}  >
      <Text ml="50px" mt="3">Air</Text>
      <Text mt="3">Score</Text>
      </Flex>
      <Flex gap={5}> 
      <Text color='blue.600' fontSize='2xl' ml="45px" mt="-3">
        02
      </Text>
      <Text fontSize="2xl" mt="-3">|</Text>
      <Text color='blue.600' fontSize='2xl' mt="-3">
        719
      </Text>
      </Flex>
    </Stack>
  <CardFooter>
  
      <Button variant='solid' colorScheme='blue' width="150px" ml="10px" mt="-10px">
        know more
      </Button>
  </CardFooter>
</Card>
<Card maxW="210px" maxH="400px" >
    <Image
      src={student7}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="220px" 
      objectFit='fill'
    />
    <Stack mt='3'>
      <Heading fontSize="18px" fontWeight="500">Akash Tiwari</Heading>
      <Text fontSize="14px" fontWeight="500" color='blue.600' lineHeight="2px">
        Bengaluru, Karnataka
      </Text>
      <Flex gap={10}  >
      <Text ml="50px" mt="3">Air</Text>
      <Text mt="3">Score</Text>
      </Flex>
      <Flex gap={5}> 
      <Text color='blue.600' fontSize='2xl' ml="45px" mt="-3">
        02
      </Text>
      <Text fontSize="2xl" mt="-3">|</Text>
      <Text color='blue.600' fontSize='2xl' mt="-3">
        719
      </Text>
      </Flex>
    </Stack>
  <CardFooter>
  
      <Button variant='solid' colorScheme='blue' width="150px" ml="10px" mt="-10px">
        know more
      </Button>
  </CardFooter>
</Card>
<Card maxW="210px" maxH="400px" >
    <Image
      src={student8}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="220px" 
      objectFit='fill'
    />
    <Stack mt='3'>
      <Heading fontSize="18px" fontWeight="500">Akash Tiwari</Heading>
      <Text fontSize="14px" fontWeight="500" color='blue.600' lineHeight="2px">
        Bengaluru, Karnataka
      </Text>
      <Flex gap={10}  >
      <Text ml="50px" mt="3">Air</Text>
      <Text mt="3">Score</Text>
      </Flex>
      <Flex gap={5}> 
      <Text color='blue.600' fontSize='2xl' ml="45px" mt="-3">
        02
      </Text>
      <Text fontSize="2xl" mt="-3">|</Text>
      <Text color='blue.600' fontSize='2xl' mt="-3">
        719
      </Text>
      </Flex>
    </Stack>
  <CardFooter>
  
      <Button variant='solid' colorScheme='blue' width="150px" ml="10px" mt="-10px">
        know more
      </Button>
  </CardFooter>
</Card>

        </Slider>
      </div>
    );
  }
