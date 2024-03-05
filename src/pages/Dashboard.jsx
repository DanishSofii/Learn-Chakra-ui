import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Divider, Flex, HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import tasks from "../data/data"
import { EditIcon, ViewIcon } from "@chakra-ui/icons";
export default function Dashboard() {

  return (
    <div>
      <SimpleGrid  spacing={10} minChildWidth="300px">
        {
          tasks && tasks.map((item)=>(
            <Card key={item.id} borderTop="4px" borderColor="purple.400" bg="white">
              <CardHeader>
                  <Flex>
                    <Avatar src={item.img} mr="20px"/>
                    <Box>
                      <Heading as="h3" size="sm">{item.title}</Heading>
                      <Text>by {item.author}</Text>
                    </Box>
                  </Flex>
              </CardHeader>
              <CardBody color="gray.500">
                  <Text >{item.description} </Text>
              </CardBody>
              <Divider borderColor="gray.200"/>
              <CardFooter>
                  <HStack>
                    <Button variant="ghost" leftIcon={<ViewIcon/>}>Watch</Button>
                    <Button variant="ghost" leftIcon={<EditIcon/>}>Comment</Button>
                  </HStack>
              </CardFooter>
            </Card>
          ))
        }
      </SimpleGrid>
    </div>
  )
}
