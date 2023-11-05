import { Flex,Box,Image,Button} from "@chakra-ui/react"
import logo from "../Images/Achievers_Avenue__1_-removebg-preview.png"
// import { BrowserRouter as Router,NavLink as RouterLink } from "react-router-dom"
import { NavLink, useNavigate } from "react-router-dom"
import styles from "./Navbar.module.css"

const links=[
  {
    to:"/",
    label:"About Us"
  },
  {
    to:"/results",
    label:"Results"
  },
  {
    to:"/courses",
    label:"Course"
  },
  {
    to:"/lectures",
    label:"Lectures"
  },
  {
    to:"/blogs",
    label:"Blogs"
  },
  {
    to:"/contact",
    label:"Contact Us"
  }
]





function Navbar(){
  const navigate=useNavigate()
 return(
 <Flex alignItems="center" >
    <Box  marginLeft="20px">
    <Image
    width="170px"
    height="90px"
    objectFit='contain'
    src={logo}
    alt='Dan Abramov'
  />  
  
    </Box>
    
     <Box marginTop="0px" marginLeft="140px"   width="630px"display="flex" justifyContent="space-evenly" >
        {/* <Router>
      <Link as={RouterLink} to="/" marginLeft='200' _hover='none'  fontWeight='semibold' _activeLink={{fontWeight:"bold"}}>About Us</Link>
      
      <Link as={RouterLink} to="/results" marginLeft='10' _hover='none'  fontWeight='semibold' _activeLink={{fontWeight:"bold"}}>Results</Link>

      <Link as={RouterLink} to="/course" marginLeft='10' _hover='none'  fontWeight='semibold' _activeLink={{fontWeight:"bold"}}>Course</Link>

      <Link as={RouterLink} to="/lectures" marginLeft='10' _hover='none'  fontWeight='semibold' _activeLink={{fontWeight:"bold"}}>Lectures</Link>

      <Link as={RouterLink} to="/blogs" marginLeft='10' _hover='none'  fontWeight='semibold' _activeLink={{fontWeight:"bold"}}>Blogs</Link>

      <Link as={RouterLink} to="/contactus" marginLeft='10' _hover='none'  fontWeight='semibold' _activeLink={{fontWeight:"bold"}}>Contact Us</Link>

      </Router> */}

      {links.map((link)=>(
        <NavLink key={link.to} to={link.to} className={({isActive})=>{
          return isActive?styles.active:styles.default
        }}>{link.label}</NavLink>
      ))}
     </Box>
     <Button  marginTop="0px" width='125px' bgColor="#376ed5" color="white" height="45px" marginLeft="50px" borderRadius="10px" onClick={()=>navigate("/signup")} _hover={{bg: 'blue.500', }}>Sign in</Button>
 </Flex> 
 
 )
}
export default Navbar