import { compare } from 'bcryptjs'
import { GenerateRefreshToken } from '../../provider/generateRefreshTokenProvider'
import { GenerateTokenProvider } from '../../provider/generateTokenProvider'
import { prisma } from '../../utils/prisma'
import type { authenticateUserTypes } from './authenticateUserDTO'

export class AuthenticateUserService {
  async execute({ password, username }: authenticateUserTypes) {
    const userAlreadyExist = await prisma.user.findFirst({
      where: {
        username,
      },
    })
    if (!userAlreadyExist) {
      throw new Error('User or password incorrect')
    }

    const passwordMatch = await compare(password, userAlreadyExist.password)
    if (!passwordMatch) {
      throw new Error('User or password incorrect')
    }

    // const token = sign({}, 'teste', {
    //   subject: userAlreadyExist.id,
    //   expiresIn: '20s',
    // })

    const generateTokenProvider = new GenerateTokenProvider()
    const token = await generateTokenProvider.execute(userAlreadyExist.id)

    const generateRefreshToken = new GenerateRefreshToken()
    const refreshToken = await generateRefreshToken.execute(userAlreadyExist.id)
    return { token, refreshToken }
  }
}
