import fastify from 'fastify'
import { appRoutes } from '../controllers'
import { EnsureAuthorization } from '../middlewares/ensureAuthenticated'

export const app = fastify()

app.register(appRoutes)
