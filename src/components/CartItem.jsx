import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Button,Box } from '@chakra-ui/react'



export default function CartItem({id,title,entrance,name,rating,price,image,time,handleDelete}){







    return(
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  height={'150px'}
  marginTop={'20px'}
  marginBottom={'20px'}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={image}
    alt='Caffe Latte'
    height={'150px'}
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{name}</Heading>

      <Text py='2'>
        Duration:{time}
      </Text>
      <Box display={'flex'}>
      <Text color='blue.600' fontSize='md'>
      Rating : {rating} 
      </Text>
      <img src="https://media.istockphoto.com/id/1069729858/vector/five-point-star-rating-icon.jpg?s=612x612&w=0&k=20&c=qjMq2RrfahWPP2EqPlUnq4BIB1vJrpviq0a5WgPJMa8=" alt="" width="20px" />
      

      </Box>
    </CardBody>

    <CardFooter>
      <Button variant='ghost' colorScheme='blue' marginTop={'-50px'} onClick={()=>handleDelete(id)}>
        Remove
      </Button>
    </CardFooter>
  </Stack>
</Card>

    )
}