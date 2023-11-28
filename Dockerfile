FROM node:bookworm-slim

LABEL maintainer="marioguisado@correo.ugr.es"

WORKDIR /app

RUN mkdir -p /app/test && chown -R node:node /app

COPY package*.json ./

USER node

RUN npm ci

WORKDIR /app/test

ENTRYPOINT ["npm","test"]