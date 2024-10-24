import z from 'zod'

export const AuthenticateUserSchema = z.object({
  username: z.string(),
  password: z.string(),
})

export type authenticateUserTypes = z.infer<typeof AuthenticateUserSchema>
