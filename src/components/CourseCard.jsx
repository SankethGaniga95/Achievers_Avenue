import { Card, CardBody, CardFooter,Image,Stack,Heading,Text,Button,Divider,ButtonGroup,Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'



function CourseCard({id,title,entrance,image,price,rating}){
  const navigate=useNavigate()
    return(
        <>
        
        <Card maxW='sm'>
  <CardBody>
    <Image
      src={image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      objectFit="contain"
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{title}</Heading>
      <Text>
    Course:{entrance}
      </Text>
      <Box display={'flex'}>
      <Text color='blue.600' fontSize='2xl'>
      Rating:{rating} 
      </Text>
      <img src="https://media.istockphoto.com/id/1069729858/vector/five-point-star-rating-icon.jpg?s=612x612&w=0&k=20&c=qjMq2RrfahWPP2EqPlUnq4BIB1vJrpviq0a5WgPJMa8=" alt="" width="40px" />
      

      </Box>
      
      <Text color='blue.600' fontSize='2xl' fontWeight='bold'>
      ₹{price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onClick={()=>navigate(`/courses/${id}`)}>
      Know More
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
        </>
    )
}


export default CourseCard