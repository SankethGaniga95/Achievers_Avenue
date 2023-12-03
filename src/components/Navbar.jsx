// import { Flex,Box,Image,Button} from "@chakra-ui/react"
// import logo from "../Images/Achievers_Avenue__1_-removebg-preview.png"
// // import { BrowserRouter as Router,NavLink as RouterLink } from "react-router-dom"
// import { NavLink, useNavigate } from "react-router-dom"
// import styles from "./Navbar.module.css"
// import { useContext } from "react"
// import { AuthContext } from "../Context/AuthContextProvider"

// const links=[
//   {
//     to:"/",
//     label:"About Us"
//   },
//   {
//     to:"/results",
//     label:"Results"
//   },
//   {
//     to:"/courses",
//     label:"Course"
//   },
//   {
//     to:"/lectures",
//     label:"Lectures"
//   },
//   {
//     to:"/blogs",
//     label:"Blogs"
//   },
//   {
//     to:"/contact",
//     label:"Contact Us"
//   }
// ]





// function Navbar(){
//   const navigate=useNavigate()
//   const {isAuthState,logoutUser}=useContext(AuthContext)
//   console.log(isAuthState)

//   const handleLogOut=()=>{
//    logoutUser()
//    navigate("/")
//   }
//  return(
//  <Flex alignItems="center" >
//     <Box  marginLeft="20px">
//     <Image
//     width="170px"
//     height="90px"
//     objectFit='contain'
//     src={logo}
//     alt='Dan Abramov'
  
//   />  
  
//     </Box>
    
//      <Box marginTop="0px" marginLeft="140px"   width="630px"display="flex" justifyContent="space-evenly" >
      

//       {links.map((link)=>(
//         <NavLink key={link.to} to={link.to} className={({isActive})=>{
//           return isActive?styles.active:styles.default
//         }}>{link.label}</NavLink>
//       ))}
//      </Box>
//      {isAuthState.isAuth?<Button  marginTop="0px" width='125px' bgColor="#376ed5" color="white" height="45px" marginLeft="50px" borderRadius="10px" onClick={handleLogOut} _hover={{bg: 'blue.500', }}>Logout</Button>:
//      <Button  marginTop="0px" width='125px' bgColor="#376ed5" color="white" height="45px" marginLeft="50px" borderRadius="10px" onClick={()=>navigate("/signup")} _hover={{bg: 'blue.500', }}>Sign in</Button>}
//  </Flex> 
 
//  )
// }
// export default Navbar

import { Flex, Box, Image, Button, Collapse, IconButton, VStack } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";
import styles from "./Navbar.module.css";
import logo from "../Images/Achievers_Avenue__1_-removebg-preview.png";

const links = [
  {
    to: "/",
    label: "About Us",
  },
  {
    to: "/results",
    label: "Results",
  },
  {
    to: "/courses",
    label: "Course",
  },
  {
    to: "/lectures",
    label: "Lectures",
  },
  {
    to: "/blogs",
    label: "Blogs",
  },
  {
    to: "/contact",
    label: "Contact Us",
  },
];

function Navbar() {
  const navigate = useNavigate();
  const { isAuthState, logoutUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleLogOut = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <Flex alignItems="center">
      <Box marginLeft="20px">
        <Image width="170px" height="90px" objectFit="contain" src={logo} alt="Dan Abramov" />
      </Box>

      {/* Hamburger Icon for smaller screens */}
      <IconButton
        display={{ base: "block", md: "none" }}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        onClick={handleToggle}
        variant="ghost"
        size="lg"
      />

<Box marginTop="0px" marginLeft="140px"   width="630px" justifyContent="space-evenly" display={["none","none","flex"]} >
      

            {links.map((link)=>(
              <NavLink key={link.to} to={link.to} className={({isActive})=>{
                return isActive?styles.active:styles.default
              }}>{link.label}</NavLink>
            ))}
           </Box>


      {/* Navigation Links */}
      <Collapse in={isOpen} animateOpacity>
        <VStack
          spacing={4}
          align="stretch"
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          marginLeft={{ base: "0", md: "140px" }}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? styles.active : styles.default)}
            >
              {link.label}
            </NavLink>
          ))}

{isAuthState.isAuth ? (
        <Button
          marginTop="0px"
          width="125px"
          bgColor="#376ed5"
          color="white"
          height="45px"
          marginLeft={{ base: "50px", md: "0" }}
          borderRadius="10px"
          onClick={handleLogOut}
          _hover={{ bg: "blue.500" }}
        >
          Logout
        </Button>
      ) : (
        <Button
          marginTop="0px"
          width="125px"
          bgColor="#376ed5"
          color="white"
          height="45px"
          marginLeft={{ base: "50px", md: "0" }}
          borderRadius="10px"
          onClick={() => navigate("/signup")}
          _hover={{ bg: "blue.500" }}
        >
          Sign in
        </Button>
      )}
        </VStack>
      </Collapse>

      {/* Logout or Sign In Button */}
      {isAuthState.isAuth ? (
        <Button display={["none","none"]}
          marginTop="0px"
          width="125px"
          bgColor="#376ed5"
          color="white"
          height="45px"
          marginLeft={{ base: "50px", md: "0" }}
          borderRadius="10px"
          onClick={handleLogOut}
          _hover={{ bg: "blue.500" }}
        >
          Logout
        </Button>
      ) : (
        <Button
          marginTop="0px"
          width="125px"
          bgColor="#376ed5"
          color="white"
          height="45px"
          marginLeft={{ base: "50px", md: "0" }}
          borderRadius="10px"
          onClick={() => navigate("/signup")}
          _hover={{ bg: "blue.500" }}
        >
          Sign in
        </Button>
      )}
    </Flex>
  );
}

export default Navbar;
