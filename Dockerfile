FROM node:lts-alpine as builder

WORKDIR .
COPY . ./
RUN npm install && npm run build

FROM nginx:alpine

COPY --from=builder /dist /usr/share/nginx/html