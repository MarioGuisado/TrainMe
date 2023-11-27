FROM node:bookworm-slim

LABEL maintainer="marioguisado@correo.ugr.es"

WORKDIR /app

COPY package*.json ./

RUN mkdir -p /app/test && chown -R node:node /app

USER node

RUN npm ci

WORKDIR /app/test

ENTRYPOINT ["npm","test"]