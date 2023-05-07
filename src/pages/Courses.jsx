import CourseCard from "../components/CourseCard"
import { Container, Heading,Text,Box,Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"

const getData=()=>{
    return fetch(`http://localhost:8080/courses`).then((res)=>res.json())
}



function Courses(){
   const [data,setData]=useState([])


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
         <Heading>For offline classes:</Heading>
         <Text>You can visit our Closest Centres</Text>
         <Button variant='solid' colorScheme='blue' padding="20px">Know More</Button>
         </Box>
         <Heading>Online Course</Heading>
        {data.map((item,idx)=><CourseCard key={idx+1} {...item}/>)}
        </Container>   
        </>
    )
    }
    export default Courses