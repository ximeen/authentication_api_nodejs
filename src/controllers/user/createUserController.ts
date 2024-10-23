import type { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import { CreateUserService } from '../../services/user/createUserService'
import { UserSchema } from '../../services/user/createUserServiceDTO'

export class CreateUserController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const createUserService = new CreateUserService()
    const { name, password, username } = UserSchema.parse(request.body)
    const newUser = await createUserService.execute({
      name,
      password,
      username,
    })
    return newUser
  }
}
