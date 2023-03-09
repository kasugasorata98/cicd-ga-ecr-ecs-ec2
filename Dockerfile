FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install && npm install typescript -g && npm install pm2 -g

COPY . .

EXPOSE 3000

RUN tsc

CMD ["pm2", "stop", "index.js", "&&", "pm2", "start", "index.js"]

