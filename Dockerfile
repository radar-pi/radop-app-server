FROM node:12-alpine

WORKDIR /app

ADD .env /app

EXPOSE ${PORT}

ADD package.json /app

RUN npm install

RUN npm i -g @adonisjs/cli

COPY . /app

CMD ["npm", "start"]