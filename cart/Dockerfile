FROM node:14.16.0-alpine3.13

WORKDIR '/app'

COPY ./package.json .

RUN yarn add glob rimraf
RUN yarn --only=prod

COPY . .

CMD [ "npm","start"]