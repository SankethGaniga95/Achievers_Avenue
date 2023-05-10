// import { Box } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
import { Card, CardBody, CardFooter,Text,SimpleGrid,Box,Center,CardHeader,ButtonGroup,Button,Image,Flex,Stack,Heading,Link } from '@chakra-ui/react'
import images from "../Images/57a805168570359.643da1114c50f.jpg"
import cardImage1 from "../Images/57a805168570359.643da1114c50f1.jpg"
import cardImage2 from "../Images/57a805168570359.643da1114c50f0.jpg"
import cardImage3 from "../Images/57a805168570359.643da1114c50f2.jpg"
import cardImage4 from "../Images/57a805168570359.643da1114c50f3.jpg"


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
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  height="600px"
 
 
>
  

  <Stack>
    <CardBody marginLeft={"100px"} >
      <Heading size='xl' lineHeight={2} marginTop="80px">Online & offline coaching classes for <span style={{color:"#376ed5"}}> NEET | IIT</span> </Heading>

      <Text py='10' fontSize={"20px"} >
      Best academics,experienced faculty,advanced study material,regular test & doubt counter.Do you want to add spark to your NEET preparations? <Link color='blue.600'>  Coaching Institute Admission are open</Link>
      </Text>
      <ButtonGroup spacing='8' >
      <Button variant='outline' colorScheme='blue' width="150px"height="60px" fontSize={"xl"}>
       Know More
      </Button>
      <Button variant='solid' colorScheme='blue'  width="150px"height="60px" fontSize={"xl"}>
      Join Now
      </Button>
    </ButtonGroup>
    </CardBody>

  </Stack>
  <Image
    objectFit='conatin'
    maxW={"1000px"}
    src={images}
    alt='Caffe Latte'
   
    height="460px"
    marginRight="30px"
    marginTop="110px"
  
  />
</Card>
  {/* </Container>       */}
{/* -------------------------------------------------------         */}
<Box  height="770px" bg="#f3f8fa"  border="1px solid #f3f8fa ">
<Box marginLeft={'450px'} width="500px" marginTop="70px">
<Text color="blue" fontSize="25px" fontWeight="semibold" marginLeft="165px" marginTop="100px">About</Text>
<Text fontSize="37px" fontWeight="bold">Our Coaching Institution</Text>

  </Box>


<Container maxW="1200px"  marginTop="70px" > 

<SimpleGrid spacing={40} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
  <Card maxW={"750px"} padding={4}>
    <CardHeader>
      <Center>
      <Image src={cardImage1} />
      </Center>
    </CardHeader>
    <CardBody>
      <Center>
      <Heading fontWeight={"bold"}>50+</Heading>
      </Center>
      <Center>
        <Text fontSize={"22px"} color="gray.600" marginTop={"20px"}>
          Coaching centres in India
        </Text>
      </Center>
    </CardBody>
    
  </Card>
  <Card maxW={"750px"} padding={4}>
    <CardHeader>
    <Center>
    <Image src={cardImage2}/>
    </Center>
    </CardHeader>
    <CardBody>
    <Center>
      <Heading fontWeight={"bold"}>30000+</Heading>
      </Center>
      <Center>
        <Text fontSize={"22px"} color="gray.600" marginTop={"20px"}>
        Qualified NEET | IIT in 2022
        </Text>
      </Center>
    </CardBody>
  </Card>
  <Card maxW={"750px"} padding={4}>
    <CardHeader>
    <Center>
    <Image src={cardImage3}/>
    </Center>
    </CardHeader>
    <CardBody>
    <Center>
      <Heading fontWeight={"bold"}>1000+</Heading>
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
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  height="600px"
 
 
>
  <Image
    objectFit='conatin'
    maxW={"1000px"}
    src={cardImage4}
    alt='Caffe Latte'
   
    height="400px"
    marginLeft="70px"
    marginTop="110px"
  />

  <Stack>
    <CardBody marginLeft={"40px"} >
      <Heading size='2xl' lineHeight={1.3} marginTop="80px">You will get classes with qualified lectures</Heading>

      <Text py='10' fontSize={"20px"} >
       We successfully provide students with itensive courses by India's top faculties and personal mentors. 
      </Text>
      <Button variant='outline' colorScheme='black' width={'150px'} height={"60px"} fontSize={"20px"}>
        Know More
      </Button>
    </CardBody>

  </Stack>
</Card>
</>
    )
}

export default Home