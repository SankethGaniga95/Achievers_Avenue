import CourseCard from "../components/CourseCard"
import { Container, Heading,Text,Box,Button, Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { SimpleGrid } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const getData=()=>{
    return fetch(`http://localhost:8080/courses`).then((res)=>res.json())
}



function Courses(){
   const [data,setData]=useState([])
   const navigate=useNavigate()


   const fetchAndUpdate=async()=>{
    try{
     let data = await getData()
     setData(data)
    }
    catch(err){
        console.log(err)
    }
   }
 useEffect(()=>{
    fetchAndUpdate()
 },[])
 
    return(
        <>
        <Container maxWidth="1200px">
         <Box >
        <Card>
        <CardHeader>
         <Heading>For offline classes:</Heading>
        </CardHeader>
        <CardBody>
         <Text>You can visit our Nearest Centre!</Text>
        </CardBody>
        <CardFooter>
         <Button variant='solid' colorScheme='blue' padding="20px" onClick={()=>navigate("/contact")}>Know More</Button>
        </CardFooter>

        </Card>
         </Box>
         <Heading>Online Course</Heading>
         <SimpleGrid columns={[1, 2, 3]} spacing='40px'>
        {data.map((item,idx)=><CourseCard key={idx+1} {...item}/>)}
         </SimpleGrid>
        </Container>   
        </>
    )
    }
    export default Courses