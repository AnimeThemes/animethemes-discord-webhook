import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify';

import config from 'utils/config';

const auth = (req: FastifyRequest, res: FastifyReply, done: HookHandlerDoneFunction) => {
    const apiKey = req.headers['x-api-key'];

    if (config.NODE_ENV === 'production' && apiKey !== config.API_KEY) {
        res.code(401).send({ error: 'Unauthorized' });

        return;
    }

    done();
};

export default auth;
