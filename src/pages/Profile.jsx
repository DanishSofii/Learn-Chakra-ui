import { ChatIcon, EmailIcon, StarIcon,CheckCircleIcon,WarningIcon } from "@chakra-ui/icons"
import { Tab, TabList, TabPanels, Tabs,TabPanel, List, ListItem, ListIcon } from "@chakra-ui/react"

function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
       
          <Tab _selected={{bg:"purple.400", color:"white"}}>Account Info</Tab>
          <Tab _selected={{bg:"purple.400", color:"white"}}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon}/>
              abc@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon}/>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, repellat!
            </ListItem>
            <ListItem >
              <ListIcon as ={StarIcon}/>
              Lorem ipsum dolor sit amet consectetur.
              </ListItem>
          </List>

        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export default Profile
