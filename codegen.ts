import type { CodegenConfig } from '@graphql-codegen/cli';
import configEnv from './src/utils/config';

const config: CodegenConfig = {
    overwrite: true,
    schema: configEnv.ANIMETHEMES_GRAPHQL,
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
