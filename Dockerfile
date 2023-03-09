FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install && npm install typescript -g

COPY . .

EXPOSE 3000

RUN tsc

CMD ["node", "index.js"]

