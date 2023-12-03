import CourseCard from "../components/CourseCard"
import { Container, Heading,Text,Box,Button, Card, CardHeader, CardBody, CardFooter, Spinner, Spacer, Flex, Center, Input, Select, Checkbox } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { SimpleGrid } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const getData=()=>{
    return fetch(`https://jsonserverrct101.onrender.com/courses`).then((res)=>res.json())
}



function Courses(){
   const [data,setData]=useState([])
   const navigate=useNavigate()
   const [search,setSearch]=useState("")
   const [order,setOrder]=useState("")
   const [rating,setRating]=useState("")
   const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);


   const fetchAndUpdate=async()=>{
    try{
     let data = await getData()
     setData(data)
    }
    catch(err){
        console.log(err)
    }
   }
   const handleSearch=()=>{
    fetch(`https://jsonserverrct101.onrender.com/courses?q=${search}`)
    .then(res=>res.json())
    .then(ans=>setData(ans))
    .catch(err=>{
        console.log(err)
    })
   }
   const handleOrder=()=>{
    
    fetch(`https://jsonserverrct101.onrender.com/courses?_sort=price&_order=${order}`)
    .then(res=>res.json())
    .then(ans=>setData(ans))
    .catch(err=>{
        console.log(err)
    })
   }
   const handleRating=()=>{
    
    fetch(`https://jsonserverrct101.onrender.com/courses?_sort=rating&_order=${rating}`)
    .then(res=>res.json())
    .then(ans=>setData(ans))
    .catch(err=>{
        console.log(err)
    })
   }

  

   // Function to handle checkbox changes
   const handleCheckboxChange = (value) => {
     // If the checkbox is checked, add it to the selectedCheckboxes array
     // If the checkbox is unchecked, remove it from the array
     setSelectedCheckboxes((prevCheckboxes) =>
       prevCheckboxes.includes(value)
         ? prevCheckboxes.filter((checkbox) => checkbox !== value)
         : [...prevCheckboxes, value]
     );
     
   };
  console.log(selectedCheckboxes)
   const filterData = async () => {
    try {
        const filterParams = selectedCheckboxes.map((checkbox) => `entrance=${checkbox}`).join('&');
      console.log(filterParams)
      const response = await fetch(`https://jsonserverrct101.onrender.com/courses?${filterParams}`);
      const data = await response.json();
     setData(data)
      // Handle the fetched data as needed
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
 useEffect(()=>{
    fetchAndUpdate()
 },[])

 useEffect(()=>{
    filterData()
 },[selectedCheckboxes])
 
    return(
        <>
        <Container maxWidth="1200px">
        <Flex>
        <Box width="20%">
         <Card>
            <Flex>
            <Input type="text" name="" id="" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <Button onClick={handleSearch}>Search</Button>
            </Flex>
         </Card>
         <Card mt="15px">
            <Text>Sort By Price</Text>
            <Select variant={"filled"} value={order} onChange={(e)=>{
                setOrder(e.target.value)
                handleOrder()}}>
                <option value="">Sort By Price</option>
                <option value="desc">Sort By Price(Low to High)</option>
                <option value="asc">Sort By Price(High to Low)</option>
            </Select>
         </Card>
         <Card mt="15px">
            <Text>Sort</Text>
            <Select variant={"filled"} value={rating} onChange={(e)=>{
                setRating(e.target.value)
                handleRating()}}>
                <option value="">Sort By Rating</option>
                <option value="desc">Sort By Rating(Low to High)</option>
                <option value="asc">Sort By Rating(High to Low)</option>
            </Select>
         </Card>

         <Card mt="15px">
            <Text>Filter</Text>
            <Checkbox isChecked={selectedCheckboxes.includes('NEET')} onChange={() => handleCheckboxChange('NEET')}>
              NEET
                </Checkbox>
            <Checkbox isChecked={selectedCheckboxes.includes('CET')} onChange={() => handleCheckboxChange('CET')}>
               CET
            </Checkbox>
         </Card>
        

        </Box>

        <Box ml="10px" width="80%">

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
        {data.length>0?data.map((item,idx)=><CourseCard key={idx+1} {...item}/>):<Box h="300px" w="90vw"  display='flex' justifyContent='center' alignItems='center'><Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/></Box>}
         </SimpleGrid>
        </Box>
        </Flex>
        </Container>   
        </>
    )
    }
    export default Courses