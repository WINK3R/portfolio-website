FROM node:lts-alpine as builder

WORKDIR /app
COPY . ./
RUN npm install && vite build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html