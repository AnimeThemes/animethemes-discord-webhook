import { createHmac } from 'crypto';
import { FastifyRequest } from 'fastify';

const trello = (request: FastifyRequest, secret: string, callbackURL: string): boolean => {
    const base64Digest = function (s: string) {
        return createHmac('sha1', secret).update(s).digest('base64');
    };

    const content = JSON.stringify(request.body) + callbackURL;
    const doubleHash = base64Digest(content);
    const headerHash = request.headers['x-trello-webhook'];

    return doubleHash == headerHash;
};

export default trello;
