#Build stage
FROM node:hydrogen-alpine3.20

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

CMD [ "serve", "-s", "dist","-p","9000" ]