import { Flex,Box,Image,Link,Button} from "@chakra-ui/react"
import logo from "../Images/Achievers_Avenue__1_-removebg-preview.png"
import { BrowserRouter as Router,NavLink as RouterLink } from "react-router-dom"

function Navbar(){
 return(
 <Flex alignItems="center" >
    <Box marginTop="50px" marginLeft="20px" >
    <Image
    width="170px"
    height="90px"
    objectFit='contain'
    src={logo}
    alt='Dan Abramov'
  />  
  
    </Box>
    
     <Box marginTop="50px"   width="800px" >
        <Router>
      <Link as={RouterLink} to="/" marginLeft='200' _hover='none'  fontWeight='semibold' _activeLink={{fontWeight:"bold"}}>About Us</Link>
      
      <Link as={RouterLink} to="/results" marginLeft='10' _hover='none'  fontWeight='semibold' _activeLink={{fontWeight:"bold"}}>Results</Link>

      <Link as={RouterLink} to="/course" marginLeft='10' _hover='none'  fontWeight='semibold' _activeLink={{fontWeight:"bold"}}>Course</Link>

      <Link as={RouterLink} to="/lectures" marginLeft='10' _hover='none'  fontWeight='semibold' _activeLink={{fontWeight:"bold"}}>Lectures</Link>

      <Link as={RouterLink} to="/blogs" marginLeft='10' _hover='none'  fontWeight='semibold' _activeLink={{fontWeight:"bold"}}>Blogs</Link>

      <Link as={RouterLink} to="/contactus" marginLeft='10' _hover='none'  fontWeight='semibold' _activeLink={{fontWeight:"bold"}}>Contact Us</Link>

      </Router>
     </Box>
     <Button  marginTop="50px" width='125px' bgColor="#376ed5" color="white" height="45px" marginLeft="20px">Sign in</Button>
 </Flex> 
 
 )
}
export default Navbar