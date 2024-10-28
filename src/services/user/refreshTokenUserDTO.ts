import z from 'zod'

export const RefreshTokenShema = z.object({
  refreshToken: z.string(),
})

export type typeRefreshToken = z.infer<typeof RefreshTokenShema>
