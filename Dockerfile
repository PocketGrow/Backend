FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run generate

EXPOSE 8080

CMD [ "node", "src/server.js" ]