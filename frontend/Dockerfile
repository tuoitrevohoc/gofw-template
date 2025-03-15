FROM node:latest AS builder

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

FROM caddy:latest

WORKDIR /app

COPY --from=builder /app/dist /srv




