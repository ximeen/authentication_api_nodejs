import z from 'zod'

export const UserSchema = z.object({
  name: z.string(),
  username: z.string(),
  password: z.string(),
})

export type userTypes = z.infer<typeof UserSchema>
