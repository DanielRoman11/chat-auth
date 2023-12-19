FROM node:20-alpine AS base

RUN mkdir -p /usr/src/app
RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /usr/src/app
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install

FROM base AS build

WORKDIR /usr/src/app
COPY . .
COPY --from=dependencies /build/node_modules ./node_modules
RUN pnpm prune --prod

CMD ["pnpm", "start:build"]
