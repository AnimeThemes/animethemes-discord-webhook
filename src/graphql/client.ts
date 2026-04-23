import config from 'utils/config';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';

export async function gql<TData, TVariables>(
    document: TypedDocumentNode<TData, TVariables>,
    variables?: TVariables,
): Promise<TData> {
    const res = await fetch(config.ANIMETHEMES_GRAPHQL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: print(document),
            variables,
        }),
    });

    const json = await res.json();

    return json.data;
}
