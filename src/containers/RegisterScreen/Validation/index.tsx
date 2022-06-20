import { z } from 'zod'

export const registerDefaultValues = {
  email: '',
  password: ''
}

export type RegisterFormValues = typeof registerDefaultValues

export const registerSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  // a bit simpler than Yup?:
  //  termsAndConditions: Yup.boolean()
  // .required('The terms and conditions must be accepted.')
  // .oneOf([true], 'The terms and conditions must be accepted.')
  termsAndConditions: z.literal(true) // enforce true
})
