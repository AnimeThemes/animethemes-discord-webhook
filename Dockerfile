FROM oven/bun:1.3.8 AS base

WORKDIR /app

FROM base AS install

RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

FROM base AS release

COPY --from=install /temp/prod/node_modules node_modules

COPY . .

ENV NODE_ENV=production

ENTRYPOINT [ "bun", "run", "start" ]
