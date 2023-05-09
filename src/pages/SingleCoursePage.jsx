import { useParams } from "react-router-dom"
import {useState,useEffect} from "react"
import { Card, CardBody, CardFooter,Button,Box,Image,GridItem,Divider,ButtonGroup,Container,Stack,Heading,Text,Grid } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"
import axios from "axios"
const getData=(url)=>{
  
    return fetch(url).then((res)=>res.json())
}
function SingleCoursePage(){
const navigate=useNavigate() 
const {id}=useParams()
const [data,setData]=useState({})

const fetchAndUpdata=async(id)=>{
    try{
    let data =await getData(`http://localhost:8080/courses/${id}`)
    setData(data)
    }
    catch(err){
        console.log(err)
    }
}

useEffect(()=>{
    fetchAndUpdata(id)
},[id])

const postlectures=(data)=>{
  return axios ({
      baseURL:`http://localhost:8080`,
      url:"/carts",
      method:"post",
      data:data,
  })  
  }
const handlePost=()=>{
 postlectures(data).then((res)=>console.log(res))
 navigate("/cart")

}


    return(
        <>
        <Container maxWidth="1200px">
        <Grid
  h='850px'
  templateRows='repeat(4, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
 
>
<GridItem colSpan={3}>
       <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='contain'
    maxW={{ base: '100%', sm: '200px' }}
    src={data.image}
    alt='Caffe Latte'
  />

  <Stack >
    <CardBody>
      <Heading size='md'>{data.title}</Heading>
      <Text py='2'>
       Course : {data.entrance}
      </Text>
      <Text py='2'>
        Program : {data.name}
      </Text>
      <Text py='2'>
        Duration : {data.time} of Live + Recorded Lectures
      </Text>
    </CardBody>

    <CardFooter>
    <Box display={'flex'}>
      <Text color='blue.600' fontSize='2xl'>
      Rating : {data.rating} 
      </Text>
      <img src="https://media.istockphoto.com/id/1069729858/vector/five-point-star-rating-icon.jpg?s=612x612&w=0&k=20&c=qjMq2RrfahWPP2EqPlUnq4BIB1vJrpviq0a5WgPJMa8=" alt="" width="40px" />
      

      </Box>
      
    </CardFooter>
  </Stack>

</Card>
</GridItem>
<GridItem rowSpan={3} colSpan={2} >
<Card maxW='sm'>
  <CardBody>
    <Image
      src={data.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{data.name}</Heading>
      <Text noOfLines={5}>
       {data.details}
      </Text>
      <Text color='blue.600' fontSize='2xl' fontWeight='bold'>
      ₹{data.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' >
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue' onClick={handlePost}>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</GridItem>
<GridItem colSpan={3}>
<Card>
  <CardBody>
    <Heading>What you'll learn:</Heading>
    <Text>{data.details}</Text>
  </CardBody>
</Card>
</GridItem>
</Grid>
</Container>

        </>
    )
}

export default SingleCoursePage