import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

// src/index.ts

// the implementation
// export function add(...args: number[]) {
//   return args.reduce((a, b) => a + b, 0)
// }

// https://vitest.dev/guide/in-source.html
// in-source test suites
// if (import.meta.vitest) {
//   const { it, expect } = import.meta.vitest
//   it('add', () => {
//     expect(add()).toBe(0)
//     expect(add(1)).toBe(1)
//     expect(add(1, 2, 3)).toBe(6)
//   })
// }

function LoginScreen(): React.ReactElement {
  let navigate = useNavigate()

  return (
    <Flex align="center" justify="center" flexDirection="column" flex={1}>
      <Stack spacing={8} mx="auto" width="md" paddingX={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Sign in to your account</Heading>
          <Text fontSize="lg" color="gray.400">
            to enjoy all of our cool <Link color="blue.400">features</Link> ✌️
          </Text>
        </Stack>
        <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" padding={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack direction="row" alignItems="center" justify="space-between">
                <Checkbox>Remember me</Checkbox>
                <Link color="blue.400">Forgot password?</Link>
              </Stack>
              <Button
                loadingText="Submitting"
                size="lg"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: 'blue.500'
                }}
              >
                Sign in
              </Button>
            </Stack>
            <Stack paddingTop={4}>
              <Text alignItems="center">
                Don't have an account?{' '}
                <Link onClick={() => navigate('/register')} color="blue.400">
                  Signup
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default LoginScreen
