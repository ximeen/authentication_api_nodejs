import { app } from "./utils/fastifyApp"

const PORT = 3333

app.listen({port:PORT}, ()=>{
  console.log("Server running on PORT" + PORT)
})