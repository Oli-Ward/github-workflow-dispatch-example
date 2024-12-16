FROM node:18.16.1-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
RUN npm i -g ts-node@10 

WORKDIR /home/node/app

COPY ./package*.json ./
RUN npm ci
COPY ./tsconfig.json ./tsconfig.json
COPY ./src ./src
EXPOSE 9990
RUN npm run build

CMD ["npm", "run", "start"]