FROM node:lts-alpine as builder

WORKDIR /app
COPY . ./
RUN npm install && npm vite build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html