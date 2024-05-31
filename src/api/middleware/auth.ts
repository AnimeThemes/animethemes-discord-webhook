import config from "utils/config";

export default (req: any, res: any) => {
    const apiKey = req.headers['x-api-key'];

    if (apiKey !== config.API_KEY) {
        console.log('Unautorized');
        return res.code(401).send({ error: 'Unauthorized'});
    }

    console.log('Authorized');
}