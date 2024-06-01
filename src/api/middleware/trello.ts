import { createHmac } from 'crypto';

export default (request: any, secret: any, callbackURL: any) => {
    const base64Digest = function (s: any) {
        return createHmac("sha1", secret).update(s).digest("base64");
    };
    
    const content = JSON.stringify(request.body) + callbackURL;
    const doubleHash = base64Digest(content);
    const headerHash = request.headers["x-trello-webhook"];

    return doubleHash == headerHash;
}