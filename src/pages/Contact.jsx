import { Box, Card, Flex, Heading, Image, Text } from "@chakra-ui/react"


function Contact(){
    return(
        <>
        <Card>
            <Heading textAlign={"left"} ml="100px" mt={"50px"}>Contact Us</Heading>
            <Card mt={"20px"}>
                <Flex justifyContent={"center"} gap={5}>
                    <Card width="250px" p={5}>
                     <Image 
                     src={"https://www.allen.ac.in/map/icon-phone.png"}
                     marginLeft={"80px"} 
                     width={"50px"}  />
 
                  <Text>Call (08:00 AM to 08:00 PM)</Text>
                     <Text>+91-9999988888,+91-8888877777 </Text>

                    </Card>
                    <Card width="250px" p={5}>
                    <Image 
                     src={"https://www.allen.ac.in/map/get-support-icon.png"}
                     marginLeft={"80px"}
                     width={"50px"}/>
                     <Text>Get Support</Text>
                     <Text>Click Here</Text>
                        
                    </Card>
                    <Card width="250px" p={5}>
                    <Image 
                     src={"https://www.allen.ac.in/map/icon-envelope.png"}
                     marginLeft={"80px"}
                     width={"50px"}/>
                    <Text>Email</Text> 
                    <Text>info@achieversavenue.in</Text>
                    </Card>
                    <Card width="250px" p={5}>
                    <Image 
                     src={"https://www.allen.ac.in/map/icon-location.png"} 
                     marginLeft={"80px"}
                     width={"50px"}/>
                     <Text>Address</Text>
                     <Text>Delhi,India</Text>
                        
                    </Card>
                </Flex>
            </Card>
        </Card>
        </>
    )
    }
    export default Contact