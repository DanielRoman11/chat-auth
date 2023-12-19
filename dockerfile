FROM node:alpine AS base

RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /build
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

FROM base AS build

WORKDIR /build
COPY . .
COPY --from=dependencies /build/node_modules ./node_modules
RUN pnpm prune --prod
CMD ["pnpm", "start:build"]


