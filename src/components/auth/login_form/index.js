import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import UserService from '../../../services/users';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UserService.login({ email, password });
      navigate('/notes');
    } catch (error) {
      setError(true);
    }
  };

  return (
    <Box maxW='400px' mx='auto' p='4' boxShadow='md' borderRadius='md'>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align='stretch'>
          <FormControl id='email' isRequired>
            <FormLabel>Email:</FormLabel>
            <Input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>

          <FormControl id='password' isRequired>
            <FormLabel>Password:</FormLabel>
            <Input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <VStack spacing={2} align='stretch'>
            <Button colorScheme='purple' type='submit'>
              Login
            </Button>
            <Link
              color='purple.500'
              onClick={() => navigate('/register')}
              textAlign='center'
              role='button'
            >
              Register or
            </Link>
          </VStack>
        </VStack>
      </form>

      {error && (
        <Text mt={4} color='red.500' fontSize='sm' textAlign='center'>
          Email or Password invalid
        </Text>
      )}
    </Box>
  );
}

export default LoginForm;
