import React from "react";
import Slider from "react-slick";
import "./slick.css"; 
import "./slick-theme.css";
import { Card,Text,Image,Flex,Stack } from '@chakra-ui/react'
import student1 from "../Images/student1.png"
import student2 from "../Images/student2.png"
import student3 from "../Images/student3.png"
import student6 from "../Images/student6.jpg"



export const MultipleItems3=()=> {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>



<Card maxW="350px" maxH="400px" border="2px solid skyblue" borderRadius={"30px"} >
    
    <Stack mt='20' ml='10' mr='10' mb='10'>
      
      <Text fontSize="16px" fontWeight="400" lineHeight="25px" textAlign={"left"} mb="30px">
       Can't express the amount of respect to all the members in this platgorm who are working so hard for us. we are so blessed to have this lovely platform in our generation
      </Text>
      <Flex>
       <Image
       src={student1}
       alt='Green double couch with wooden legs'
       borderRadius='50%'
       border={"1px solid skyblue"} 
       
       width="40px"
       height="40px" 
       objectFit='cover'/>
       <Text ml={'7'} fontWeight={"500"}>Akash Tiwari</Text>
      </Flex>
      
   
    </Stack>
 
</Card>
<Card maxW="350px" maxH="400px" border="2px solid skyblue" borderRadius={"30px"} >
    
    <Stack mt='20' ml='10' mr='10' mb='10'>
      
      <Text fontSize="16px" fontWeight="400" lineHeight="25px" textAlign={"left"} mb="30px">
       Can't express the amount of respect to all the members in this platgorm who are working so hard for us. we are so blessed to have this lovely platform in our generation
      </Text>
      <Flex>
       <Image
       src={student2}
       alt='Green double couch with wooden legs'
       borderRadius='50%'
       border={"1px solid skyblue"} 
       
       width="40px"
       height="40px" 
       objectFit='cover'/>
       <Text ml={'7'} fontWeight={"500"}>Johns</Text>
      </Flex>
      
   
    </Stack>
 
</Card>
<Card maxW="350px" maxH="400px" border="2px solid skyblue" borderRadius={"30px"} >
    
    <Stack mt='20' ml='10' mr='10' mb='10'>
      
      <Text fontSize="16px" fontWeight="400" lineHeight="25px" textAlign={"left"} mb="30px">
       Can't express the amount of respect to all the members in this platgorm who are working so hard for us. we are so blessed to have this lovely platform in our generation
      </Text>
      <Flex>
       <Image
       src={student3}
       alt='Green double couch with wooden legs'
       borderRadius='50%'
       border={"1px solid skyblue"} 
       
       width="40px"
       height="40px" 
       objectFit='cover'/>
       <Text ml={'7'} fontWeight={"500"}>Sudeep</Text>
      </Flex>
      
   
    </Stack>
 
</Card>
<Card maxW="350px" maxH="400px" border="2px solid skyblue" borderRadius={"30px"} >
    
    <Stack mt='20' ml='10' mr='10' mb='10'>
      
      <Text fontSize="16px" fontWeight="400" lineHeight="25px" textAlign={"left"} mb="30px">
       Can't express the amount of respect to all the members in this platgorm who are working so hard for us. we are so blessed to have this lovely platform in our generation
      </Text>
      <Flex>
       <Image
       src={student6}
       alt='Green double couch with wooden legs'
       borderRadius='50%'
       border={"1px solid skyblue"} 
       
       width="40px"
       height="40px" 
       objectFit='cover'/>
       <Text ml={'7'} fontWeight={"500"}>Pradeep</Text>
      </Flex>
      
   
    </Stack>
 
</Card>




        </Slider>
      </div>
    );
  }
