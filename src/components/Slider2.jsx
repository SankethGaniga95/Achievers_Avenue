import React from "react";
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
import { Card, CardFooter,Text,Box,Button,Image,Flex,Stack,Heading, } from '@chakra-ui/react'
import expert1 from "../Images/expert1.png"
import expert2 from "../Images/expert2.png"
import expert3 from "../Images/expert3.png"
import expert4 from "../Images/expert4.png"
import student5 from "../Images/student5.jpg"
import student6 from "../Images/student6.jpg"
import student7 from "../Images/student7.jpg"
import student8 from "../Images/student8.jpg"
export const MultipleItems2=()=> {
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
      src={expert1}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="150px" 
      objectFit='fill'
    />
    <Stack mt='3' textAlign={"left"} ml="7">
      <Heading fontSize="18px" fontWeight="500">Hardik Pandya</Heading>
      <Text ml="50px" mt="1" color={"blackAlpha.600"} fontWeight={"500"}>IIT New Delhi</Text>
      <Text color={"blackAlpha.600"} fontWeight={"500"}>16 Year Experience</Text>
    </Stack>
  <CardFooter>
      <Button variant='solid' colorScheme='blue' width="150px" ml="10px" mt="-10px">
        know more
      </Button>
  </CardFooter>
</Card>
<Card maxW="210px" maxH="400px" >
    <Image
      src={expert2}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="150px" 
      objectFit='fill'
    />
     <Stack mt='3' textAlign={"left"} ml="7">
      <Heading fontSize="18px" fontWeight="500">Sudeep Deshpande</Heading>
      <Text ml="50px" mt="1" color={"blackAlpha.600"} fontWeight={"500"}>IIT Kanpur</Text>
      <Text color={"blackAlpha.600"} fontWeight={"500"}>10 Year Experience</Text>
    </Stack>
  <CardFooter>
  
      <Button variant='solid' colorScheme='blue' width="150px" ml="10px" mt="-10px">
        know more
      </Button>
  </CardFooter>
</Card> <Card maxW="210px" maxH="400px" >
    <Image
      src={expert3}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="150px" 
      objectFit='fill'
    />
     <Stack mt='3' textAlign={"left"} ml="7">
      <Heading fontSize="18px" fontWeight="500">Naveen Kumar</Heading>
      <Text ml="50px" mt="1" color={"blackAlpha.600"} fontWeight={"500"}>IIT Madras</Text>
      <Text color={"blackAlpha.600"} fontWeight={"500"}>14 Year Experience</Text>
    </Stack>
  <CardFooter>
  
      <Button variant='solid' colorScheme='blue' width="150px" ml="10px" mt="-10px">
        know more
      </Button>
  </CardFooter>
</Card> <Card maxW="210px" maxH="400px" >
    <Image
      src={expert4}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="150px" 
      objectFit='fill'
    />
   <Stack mt='3' textAlign={"left"} ml="7">
      <Heading fontSize="18px" fontWeight="500">Seema Raje</Heading>
      <Text ml="50px" mt="1" color={"blackAlpha.600"} fontWeight={"500"}>IIT Ranchi</Text>
      <Text color={"blackAlpha.600"} fontWeight={"500"}>14 Year Experience</Text>
    </Stack>
  <CardFooter>
  
      <Button variant='solid' colorScheme='blue' width="150px" ml="10px" mt="-10px">
        know more
      </Button>
  </CardFooter>
</Card>
<Card maxW="210px" maxH="400px" >
    <Image
      src={"https://media.istockphoto.com/id/1005817658/photo/middle-aged-man-with-pleasant-face-expression.jpg?s=612x612&w=0&k=20&c=3YTdAT-m9io-zEF2aOmJsRz7tKVHlHSHvDFSILp6FAY="}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="150px" 
      objectFit='fill'
    />
      <Stack mt='3' textAlign={"left"} ml="7">
      <Heading fontSize="18px" fontWeight="500">Hardik Pandya</Heading>
      <Text ml="50px" mt="1" color={"blackAlpha.600"} fontWeight={"500"}>IIT New Delhi</Text>
      <Text color={"blackAlpha.600"} fontWeight={"500"}>16 Year Experience</Text>
    </Stack>
  <CardFooter>
  
      <Button variant='solid' colorScheme='blue' width="150px" ml="10px" mt="-10px">
        know more
      </Button>
  </CardFooter>
</Card>
<Card maxW="210px" maxH="400px" >
    <Image
      src={"https://media.istockphoto.com/id/1288039261/photo/portrait-of-a-smiling-middle-aged-man-of-indian-origin.jpg?s=612x612&w=0&k=20&c=hksg2MpAsM6pQSR-TASLnfFE4-sDPcYHyE6-edycJDI="}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="150px" 
      objectFit='fill'
    />
      <Stack mt='3' textAlign={"left"} ml="7">
      <Heading fontSize="18px" fontWeight="500">Hardik Pandya</Heading>
      <Text ml="50px" mt="1" color={"blackAlpha.600"} fontWeight={"500"}>IIT New Delhi</Text>
      <Text color={"blackAlpha.600"} fontWeight={"500"}>16 Year Experience</Text>
    </Stack>
  <CardFooter>
  
      <Button variant='solid' colorScheme='blue' width="150px" ml="10px" mt="-10px">
        know more
      </Button>
  </CardFooter>
</Card>
<Card maxW="210px" maxH="400px" >
    <Image
      src={"https://media.istockphoto.com/id/1329365227/photo/portrait-of-indian-teacher-standing-front-of-blackboard.jpg?s=612x612&w=0&k=20&c=qgKVQ1PqnvMun2An_X2-6pYupWhjjIPQfJ7qfQVoz_Q="}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="150px" 
      objectFit='fill'
    />
      <Stack mt='3' textAlign={"left"} ml="7">
      <Heading fontSize="18px" fontWeight="500">Hardik Pandya</Heading>
      <Text ml="50px" mt="1" color={"blackAlpha.600"} fontWeight={"500"}>IIT New Delhi</Text>
      <Text color={"blackAlpha.600"} fontWeight={"500"}>16 Year Experience</Text>
    </Stack>
  <CardFooter>
  
      <Button variant='solid' colorScheme='blue' width="150px" ml="10px" mt="-10px">
        know more
      </Button>
  </CardFooter>
</Card>
<Card maxW="210px" maxH="400px" >
    <Image
      src={"https://media.istockphoto.com/id/1330255708/photo/portrait-of-smiling-teacher-in-school-corridor-with-books-in-hand.jpg?s=612x612&w=0&k=20&c=uL_vENUw7dccgUwjGcIwMMU_5Ew9BM5C8A0jInwn_hk="}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width="250px"
      height="150px" 
      objectFit='fill'
    />
      <Stack mt='3' textAlign={"left"} ml="7">
      <Heading fontSize="18px" fontWeight="500">Hardik Pandya</Heading>
      <Text ml="50px" mt="1" color={"blackAlpha.600"} fontWeight={"500"}>IIT New Delhi</Text>
      <Text color={"blackAlpha.600"} fontWeight={"500"}>16 Year Experience</Text>
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
