# build stage
FROM node:lts-hydrogen AS build-stage
WORKDIR /app
COPY package*.json ./
# Omitting --ignore-script here, because they may be needed for dependencies to build well
# => a regular audit of our dependencies should be made, to notice and address any vulnerabilities
RUN npm install
# This copies all files from the current directory to the WORKDIR in the image
# It is only safe if the .dockerignore file is properly configured to avoid copying
# sensitive or useless files to the image
COPY . .

RUN npm run build

# production stage
# FIXME? The nginx image runs with root as the default user. Make sure it is safe here
FROM nginx:stable-alpine AS production-stage
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
