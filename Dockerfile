FROM node:12-alpine

WORKDIR /app

ADD .env /app

EXPOSE 3333

ADD package.json /app

RUN npm i -g

RUN npm i -g @adonisjs/cli

COPY . /app

CMD ["npm", "start"]