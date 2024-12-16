import { FastifyInstance } from 'fastify';

export function configureRoutes(server: FastifyInstance) {
    server.get('/', async (request, reply) => {
         reply.send({ hello: 'world' })
  });
}