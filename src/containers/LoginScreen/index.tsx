import { Box, Button, Flex, Heading, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { RememberMe } from '../../components'
import { PasswordInput, TextInput } from '../../components/FormElements'
import { useAuth } from '../../context/AuthProvider'
import { loginDefaultValues, loginSchema } from './Validation'

function LoginScreen(): React.ReactElement {
  let { login } = useAuth()
  let navigate = useNavigate()

  let methods = useForm({
    defaultValues: loginDefaultValues,
    resolver: zodResolver(loginSchema)
  })

  function onSubmit() {
    // submit values, only log in with successful response.
    return login && login()
  }

  return (
    <Flex align="center" justify="center" flexDirection="column" flex={1}>
      <Stack spacing={8} mx="auto" width="md" paddingX={6}>
        <Stack align="center">
          <Heading fontSize="4xl">Sign in to your account</Heading>
          <Text fontSize="lg" color="gray.400">
            to enjoy all of our cool <NavLink to="about">features</NavLink>
            ✌️
          </Text>
        </Stack>
        <Box rounded="lg" bg={useColorModeValue('white', 'gray.700')} boxShadow="lg" padding={8}>
          <FormProvider {...methods}>
            <Stack spacing={4}>
              <TextInput label="Email address" name="email" type="email" />
              <PasswordInput label="Passowrd" name="password" />
              <Stack spacing={6}>
                <Stack direction="row" alignItems="center" justify="space-between">
                  <RememberMe />
                  <Link color="blue.400">Forgot password?</Link>
                </Stack>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  backgroundColor="blue.400"
                  color="white"
                  _hover={{
                    backgroundColor: 'blue.500'
                  }}
                  onClick={methods.handleSubmit(onSubmit)}
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
          </FormProvider>
        </Box>
      </Stack>
    </Flex>
  )
}

export default LoginScreen
