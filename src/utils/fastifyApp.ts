import fastify from 'fastify'
import { appRoutes } from '../controllers'

export const app = fastify()

app.register(appRoutes)
