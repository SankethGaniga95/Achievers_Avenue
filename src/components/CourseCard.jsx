import { Card, CardBody, CardFooter,Image,Stack,Heading,Text,Button } from '@chakra-ui/react'



function CourseCard({title,entrance}){
    return(
        <>
              <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
 marginTop="15px"
 marginBottom="10px">
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{title}</Heading>

      <Text py='2'>
      Course: {entrance}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Explore
      </Button>
    </CardFooter>
  </Stack>
</Card>
        </>
    )
}


export default CourseCard