import type { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { CreateUserService } from '../../services/user/createUserService'
import { UserSchema } from '../../services/user/createUserServiceDTO'

export class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, password, username } = UserSchema.parse(request.body)

    const createUserService = new CreateUserService()
    const newUser = createUserService.execute({
      name,
      password,
      username,
    })
    return { newUser }
  }
}
