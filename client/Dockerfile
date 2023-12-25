FROM node:alpine as build

WORKDIR /app

RUN npm install -g npm@9.7.1

COPY package.json .
RUN npm i --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
