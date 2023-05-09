// import { Box } from "@chakra-ui/react"
import { Container } from "@chakra-ui/react"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
import { Card, CardBody, CardFooter,Text,Divider,ButtonGroup,Button,Image,Flex,Stack,Heading,Link } from '@chakra-ui/react'
import images from "../Images/57a805168570359.643da1114c50f.jpg"


function Home(){
    return(
        <Container maxWidth="1200px">
        <Flex>
        <Card   width="600px"  height="600px">
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
</Flex>
        </Container>
        
    )
}

export default Home