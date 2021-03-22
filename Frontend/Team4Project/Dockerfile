# This is run before building the docker image
# npm ci && npm run build


FROM nginx:alpine
WORKDIR /app
COPY /dist/Team4Project /usr/share/nginx/html
EXPOSE 80