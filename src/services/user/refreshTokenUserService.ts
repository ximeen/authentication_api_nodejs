import { GenerateTokenProvider } from '../../provider/generateTokenProvider'
import { prisma } from '../../utils/prisma'

export class RefreshTokenUserService {
  async execute(newRefreshToken: string) {
    const currentRefreshToken = await prisma.refreshToken.findFirst({
      where: {
        id: newRefreshToken,
      },
    })
    if (!currentRefreshToken) {
      throw new Error('Refresh token invalid!')
    }

    const generateTokenProvider = new GenerateTokenProvider()
    const token = await generateTokenProvider.execute(
      currentRefreshToken.userId
    )
    return { token }
  }
}
