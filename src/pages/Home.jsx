// import { Box } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
import { Card, CardBody,Text,SimpleGrid,Box,Center,CardHeader,ButtonGroup,Button,Image,Flex,Stack,Heading,Link } from '@chakra-ui/react'
import images from "../Images/57a805168570359.643da1114c50f.jpg"
import cardImage1 from "../Images/57a805168570359.643da1114c50f1.jpg"
import cardImage2 from "../Images/57a805168570359.643da1114c50f0.jpg"
import cardImage3 from "../Images/57a805168570359.643da1114c50f2.jpg"
import cardImage4 from "../Images/57a805168570359.643da1114c50f3.jpg"
import {MultipleItems} from "../components/Slider"
import { MultipleItems2 } from "../components/Slider2"
import { MultipleItems3 } from "../components/Slider3"



function Home(){
    return(
      <>
        {/* <Container maxWidth="1200px"> */}
        {/* <Flex>
        <Card   width="600px"  height="600px" >
  <CardBody>
   
    <Stack mt='6' spacing='3'>
      <Heading size='xl' lineHeight={"80px"}>Online & offline coaching classes for <span style={{color:"#376ed5"}}> NEET | IIT</span> </Heading>
      <Text color="gray" >
       Best academics,experienced faculty,advanced study material,regular test & doubt counter.Do you want to add spark to your NEET prparations?<Link color='blue.600'>Coaching Institute Admission are open</Link>
      </Text>
      <ButtonGroup spacing='8' >
      <Button variant='outline' colorScheme='blue' width="140px"height="55px" fontSize={"xl"}>
       Know More
      </Button>
      <Button variant='solid' colorScheme='blue'  width="140px"height="55px" fontSize={"xl"}>
      Join Now
      </Button>
    </ButtonGroup>
    </Stack>
  </CardBody>
</Card>
<Card  >
 
    <Image
      src={images}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    </Card>
</Flex> */}

<Card
      direction={{ base: 'column', md: 'row', sm: 'column', lg: 'row' }}
      overflow='hidden'
      variant='outline'
      height={['auto', 'auto', 'auto']}
    >
      <Stack spacing={6} p={6} flex={{ base: 1, md: 1, lg: 1 }}>
        <CardBody>
          <Heading size='xl' lineHeight={2} marginTop={['20px', '80px']}>
            Online & offline coaching classes for <span style={{ color: '#376ed5' }}> NEET | IIT</span>
          </Heading>
          <Text py={['4', '10']} fontSize={['16px', '20px']}>
            Best academics, experienced faculty, advanced study material, regular test & doubt counter. Do you want to add
            spark to your NEET preparations?{' '}
            <Link color='blue.600'> Coaching Institute Admission are open</Link>
          </Text>
          <ButtonGroup spacing='4'>
            <Button variant='outline' colorScheme='blue' width={['100%', '150px']} height={['50px', '60px']} fontSize={['xl', 'xl']}>
              Know More
            </Button>
            <Button variant='solid' colorScheme='blue' width={['100%', '150px']} height={['50px', '60px']} fontSize={['xl', 'xl']}>
              Join Now
            </Button>
          </ButtonGroup>
        </CardBody>
      </Stack>
      <Image
        objectFit='cover'
        maxW={['100%', '100%', '1000px']}
        src={images}
        alt='Caffe Latte'
        height={['300px', '460px']}
        marginRight={['0', '0', '30px']}
        marginTop={['20px', '110px']}
        marginLeft={['10px', '0', '30px']}
      />
    </Card>
  {/* </Container>       */}
{/* -------------------------------------------------------         */}
<Box  height={['1300px','1300px','770px']} bg="#f3f8fa"  border="1px solid #f3f8fa">
<Box marginLeft={['-20px','90px','450px']} width="500px" marginTop={["70px","60px","70px"]}>
<Text color="blue" fontSize="25px" fontWeight="semibold" marginLeft={["-90px"]} >About</Text>
<Text fontSize={["16px","24px","37px"]} fontWeight="bold" marginLeft={["-70px"]}>Our Coaching Institution</Text>

  </Box>


<Container maxW={["300px","auto","1200px"]}  marginTop="70px" > 

<SimpleGrid spacing={[20,30,40]} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card maxW={["400px","600px","750px"]} height={["270px","330px","400px"]} padding={4} >
    <CardHeader>
      <Center>
      <Image src={cardImage1} height={["70px","100px","150px"]} />
      </Center>
    </CardHeader>
    <CardBody>
      <Center>
      <Heading fontWeight={"bold"} fontSize={["24px","36px","42px"]}>50+</Heading>
      </Center>
      <Center>
        <Text fontSize={"22px"} color="gray.600" marginTop={"20px"}>
          Coaching centres in India
        </Text>
      </Center>
    </CardBody>
    
  </Card>
  <Card maxW={["400px","600px","750px"]} height={["270px","330px","400px"]} padding={4} >
    <CardHeader>
    <Center>
    <Image src={cardImage2} height={["70px","100px","150px"]}/>
    </Center>
    </CardHeader>
    <CardBody>
    <Center>
      <Heading fontWeight={"bold"} fontSize={["24px","36px","42px"]}>30000+</Heading>
      </Center>
      <Center>
        <Text fontSize={"22px"} color="gray.600" marginTop={"20px"}>
        Qualified NEET | IIT in 2022
        </Text>
      </Center>
    </CardBody>
  </Card>
  <Card maxW={["400px","600px","750px"]} height={["270px","330px","400px"]} padding={4} >
    <CardHeader>
    <Center>
    <Image src={cardImage3} height={["70px","100px","150px"]}/>
    </Center>
    </CardHeader>
    <CardBody>
    <Center>
      <Heading fontWeight={"bold"} fontSize={["24px","36px","42px"]}>1000+</Heading>
      </Center>
      <Center>
        <Text fontSize={"22px"} color="gray.600" marginTop={"20px"}>
          Expert Faculty
        </Text>
      </Center>
    </CardBody>
    
  </Card>
</SimpleGrid>



</Container>


</Box>
{/* --------------------------------------------------------------- */}
<Card
  direction={{ base: 'column', md: 'row', sm: 'column', lg: 'row' }}
  overflow='hidden'
  variant='outline'
  height={['auto', '950px', '600px']}
 
 
>
  <Image
    objectFit='contain'
    maxW={["270px",'500px',"1000px"]}
    src={cardImage4}
    alt='Caffe Latte'
   
    height="400px"
    marginLeft={["50px","50px","70px"]}
    marginTop={["70px","90","110px"]}
  />

  <Stack>
    <CardBody marginLeft={["30px","40px","70px"]} >
      <Heading size='2xl' lineHeight={1.3} marginTop={["30px","60px","80px"]}>You will get classes with qualified lectures</Heading>

      <Text py='10' fontSize={"20px"} >
       We successfully provide students with itensive courses by India's top faculties and personal mentors. 
      </Text>
      <Button variant='outline' colorScheme='black' width={'150px'} height={"60px"} fontSize={"20px"}>
        Know More
      </Button>
    </CardBody>

  </Stack>
</Card>
<Box height="600px" bg="#f3f8fa"  border="1px solid #f3f8fa">
  <Box width='100%' height={['auto',"auto",'550px']} marginTop={['70px',"85px",'100px']} >
    <Flex>
      <Box  maxWidth={["20%","20%",'30%']} height={'250px'} marginLeft={["20px","70px",'100px']} paddingTop={["10px","50px","60px"]} textAlign={"left"} >
        <Text color={"blue.600"} fontSize={["14px",'18px','24px']} fontWeight={"600"}>Toppers</Text>
       <Heading color={"blackAlpha.700"} fontSize={["14px",'18px','24px']} mt={2}>NEET UG 2023</Heading>
       <Text fontWeight={"500"} mt={"10px"} fontSize={["14px",'18px','24px']}>All India Rank (AIR)</Text> 
       <Text lineHeight={["20px","30px","40px"]} fontWeight={"500"} color={"blackAlpha.700"} fontSize={["11px",'18px','24px']}>We successfully provide students with intensive courses by India's top faculties and personal mentors. </Text>
      <Button variant={"outline"} border={"1px solid black"} mt={["10px","30px","50px"]} ml={["0px","5px","10px"]} fontSize={["10px","15px","20px"]} padding={["8px","10px","20px"]} >Know More</Button>
      </Box>
      <Box width={['80%','80%','70%']} height={["200px","300px",'400px']}ml={["10px","15px"]}>
      <MultipleItems/>
      </Box>
      
    </Flex>
    

  </Box>

</Box>
<Box height="500px" bg="#f3f8fa"  border="1px solid #f3f8fa">
  <Box width='100%' height='550px' marginTop='50px'>
    <Flex>
      <Box  width='30%' height='250px' marginLeft='100px' paddingTop={"60px"} textAlign={"left"}>
        <Text color={"blue.600"} fontSize={"24px"} fontWeight={"600"}>Our</Text>
       <Heading color={"blackAlpha.700"} mt="10px">Expert Faculty</Heading>
       <Text lineHeight={"40px"} mt="10px" fontWeight={"500"} color={"blackAlpha.700"}>We successfully provide students with intensive courses by India's top faculties and personal mentors. </Text>
      </Box>
      <Box width='70%' height='400px'>
      <MultipleItems2/>
      </Box>
      
    </Flex>
    

  </Box>

</Box>
<Box h="570px">

<Box width='100%' height='550px' marginTop='130px'>
    <Flex >
    <Box width='55%' height='400px'>
      <MultipleItems3/>
      </Box>
      <Box  width='45%' height='450px' bg="#f3f8fa" textAlign={"left"}>
        <Text color={"blue.600"} fontSize={"24px"} fontWeight={"600"} marginRight='200px' marginLeft={"50px"} paddingTop={"60px"}>Feedback</Text>
       <Heading mt="10px" marginRight='200px' marginLeft={"50px"} >What students says about us</Heading>
       <Text lineHeight={"40px"} mt="10px" fontWeight={"500"} color={"blackAlpha.700"} marginRight='200px' marginLeft={"50px"} >The data collected from students about their experience in their educational institutes.</Text>
      </Box>
      
      
    </Flex>
    

  </Box>

</Box>
</>
    )
}

export default Home