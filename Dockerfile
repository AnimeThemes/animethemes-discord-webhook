FROM node:24-slim AS base

ENV NODE_ENV=production

WORKDIR /app

FROM base AS install

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/root/.npm \
  if [ -f package-lock.json ]; then \
    npm ci --no-audit --no-fund; \
  else \
    echo "No lockfile found." && exit 1; \
  fi

FROM base AS release

COPY --from=install /app/node_modules ./node_modules

COPY . .

USER node

ENTRYPOINT [ "npm", "run", "start" ]
