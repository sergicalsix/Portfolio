// ContactForm.js

import { useState } from "react";
import { Box, FormControl, FormLabel, Input, Textarea, Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure } from "@chakra-ui/react";
import axios from "axios";

const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = event.target;

    try {
      await axios.post("/contact", {
        name: name.value,
        email: email.value,
        message: message.value,
      });

      setIsSubmitting(false);
      onOpen();
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      // エラーメッセージを表示するなど、エラーハンドリングを行う
    }
  };

  return (
    <Box py={16} px={8} bg="white" textAlign="center">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" mb={4} required />
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" mb={4} required />
          <FormLabel>Message</FormLabel>
          <Textarea name="message" mb={4} required />
          <Button colorScheme="blue" type="submit" isLoading={isSubmitting}>
            Send Message
          </Button>
        </FormControl>
      </form>

      <AlertDialog isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader>Message Sent</AlertDialogHeader>
          <AlertDialogBody>Your message has been successfully sent.</AlertDialogBody>
          <AlertDialogFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Box>
  );
};

export default Contact;
