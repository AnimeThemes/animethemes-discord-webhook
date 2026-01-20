import Axios from 'axios';
import config from 'utils/config';

const graphqlClient = Axios.create({
    baseURL: config.ANIMETHEMES_GRAPHQL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export async function gql<T>(
    query: string,
    variables?: Record<string, unknown>
): Promise<T> {
    const { data } = await graphqlClient.post('', {
        query,
        variables,
    });

    if (data.errors) {
        throw new Error(data.errors[0].message);
    }

    return data.data;
}
