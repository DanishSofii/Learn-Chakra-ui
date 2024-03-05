import { Flex ,Box, Heading, Text, Button, Spacer, HStack, useToast} from "@chakra-ui/react"

function Navbar() {
    const toast = useToast();
    const showToast = ()=>{
        toast({
            title:"Logged out",
            description:"Sucessfully logged out",
            duration:5000,
            isClosable:true,
            status:"success",
            position:'top'
        }) 
    }
    return (
        <div>

            <Flex as="nav" p="10px" mb="40px" alignItems="center">
                <Heading as="h2">Dojo Tasks</Heading>
                <Spacer/>
                <HStack spacing="20px">
                    <Box bg="gray.200" p="10px">M</Box>
                    <Text>abc@gmail.com</Text>
                    <Button colorScheme="purple" onClick={showToast}>Logout</Button>
                </HStack>
            </Flex>

            {/* <Flex bg="gray.200" justify="space-between" wrap="wrap" gap="2">
                <Box w="150px" h="50px" bg="red">1</Box>
                <Box w="150px" h="50px" bg="blue">2</Box>
                <Box w="150px" h="50px" bg="orange">3</Box>
                <Box w="150px" h="50px" bg="pink">4</Box>
            </Flex> */}
        </div>
    )
}

export default Navbar
