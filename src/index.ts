import { fastify } from 'fastify';
import { configureRoutes } from './routes/routes';

const Port = process.env.PORT ?? "9994";
const server = fastify({logger: true } );

const start = async () => {
    try { 
        configureRoutes(server);
        await server.listen({port: parseInt(Port), host: '::'});
        console.log(`Server started at ${Port}`);
    } catch (err) {
        console.error('Error starting server', err);
        process.exit(1);
    }
};
start();