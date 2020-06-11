FROM node:12.16.3-alpine

WORKDIR /app

COPY . ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm run build