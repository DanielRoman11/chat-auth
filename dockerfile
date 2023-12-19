FROM node:20-alpine AS base

RUN npm i -g pnpm

FROM base AS dependencies

WORKDIR /
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

FROM base AS build

WORKDIR /
COPY . .
# COPY --from=dependencies /build/node_modules ./node_modules
# RUN pnpm prune --prod
CMD ["pnpm", "start:dev"]
