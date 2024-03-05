import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { Form } from "react-router-dom";

export default function Create() {
  return (
    <Box maxw="480px">
      <Form>
        <FormControl isRequired   mb="40px">    
          <FormLabel >Task Name:</FormLabel>
          <Input type="text" name="title"/>
          <FormHelperText>Enter a descriptive task name </FormHelperText>
        </FormControl>

        <FormControl isRequired mb="40px">
          <FormLabel>Task Description:</FormLabel>
          <Textarea
          placeholder="Enter a detailed description of the task..."
          name="description"
          />
        </FormControl>

        <FormControl display="flex" alignItems="center" mb="40px">
          <Checkbox name="isPriority" size="lg"/>
          <FormLabel mb="0" ml="10px">Make this a priority task</FormLabel>
        </FormControl>
        <Button type="submit">Submit</Button>
      </Form>


    </Box>
  )
}
