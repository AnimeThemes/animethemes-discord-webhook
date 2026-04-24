import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://graphql.animethemes.test',
    documents: ['src/**/*.{ts,tsx,graphql}'],
    generates: {
        'src/graphql/generated/': {
            preset: 'client',
            presetConfig: {
                fragmentMasking: false,
            },
        },
    },
};

export default config;
