FROM node:lts-alpine as build-stage
RUN apk add --no-cache git
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx:stable-alpine as production-stage
EXPOSE 80
COPY --from=build-stage /client/dist /usr/share/nginx/html
