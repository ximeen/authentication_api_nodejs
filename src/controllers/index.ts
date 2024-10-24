import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { EnsureAuthorization } from '../middlewares/ensureAuthenticated'
import { AuthenticateUserController } from './user/authenticateUserController'
import { CreateUserController } from './user/createUserController'

export async function appRoutes(app: FastifyInstance) {
  const createUserController = new CreateUserController()
  const authenticateUserController = new AuthenticateUserController()

  app.post('/api/user/register', createUserController.handle)
  app.post('/api/user/login', authenticateUserController.handle)
  app.get(
    '/api/user/testes',
    { preHandler: EnsureAuthorization },
    (request: FastifyRequest, reply: FastifyReply) => {
      return [
        { id: 1, nome: 'jonh doe' },
        { id: 2, nome: 'ze' },
        { id: 3, nome: 'chico' },
      ]
    }
  )
}
