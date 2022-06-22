import { Button, Flex, Link, Stack, Text } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Card, TermsAndConditions } from '../../components'
import { PasswordInput, TextInput } from '../../components/FormElements'
import { useAuth } from '../../context/AuthProvider'
import { registerDefaultValues, registerSchema } from './Validation'

function RegisterScreen(): React.ReactElement {
  let { login } = useAuth()

  let [showPassword, setShowPassword] = useState(false)
  let navigate = useNavigate()

  let methods = useForm({
    defaultValues: registerDefaultValues,
    resolver: zodResolver(registerSchema)
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
            Sign up
          </Text>
          <Text textStyle="p" color="gray.400" textAlign="left">
            Create your AutoPV account and define your subscription details.
          </Text>
        </Stack>
        <FormProvider {...methods}>
          <Stack spacing={2}>
            <TextInput label="Email address" name="email" type="email" />
            <PasswordInput label="Passowrd" name="password" />
            <Stack spacing={6}>
              <TermsAndConditions />
              <Button
                loadingText="Submitting"
                size="lg"
                onClick={methods.handleSubmit(onSubmit)}
                variant="cta"
              >
                Sign up
              </Button>
            </Stack>
            <Stack paddingTop={4}>
              <Text alignItems="center">
                Already a user? <Link onClick={() => navigate('/')}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </FormProvider>
      </Card>
    </Flex>
  )
}

export default RegisterScreen
