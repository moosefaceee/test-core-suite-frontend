import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function RegisterScreen(): React.ReactElement {
  let [showPassword, setShowPassword] = useState(false)
  let navigate = useNavigate()

  return (
    <Flex align="center" justify="center" flexDirection="column" flex={1}>
      <Stack spacing={8} marginX="auto" width="md" paddingX={6}>
        <Stack align="center">
          <Heading fontSize="4xl" textAlign="center">
            Sign up
          </Heading>
          <Text fontSize="lg" color="gray.400">
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" padding={8}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement height="full">
                  <Button
                    variant="ghost"
                    onClick={() => setShowPassword((showPassword) => !showPassword)}
                  >
                    {showPassword ? <Icon as={FiEye} /> : <Icon as={FiEyeOff} />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack direction="row" alignItems="center" justify="space-between">
              <Checkbox>Remember me</Checkbox>
              <Link color="blue.400">Forgot password?</Link>
            </Stack>
            <Stack spacing={6} paddingTop={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: 'blue.500'
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack paddingTop={4}>
              <Text alignItems="center">
                Already a user?{' '}
                <Link color="blue.400" onClick={() => navigate('/')}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default RegisterScreen
