import { Button, chakra, Flex, Stack, Text } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactElement } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Card } from '../../components'
import { OTPInput } from '../../components/FormElements'
import { useAuth } from '../../context/AuthProvider'
import { otpDefaultValues, otpSchema } from './Validation'

function OTPScreen(): ReactElement {
  let { login, user } = useAuth()

  let methods = useForm({
    defaultValues: otpDefaultValues,
    resolver: zodResolver(otpSchema)
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
            Verify OTP
          </Text>
          <Text textStyle="p">
            <chakra.span>Your One Time Pin has been sent to: </chakra.span>
            <Text textStyle="p" fontWeight="bold">
              {user?.email}
            </Text>
          </Text>
        </Stack>
        <FormProvider {...methods}>
          <Stack spacing={6}>
            <OTPInput name="otp" />
            <Button
              loadingText="Submitting"
              size="lg"
              onClick={methods.handleSubmit(onSubmit)}
              variant="cta"
            >
              Submit
            </Button>
          </Stack>
        </FormProvider>
      </Card>
    </Flex>
  )
}

export default OTPScreen
