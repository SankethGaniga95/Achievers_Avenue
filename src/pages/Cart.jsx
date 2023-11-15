import { Container, Heading,Text,Flex,ButtonGroup,Button,Card,CardBody,Stack } from "@chakra-ui/react"
import {useState,useEffect, useContext} from "react"
import CartItem from "../components/CartItem"
import axios from "axios"
// import AlertDialogExample from "../components/Alert"
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    
  } from '@chakra-ui/react'
  import React from "react"
  import { useDisclosure } from "@chakra-ui/react"
import { AuthContext } from "../Context/AuthContextProvider"
import { useNavigate } from "react-router-dom"
 



const getData=(url)=>{
    return fetch(url).then((res)=>res.json())
}



function Cart(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    const [data,setData]=useState({})
    const {getTotal}=useContext(AuthContext)
    const navigate=useNavigate()



    




    const fetchAndUpdata=async()=>{
        try{
        let data =await getData(`https://jsonserverrct101.onrender.com/carts`)
        setData(data)
        }
        catch(err){
            console.log(err)
        }
    }
    
    useEffect(()=>{
        fetchAndUpdata()
    },[])


    let total=0
    for(let i=0;i<data.length;i++){
    total+=+data[i].price
    }
   

    const deleteCartItems=(id)=>{
        return axios({
               method:"delete",
               url:`https://jsonserverrct101.onrender.com/carts/${id}`
           })
           
           }


    const handleDelete=(id)=>{
    deleteCartItems(id).then(()=>fetchAndUpdata())
    
   
    }

    const handlePayment=()=>{
      
      getTotal(total)
      navigate("/payment")
    }

    console.log(getTotal)

   
   
 
    return(
    <>
    <Container maxWidth={'1200px'}>
        <Flex>
    <Container maxWidth={'1200px'}>

    {data.length>0 && data.map((data,idx)=><CartItem key={idx} {...data} handleDelete={handleDelete}
    />
)}   
    </Container>
    <Card >
  <CardBody>
    
    <Stack mt='6' spacing='3' >
      <Heading size='md'>Total:</Heading>
      <Text noOfLines={5}>
       {data.details}
      </Text>
      <Text color='blue.600' fontSize='2xl' fontWeight='bold'>
      ₹{total}
      </Text>
    </Stack>
    <ButtonGroup >
      <Button variant='solid' colorScheme='blue'width="150px" marginLeft="-20px" onClick={onOpen} >
       Checkout
      </Button>
      
    </ButtonGroup>
  </CardBody>
 
 
</Card>
    </Flex>
    </Container>
  
{/* ---------------------------------------------------------- */}
    <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Make Payment
              </AlertDialogHeader>
  
              <AlertDialogBody>
               Do you want to make payment?
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme='blue' onClick={handlePayment} ml={3}>
                  Pay
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
    

    </>
    )
}

export default Cart