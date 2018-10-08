FROM node:10.11.0-alpine
EXPOSE 8080
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

COPY . ./
RUN yarn exec tsc

CMD ["node", "dist/main.js"]
