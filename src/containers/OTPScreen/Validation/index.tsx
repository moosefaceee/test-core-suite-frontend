import { z } from 'zod'

export const otpDefaultValues = {
  otp: ''
}

export type OTPFormValues = typeof otpDefaultValues

export const otpSchema = z.object({
  otp: z.string()
})
