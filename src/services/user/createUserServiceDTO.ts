import z from 'zod'

export const UserRegisterSchema = z.object({
  name: z.string(),
  username: z.string(),
  password: z.string(),
})

export type userTypes = z.infer<typeof UserRegisterSchema>
