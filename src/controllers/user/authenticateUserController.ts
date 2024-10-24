import type { FastifyReply, FastifyRequest } from 'fastify'
import { AuthenticateUserSchema } from '../../services/user/authenticateUserDTO'
import { AuthenticateUserService } from './../../services/user/authenticateUserService'

export class AuthenticateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const authenticateUserService = new AuthenticateUserService()
    const { username, password } = AuthenticateUserSchema.parse(request.body)

    const token = await authenticateUserService.execute({ username, password })
    return { token }
  }
}
