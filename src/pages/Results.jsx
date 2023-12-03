import { AspectRatio, Box, Card, Flex, Heading, Table, TableContainer, Tbody, Td, Tr } from '@chakra-ui/react'




function Results(){
    return(
        <>
         <Box width={"100vw"} height={"100vh"}>
            <Flex>
                <Box width={"40vw"} >
                <TableContainer width="50%" ml="100px" mt="50px">
                    <Table variant="striped">
                    <Tbody>
                        <Tr>
                            <Td>JEE-(Mains)-IIT-JEE</Td>
                        </Tr>
                        <Tr>
                            <Td>JEE-(Advance)-IIT-JEE</Td>
                        </Tr>
                        <Tr>
                            <Td>NEET-(UG)</Td>
                        </Tr>
                        <Tr>
                            <Td>CET</Td>
                        </Tr>
                    </Tbody>
                    </Table>
                </TableContainer>
                </Box>
                <Box>
                    <Heading mt={"30vh"}>
                        Results will updated after the test! 
                    </Heading>

                </Box>
            </Flex>

         </Box>

        </>
    )
    }
    export default Results