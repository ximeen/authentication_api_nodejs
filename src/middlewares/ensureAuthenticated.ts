import type {
  FastifyReply,
  FastifyRequest,
  HookHandlerDoneFunction,
} from 'fastify'
import { verify } from 'jsonwebtoken'

export function EnsureAuthorization(
  request: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction
) {
  try {
    const authToken = request.headers.authorization

    if (!authToken) {
      return reply.status(401).send({ message: 'Token is missing' })
    }

    const [, token] = authToken.split(' ')
    verify(token, 'teste')
    done()
  } catch (error) {
    reply.code(401).send({ error: 'Unauthorized!' })
  }
}
