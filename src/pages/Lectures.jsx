import { AspectRatio } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";

const getData = (url) => {
  return fetch(url).then((res) => res.json());
}

function Lectures() {
  const [data, setData] = useState([]);
  const navigate=useNavigate()

  const fetchAndUpdate = async () => {
    try {
      let fetchedData = await getData(`https://jsonserverrct101.onrender.com/lectures`);
      console.log(fetchedData);
      setData(fetchedData);
    } catch (error) {
      console.error(error);
    }
  }
  const showLectures=(selectedCourse)=>{
    console.log("click")
    navigate("/view",{state:{selectedCourse}})
  }

  useEffect(() => {
    fetchAndUpdate();
  }, []);


  const uniqueObjectsSet = new Set();

// Iterate through the array and add objects to the Set
data.forEach((subArray) => {
  subArray.forEach((obj) => {
    uniqueObjectsSet.add(JSON.stringify(obj));
  });
});

// Convert Set back to an array of unique objects
const uniqueObjectsArray = Array.from(uniqueObjectsSet, JSON.parse);

console.log(uniqueObjectsArray);

  return (
    <div style={{ width: "100vw",paddingLeft:"50px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"100px" }}>
      {uniqueObjectsArray.map((course, index) => (
        <div key={index} style={{}}>
          {/* {innerArray.map((course) => ( */}
            <Card
              
              variant='outline' key={course.id}>
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                marginLeft={"80px"}
                src={course.image}
                alt={course.name}
              />
              <Text>
                {course.name}
              </Text>
              <Text>
                {course.entrance}
              </Text>
              <Text>
                {`${course.time} hours`}
              </Text>
              <Button onClick={()=>showLectures(course)}>
                View Lectures
              </Button>
            </Card>
          {/* ))} */}
        </div>
      ))}
    </div>
  );
}

export default Lectures;
