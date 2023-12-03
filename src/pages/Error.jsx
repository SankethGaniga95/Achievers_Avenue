import { Card, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Error = () => {
    const navigate=useNavigate()
  return (
    <Card width={"100vw"} height={"80vh"} textAlign={"center"}>
    <Heading  mt={"25vh"}> Error 404</Heading>
    <Text >Page Not Found!</Text>
    <Text >We're sorry, the page you requested could not be found</Text>
    <Button width="200px" ml={"43vw"} mt={"10px"} color={"white"} backgroundColor={"#376ed5"} onClick={()=>navigate("/")} >Go Back to Homepage</Button>
    </Card>
  )
}
