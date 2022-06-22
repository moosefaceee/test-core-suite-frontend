import {
  Box,
  BoxProps,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  HStack,
  PinInput,
  PinInputField
} from '@chakra-ui/react'
import * as React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

type OTPInputProps = BoxProps & {
  name: string
  renderLabel?: () => React.ReactNode
  isDisabled?: boolean
  isRequired?: boolean
  helperText?: string
  customMarginLeft?: string
}

const totalDigits = Array.from(Array(6).keys())

function OTPInput({ name, isDisabled, isRequired, helperText, ...rest }: OTPInputProps) {
  const { control } = useFormContext()

  return (
    <Box {...rest}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { isDirty, error } }) => {
          // show error when field is edited and there is an error message
          const showError = isDirty && !!error?.message
          return (
            <FormControl
              isInvalid={showError}
              isDisabled={isDisabled}
              id={name}
              isRequired={isRequired}
            >
              <HStack>
                <PinInput
                  value={value}
                  onChange={onChange}
                  autoFocus={true}
                  focusBorderColor="brand.500"
                  errorBorderColor="red"
                >
                  {totalDigits.map((key) => (
                    <PinInputField key={key} />
                  ))}
                </PinInput>
              </HStack>
              {helperText && <FormHelperText>{helperText}</FormHelperText>}
              <FormErrorMessage>{error?.message}</FormErrorMessage>
            </FormControl>
          )
        }}
      />
    </Box>
  )
}

export default OTPInput
