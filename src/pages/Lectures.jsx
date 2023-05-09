import { AspectRatio } from "@chakra-ui/react"
import { useState,useEffect } from "react"
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Button} from '@chakra-ui/react'


const getData=(url)=>{
    return fetch(url).then((res)=>res.json())
}


function Lectures(){

    const [data,setData]=useState([])

    const fetchAndUpdata=async()=>{
        try{
        let data =await getData(`http://localhost:8080/courses/`)
        setData(data)
        }
        catch(err){
            console.log(err)
        }
    }
    
    useEffect(()=>{
        fetchAndUpdata()
    },[])




    return(
        <>
   <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={data.image}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{data.name}</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>
        </>
    )
    }
    export default Lectures