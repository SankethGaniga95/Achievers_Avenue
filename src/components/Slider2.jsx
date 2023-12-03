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
<Card maxW={["100px","150px","210px"]} maxH={["300px","350px","400px"]} >
    <Image
      src={expert1}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width={["80px","150px","250px"]}
      height={["110px","130px","150px"]}  
      objectFit='fill'
    />
    <Stack mt={["1","1",'3']}  textAlign={"left"} ml={["3","5","7"]} >
      <Heading fontSize={["12px","15px","18px"]} fontWeight="500">Hardik Pandya</Heading>
      <Text fontSize={["12px","14px","14px"]} fontWeight="500" color={"blackAlpha.600"} mt="1">
      IIT New Delhi
      </Text>
      
      <Text ml={["5px","40px","50px"]} mt={["-1","1","3.5"]}fontSize={['14px',"18px","18px"]} color={"blackAlpha.600"}>16 Year Experience</Text>
    </Stack>
  <CardFooter>
      <Button variant='solid' colorScheme='blue' width="150px" ml={["-2px","20px","10px"]} mt="-23px" fontSize={['7px',"18px","18px"]}>
        know more
      </Button>
  </CardFooter>
</Card>
<Card maxW={["100px","150px","210px"]} maxH={["300px","350px","400px"]} >
    <Image
      src={expert2}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width={["80px","150px","250px"]}
      height={["110px","130px","150px"]}  
      objectFit='fill'
    />
    <Stack mt={["1","1",'3']}  textAlign={"left"} ml={["3","5","7"]} >
      <Heading fontSize={["10px","15px","18px"]} fontWeight="500">Sudeep Deshpande</Heading>
      <Text fontSize={["12px","14px","14px"]} fontWeight="500" color={"blackAlpha.600"} mt="1">
      IIT Kanpur
      </Text>
      
      <Text ml={["5px","40px","50px"]} mt={["-1","1","3.5"]}fontSize={['14px',"18px","18px"]} color={"blackAlpha.600"}>10 Year Experience</Text>
    </Stack>
  <CardFooter>
      <Button variant='solid' colorScheme='blue' width="150px" ml={["-2px","20px","10px"]} mt="-23px" fontSize={['7px',"18px","18px"]}>
        know more
      </Button>
  </CardFooter>
</Card>

<Card maxW={["100px","150px","210px"]} maxH={["300px","350px","400px"]} >
    <Image
      src={expert3}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width={["80px","150px","250px"]}
      height={["110px","130px","150px"]}  
      objectFit='fill'
    />
    <Stack mt={["1","1",'3']}  textAlign={"left"} ml={["3","5","7"]} >
      <Heading fontSize={["12px","15px","18px"]} fontWeight="500">Naveen Kumar</Heading>
      <Text fontSize={["12px","14px","14px"]} fontWeight="500" color={"blackAlpha.600"} mt="1">
      IIT Madras
      </Text>
      
      <Text ml={["5px","40px","50px"]} mt={["-1","1","3.5"]}fontSize={['14px',"18px","18px"]} color={"blackAlpha.600"}>14 Year Experience</Text>
    </Stack>
  <CardFooter>
      <Button variant='solid' colorScheme='blue' width="150px" ml={["-2px","20px","10px"]} mt="-23px" fontSize={['7px',"18px","18px"]}>
        know more
      </Button>
  </CardFooter>
</Card>

<Card maxW={["100px","150px","210px"]} maxH={["300px","350px","400px"]} >
    <Image
      src={expert4}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width={["80px","150px","250px"]}
      height={["110px","130px","150px"]}  
      objectFit='fill'
    />
    <Stack mt={["1","1",'3']}  textAlign={"left"} ml={["3","5","7"]} >
      <Heading fontSize={["12px","15px","18px"]} fontWeight="500">Seema Raje</Heading>
      <Text fontSize={["12px","14px","14px"]} fontWeight="500" color={"blackAlpha.600"} mt="1">
      IIT Ranchi
      </Text>
      
      <Text ml={["5px","40px","50px"]} mt={["-1","1","3.5"]}fontSize={['14px',"18px","18px"]} color={"blackAlpha.600"}>14 Year Experience</Text>
    </Stack>
  <CardFooter>
      <Button variant='solid' colorScheme='blue' width="150px" ml={["-2px","20px","10px"]} mt={["-10px","-17px","-23px"]} fontSize={['7px',"18px","18px"]}>
        know more
      </Button>
  </CardFooter>
</Card>

<Card maxW={["100px","150px","210px"]} maxH={["300px","350px","400px"]} >
    <Image
      src={"https://media.istockphoto.com/id/1005817658/photo/middle-aged-man-with-pleasant-face-expression.jpg?s=612x612&w=0&k=20&c=3YTdAT-m9io-zEF2aOmJsRz7tKVHlHSHvDFSILp6FAY="}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width={["80px","150px","250px"]}
      height={["110px","130px","150px"]}  
      objectFit='fill'
    />
    <Stack mt={["1","1",'3']}  textAlign={"left"} ml={["3","5","7"]} >
      <Heading fontSize={["12px","15px","18px"]} fontWeight="500">Hardik Pandya</Heading>
      <Text fontSize={["12px","14px","14px"]} fontWeight="500" color={"blackAlpha.600"} mt="1">
      IIT Kanpur
      </Text>
      
      <Text ml={["5px","40px","50px"]} mt={["-1","1","3.5"]}fontSize={['14px',"18px","18px"]} color={"blackAlpha.600"}>16 Year Experience</Text>
    </Stack>
  <CardFooter>
      <Button variant='solid' colorScheme='blue' width="150px" ml={["-2px","20px","10px"]} mt={["-23px","-17px","-23px"]} fontSize={['7px',"18px","18px"]}>
        know more
      </Button>
  </CardFooter>
</Card>

<Card maxW={["100px","150px","210px"]} maxH={["300px","350px","400px"]} >
    <Image
      src={"https://media.istockphoto.com/id/1288039261/photo/portrait-of-a-smiling-middle-aged-man-of-indian-origin.jpg?s=612x612&w=0&k=20&c=hksg2MpAsM6pQSR-TASLnfFE4-sDPcYHyE6-edycJDI="}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width={["80px","150px","250px"]}
      height={["110px","130px","150px"]}  
      objectFit='fill'
    />
    <Stack mt={["1","1",'3']}  textAlign={"left"} ml={["3","5","7"]} >
      <Heading fontSize={["12px","15px","18px"]} fontWeight="500">Hardik Pandya</Heading>
      <Text fontSize={["12px","14px","14px"]} fontWeight="500" color={"blackAlpha.600"} mt="1">
      IIT Kanpur
      </Text>
      
      <Text ml={["5px","40px","50px"]} mt={["-1","1","3.5"]}fontSize={['14px',"18px","18px"]} color={"blackAlpha.600"}>16 Year Experience</Text>
    </Stack>
  <CardFooter>
      <Button variant='solid' colorScheme='blue' width="150px" ml={["-2px","20px","10px"]} mt={["-23px","-17px","-23px"]} fontSize={['7px',"18px","18px"]}>
        know more
      </Button>
  </CardFooter>
</Card>





<Card maxW={["100px","150px","210px"]} maxH={["300px","350px","400px"]} >
    <Image
      src={"https://media.istockphoto.com/id/1329365227/photo/portrait-of-indian-teacher-standing-front-of-blackboard.jpg?s=612x612&w=0&k=20&c=qgKVQ1PqnvMun2An_X2-6pYupWhjjIPQfJ7qfQVoz_Q="}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width={["80px","150px","250px"]}
      height={["110px","130px","150px"]}  
      objectFit='fill'
    />
    <Stack mt={["1","1",'3']}  textAlign={"left"} ml={["3","5","7"]} >
      <Heading fontSize={["12px","15px","18px"]} fontWeight="500">Hardik Pandya</Heading>
      <Text fontSize={["12px","14px","14px"]} fontWeight="500" color={"blackAlpha.600"} mt="1">
      IIT Kanpur
      </Text>
      
      <Text ml={["5px","40px","50px"]} mt={["-1","1","3.5"]}fontSize={['14px',"18px","18px"]} color={"blackAlpha.600"}>16 Year Experience</Text>
    </Stack>
  <CardFooter>
      <Button variant='solid' colorScheme='blue' width="150px" ml={["-2px","20px","10px"]} mt={["-23px","-17px","-23px"]} fontSize={['7px',"18px","18px"]}>
        know more
      </Button>
  </CardFooter>
</Card>


<Card maxW={["100px","150px","210px"]} maxH={["300px","350px","400px"]} >
    <Image
      src={"https://media.istockphoto.com/id/1330255708/photo/portrait-of-smiling-teacher-in-school-corridor-with-books-in-hand.jpg?s=612x612&w=0&k=20&c=uL_vENUw7dccgUwjGcIwMMU_5Ew9BM5C8A0jInwn_hk="}
      alt='Green double couch with wooden legs'
      borderTopLeftRadius='lg'
      borderTopRightRadius="lg"
      width={["80px","150px","250px"]}
      height={["110px","130px","150px"]}  
      objectFit='fill'
    />
    <Stack mt={["1","1",'3']}  textAlign={"left"} ml={["3","5","7"]} >
      <Heading fontSize={["12px","15px","18px"]} fontWeight="500">Hardik Pandya</Heading>
      <Text fontSize={["12px","14px","14px"]} fontWeight="500" color={"blackAlpha.600"} mt="1">
      IIT Kanpur
      </Text>
      
      <Text ml={["5px","40px","50px"]} mt={["-1","1","3.5"]}fontSize={['14px',"18px","18px"]} color={"blackAlpha.600"}>16 Year Experience</Text>
    </Stack>
  <CardFooter>
      <Button variant='solid' colorScheme='blue' width="150px" ml={["-2px","20px","10px"]} mt={["-23px","-17px","-23px"]} fontSize={['7px',"18px","18px"]}>
        know more
      </Button>
  </CardFooter>
</Card>

        </Slider>
      </div>
    );
  }
