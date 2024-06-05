import routes from 'api/routes';
import ExtendClient from 'discord/ExtendClient';
import fastify from 'fastify';
import config from 'utils/config';

export const client = new ExtendClient();
export const server = fastify({ logger: true });

server.listen({
    host: config.API_HOST,
    port: +config.API_PORT ?? 3000
}, (err, address) => {
    if (err) {
        server.log.error(err);
        process.exit(1);
    }
    console.log(`Listening on: ${address}`);
});

client.start();
routes();