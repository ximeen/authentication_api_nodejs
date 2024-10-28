import type { FastifyReply, FastifyRequest } from 'fastify'
import { RefreshTokenShema } from '../../services/user/refreshTokenUserDTO'
import { RefreshTokenUserService } from '../../services/user/refreshTokenUserService'

export class RefreshTokenUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { refreshToken } = RefreshTokenShema.parse(request.body)

    const refreshTokenUserService = new RefreshTokenUserService()
    const token = await refreshTokenUserService.execute(refreshToken)
    return token
  }
}
