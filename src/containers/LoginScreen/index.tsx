import { Button, Flex, Link, Stack, Text } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Card, RememberMe } from '../../components'
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
      <Card padding={4} width="sm">
        <Stack align="flex-start" marginBottom={4}>
          <Text textStyle="h4" fontWeight="semibold">
            Log in
          </Text>
          <Text textStyle="p" color="gray.400" textAlign="left">
            Please provide your details so you can begin your AutoPV journey.
          </Text>
        </Stack>
        <FormProvider {...methods}>
          <Stack spacing={2}>
            <TextInput label="Email address" name="email" type="email" />
            <PasswordInput label="Passowrd" name="password" />
            <Stack spacing={6}>
              <Stack direction="row" alignItems="center" justify="space-between">
                <RememberMe />
                <Link>Forgot password?</Link>
              </Stack>
              <Button
                loadingText="Submitting"
                size="lg"
                onClick={methods.handleSubmit(onSubmit)}
                variant="cta"
              >
                Sign in
              </Button>
            </Stack>
            <Stack paddingTop={4}>
              <Text>
                Don't have an account?{' '}
                <Link onClick={() => navigate('/register')}>Sign up now</Link>
              </Text>
            </Stack>
          </Stack>
        </FormProvider>
      </Card>
    </Flex>
  )
}

export default LoginScreen
