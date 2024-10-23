import fastify from 'fastify'
import { app } from './utils/fastifyApp'

const PORT = 3333

app.listen({ port: PORT }, (err, address) => {
  if (err) {
    console.log(err)
  }
  console.log(`Server running on port ${address}`)
})
