import { FastifyInstance } from "fastify";
import { hello } from "./hello";

export async function appRoutes(app: FastifyInstance){
  app.get("/hello", hello)
}