import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from "fastify";

import config from "utils/config";

export default (req: FastifyRequest, res: FastifyReply, done: HookHandlerDoneFunction) => {
    const apiKey = req.headers['x-api-key'];

    if (apiKey !== config.API_KEY) {
        return res.code(401).send({ error: 'Unauthorized'});
    }

    done();
}