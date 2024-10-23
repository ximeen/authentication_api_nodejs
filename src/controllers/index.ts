import type { FastifyInstance } from 'fastify'
import { CreateUserController } from './user/createUserController'

export async function appRoutes(app: FastifyInstance) {
  const authenticateUserController = new CreateUserController()

  app.get('/register', authenticateUserController.handle)
}
