 import { Box, VStack,Text,Flex,Container } from "@chakra-ui/react"  
 import { SocialIcon } from 'react-social-icons'
   

function Footer(){
 return (
    <>
   <Box  height={["auto","auto","570px"]} bgColor="#5f8bdd" marginTop={"15px"}>
      <Flex direction={{base:"column",md:"row",sm:"column",lg:"row"}}>
      <VStack>
         <Box  marginTop="70px" marginLeft={["30px","100px","120px"]} textAlign={"left"}>
         <Container maxW="350px" color="white">
         <Text fontSize="33px" >Achiever's Avenue</Text>
          <Text lineHeight="35px" fontSize="19px" marginTop="20px"  >Educational Services Limited Registered office Address: No. 111, 8th Cross,Paramount Gardens, Thalaghattapura Kanakapura Main Road,Bengaluru-560062 Mobile phone:+91-9380462121 Email:Designersunil23@gmail.com</Text>
         <Text fontSize="25px" marginTop="40px" >FOLLOW US ON</Text>
         <Flex>
         <Box  width="45px" height="45px" borderRadius="50%" bg="white" border="none" marginTop="10px">
         <SocialIcon url="https://www.facebook.com/" bgColor="#376ed5" style={{height:"28px",width:"45px" ,marginTop:"10px"}} />
         </Box>
         
         <Box  width="45px" height="45px" borderRadius="50%" bg="white" border="none" marginTop="10px" marginLeft="10px">
         <SocialIcon url="https://www.youtube.com/" bgColor="#376ed5" style={{height:"28px",width:"45px" ,marginTop:"10px" }} />
         </Box>
         </Flex>
      
      
          </Container>
         </Box>
        
      </VStack>
    <VStack>
    <Box  marginTop='130px' color="white" marginLeft={["-40px","100px","110px"]} lineHeight="40px" textAlign={"left"}>
    <Text fontSize="23px"  >ABOUT US</Text>
    <Text fontSize="18px">About</Text>
    <Text fontSize="18px">Why</Text>
    <Text fontSize="18px">Methodology & Concept</Text>
    <Text fontSize="18px">In Media</Text>
    <Text fontSize="18px">Nationwide Centers</Text>
    <Text fontSize="18px">Franchise Information</Text>
    <Text fontSize="18px">Investor Corner</Text>


    </Box>
    </VStack>
    <VStack>
    <Box  marginTop='130px' color="white" marginLeft={["0px","100px","120px"]} lineHeight="40px" textAlign={"left"}>
    <Text fontSize="23px">NEET</Text>
    <Text fontSize="18px">NEET Exam 2023</Text>
    <Text fontSize="18px">NEET 2023 Exam Dates</Text>
    <Text fontSize="18px">NEET Previous Year Question Paper</Text>
    <Text fontSize="18px">NEET 2023 Admit Card</Text>
    <Text fontSize="18px">NEET 2023 Result</Text>
    <Text fontSize="18px">NEET 2023 Cut Off</Text>
    </Box>
      </VStack>
    </Flex>

   </Box>
    </>
 )
}

export default Footer